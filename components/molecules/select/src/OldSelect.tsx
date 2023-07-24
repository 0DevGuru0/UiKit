/* eslint-disable react-hooks/exhaustive-deps */
import {
  JSXElementConstructor,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { concat, isString, uniq, uniqBy, xor, xorBy } from 'lodash';
import { AdvanceItem as Item, Menu } from '@avidkit/menu';
import { useClickOutside, useScroll } from '@avidkit/hooks';
import { Selector } from './OldSelect/Selector';
import { InputLabel } from './Select/InputLabel';
import { isArrayOfString } from './OldSelect/isArrayOfString';

export interface OldSelectCommonProps<T extends string | Item = string | Item> {
  items: T[];
  label?: string;
  loading?: boolean;
  icon?: JSX.Element;
  disabled?: boolean;
  errorText?: string;
  isOptional?: boolean;
  placeHolder?: string;
  controllerIcon?: JSX.Element;
  rendererRef?: RefObject<HTMLInputElement>;
  className?: string;
  customStyle?: FlattenSimpleInterpolation;
  emptyTitle?: JSX.Element;
  variant?: 'TROWEB' | 'LERNITO';
  emptyInput?: boolean;
  checkComponent?: JSXElementConstructor<any>;
  onLoadMoreItems?: () => void;
  onControllerClick?: () => void;
  onCloseShowMenu?: () => void;
  renderInput?: () => JSX.Element;
}

export type OldSelectProps<T extends string | Item = string | Item> = (
  | {
      multiSelectable?: false;
      selectedItem?: T;
      onSelect: (item: T, itemRef?: HTMLDivElement) => void;
    }
  | {
      multiSelectable: true;
      selectedItems: OldSelectCommonProps['items'];
      onSelect: (items: T[], itemRef?: HTMLDivElement) => void;
    }
) &
  OldSelectCommonProps;

export const OldSelect = <T extends string | Item = string | Item>({
  variant = 'TROWEB',
  onCloseShowMenu,
  ...props
}: // eslint-disable-next-line sonarjs/cognitive-complexity
OldSelectProps<T>) => {
  const isDisabled = props.disabled || false;
  const menuRef = useRef<HTMLInputElement>(null);
  const [showMenu, setShowMenu] = useState(false);

  const menuItemEls = useRef<Record<string, HTMLDivElement | null>>({});
  const isOpen = !isDisabled && showMenu;
  const hasFilterRenderer = !!props.renderInput;
  const isFilled =
    (props.multiSelectable ? props.selectedItems.length > 0 : props.selectedItem) &&
    !props.emptyInput;

  const handleCloseMenu = () => {
    onCloseShowMenu?.();
    setShowMenu(false);
  };

  let selectorText: string | undefined;
  if (props.multiSelectable) {
    selectorText = props.selectedItems
      .map((item) => (isString(item) ? item : item.label))
      .join(', ');
  } else {
    selectorText = isString(props.selectedItem)
      ? props.selectedItem
      : props.selectedItem?.label;
  }

  let sortedItems = props.items;
  if (props.multiSelectable && hasFilterRenderer) {
    sortedItems = concat(
      props.selectedItems,
      isArrayOfString(props.items)
        ? xor(props.items, props.selectedItems)
        : xorBy(props.items, props.selectedItems, 'id'),
    );
  }

  const { hitThreshold } = useScroll(menuRef ?? null, '80%');

  const containerRef = useClickOutside(handleCloseMenu);

  const onToggle = () => {
    if (
      !isDisabled &&
      (!props.multiSelectable || !showMenu) &&
      (!hasFilterRenderer || !props.multiSelectable || !showMenu)
    ) {
      if (showMenu) {
        handleCloseMenu();
      } else setShowMenu(true);
    }
  };

  const onSelectHandler = (item: any) => {
    props.onSelect(item, menuItemEls.current[item] ?? undefined);
  };

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Escape') {
        handleCloseMenu();
      }
    },
    [showMenu],
  );

  useEffect(() => {
    setTimeout(() => showMenu && props.rendererRef?.current?.focus(), 500);
  }, [showMenu]);

  useEffect(() => {
    if (isDisabled) {
      handleCloseMenu();
    }
  }, [isDisabled]);

  useEffect(() => {
    if (hitThreshold) {
      props.onLoadMoreItems?.();
    }
  }, [hitThreshold]);

  const baseMenuProps = useMemo(
    () => ({
      items: [
        isArrayOfString(props.items) ? uniq(sortedItems) : uniqBy(sortedItems, 'id'),
      ],
      onChangeSelectedItems: onSelectHandler,
      emptyMenuMessage: props.emptyTitle ?? (props.renderInput && 'No results found!'),
      variant,
      checkComponent: props.checkComponent,
    }),
    [sortedItems, props.emptyTitle, props.renderInput, variant, props.checkComponent],
  );

  return (
    <Container
      $customStyle={props.customStyle}
      className={props.className}
      ref={containerRef}
      onClick={onToggle}
      onKeyDown={onKeyDown}
    >
      {props.label && <InputLabel {...props} isFilled={isFilled} />}
      <Selector
        {...props}
        isOpen={isOpen}
        isFilled={isFilled}
        isFocused={showMenu}
        hasError={!!props.errorText}
        selectedValue={selectorText}
        onControllerClick={props.onControllerClick}
        controllerIcon={props.controllerIcon}
        variant={variant}
      />
      {isOpen &&
        (props.multiSelectable ? (
          <StyledMenu
            {...baseMenuProps}
            isMultiSelectable
            selectedItems={props.selectedItems}
            size="big"
          />
        ) : (
          <StyledMenu
            {...baseMenuProps}
            isMultiSelectable={false}
            selectedItem={props.selectedItem}
            size="big"
          />
        ))}
      {props.errorText && <Error>{props.errorText}</Error>}
    </Container>
  );
};

interface ContainerProps {
  $customStyle?: FlattenSimpleInterpolation;
}

const Container = styled.div<ContainerProps>`
  position: relative;
  ${({ $customStyle }) => $customStyle}
`;

const Error = styled.div`
  margin-top: 12px;
  color: ${({ theme }) => theme.palette.error.main};
`;

const StyledMenu = styled(Menu)`
  width: 100%;
  position: absolute;
  box-sizing: border-box;
`;
