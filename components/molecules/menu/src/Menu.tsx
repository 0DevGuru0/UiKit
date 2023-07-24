import { JSXElementConstructor, ReactElement } from 'react';
import styled from 'styled-components';

import { Item } from './Menu/Item';

export interface AdvanceItem {
  label: string;
  details?: string;
  icon?: ReactElement;
}

interface MenuCommonProps<T extends string | AdvanceItem = string | AdvanceItem> {
  className?: string;
  size?: 'small' | 'big';
  variant?: 'TROWEB' | 'LERNITO';
  emptyMenuMessage?: string | ReactElement;
  items: T[][];
  checkComponent?: JSXElementConstructor<any>;
}

export type MenuProps<T extends string | AdvanceItem = string | AdvanceItem> = (
  | {
      isMultiSelectable?: false;
      selectedItem?: T;
      onChangeSelectedItems?: (value: T) => void;
    }
  | {
      isMultiSelectable: true;
      selectedItems?: T[];
      onChangeSelectedItems?: (value: T[]) => void;
    }
) &
  MenuCommonProps;

export const Menu = <T extends string | AdvanceItem = string | AdvanceItem>({
  variant = 'TROWEB',
  size = 'small',
  emptyMenuMessage = 'No items!',
  ...props
}: MenuProps) => {
  const { className, items, onChangeSelectedItems, isMultiSelectable, checkComponent } =
    props;

  const isEmpty = !items?.[0]?.[0];
  if (isEmpty) {
    return (
      <StyledMenu className={className} size={size}>
        <EmptyMenuContent size={size}>{emptyMenuMessage}</EmptyMenuContent>
      </StyledMenu>
    );
  }

  // eslint-disable-next-line sonarjs/cognitive-complexity
  const createItemProps = (item: T) => {
    const isStringItem = typeof item === 'string';
    const id = isStringItem ? item : item.label;

    let isSelected = false;
    if (isMultiSelectable) {
      isSelected = !!props.selectedItems?.find((selectedItem) =>
        isStringItem
          ? selectedItem === item
          : (selectedItem as AdvanceItem).label === item.label,
      );
    } else {
      isSelected = isStringItem
        ? props.selectedItem === item
        : (props.selectedItem as AdvanceItem)?.label === item.label;
    }

    const onClickItem = () => {
      if (!isMultiSelectable) {
        onChangeSelectedItems?.(item);
      } else {
        if (isSelected) {
          const filteredSelectedItems =
            props.selectedItems?.filter((selectedItem) =>
              isStringItem
                ? selectedItem !== item
                : (selectedItem as AdvanceItem).label !== item.label,
            ) ?? [];
          onChangeSelectedItems?.(filteredSelectedItems);
        } else {
          onChangeSelectedItems?.([...(props.selectedItems ?? []), item]);
        }
      }
    };

    return { id, isSelected, onClickItem };
  };

  return (
    <StyledMenu className={className} size={size}>
      {items.map((itemsArr, index) => (
        <div key={`ItemsArr_${index}`}>
          {index !== 0 && <HorizontalDivider />}

          {itemsArr.map((item) => {
            const { id, isSelected, onClickItem } = createItemProps(item as T);
            return (
              <ItemContainer key={id}>
                <Item
                  size={size}
                  variant={variant}
                  id={id}
                  content={item}
                  isSelected={isSelected}
                  isMultiSelectable={isMultiSelectable}
                  checkComponent={checkComponent}
                  onClickItem={onClickItem}
                />
              </ItemContainer>
            );
          })}
        </div>
      ))}
    </StyledMenu>
  );
};

const StyledMenu = styled.div<Pick<MenuProps, 'size'>>`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: fit-content;
  min-width: ${({ size }) => (size === 'small' ? 140 : 285)}px;
  background-color: ${({ theme }) => theme.palette.grey[100]};
  padding: ${({ size }) => (size === 'small' ? 6 : 12)}px;
  border-radius: 8px;
  box-shadow: 0 6px 20px 0 ${({ theme }) => theme.palette.grey[400]};
  overflow: hidden;
  overflow-y: auto;
  z-index: 999;
`;

const EmptyMenuContent = styled.div<Pick<MenuProps, 'size'>>`
  font-size: ${({ size }) => (size === 'small' ? 14 : 16)}px;
  text-align: center;
  color: ${({ theme }) => theme.palette.grey[700]};
`;

const ItemContainer = styled.div`
  flex-shrink: 0;
`;

const HorizontalDivider = styled.div`
  flex-shrink: 0;
  height: 1px;
  background-color: ${({ theme }) => theme.palette.grey[700]};
  opacity: 0.25;
`;
