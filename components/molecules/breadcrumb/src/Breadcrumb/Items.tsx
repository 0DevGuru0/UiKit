import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { Tooltip } from '@avidkit/tooltip';
import { BreadcrumbStep } from '../Breadcrumb';
import { Separator, SeparatorProps, TextVariants } from './Separator';
import { Item, ItemProps } from './Items/Item';

export interface ItemRendererProps {
  item: Omit<BreadcrumbStep, 'onClick'>;
  itemCmp: ReactElement;
  children?: ReactElement;
}

export type ItemsProps = {
  items: BreadcrumbStep[];
  isBold?: boolean;
  variant: TextVariants;
  tooltipTitle?: string;
  ellipsisFirstItem?: boolean;
  ellipsisLastItem?: boolean;
  hideLastSeparator?: boolean;
  disableLastItem?: boolean;
  itemRenderer?: (args: ItemRendererProps) => JSX.Element;
} & SeparatorProps &
  Pick<ItemProps, 'numberOfWordsToShow'>;

export const Items: FC<ItemsProps> = ({
  items,
  isBold,
  variant,
  separator,
  tooltipTitle,
  numberOfWordsToShow,
  ellipsisFirstItem,
  ellipsisLastItem,
  hideLastSeparator,
  itemRenderer,
  disableLastItem,
}) => {
  // eslint-disable-next-line sonarjs/cognitive-complexity
  const chooseItemTypeHandler = (item: BreadcrumbStep, index: number) => {
    let ellipsis = true;
    if (index === 0) {
      ellipsis = ellipsisFirstItem ?? false;
    } else if (index === items.length - 1) {
      ellipsis = ellipsisLastItem ?? false;
    }
    const breadcrumbItem = (
      <Item
        title={item.title}
        numberOfWordsToShow={numberOfWordsToShow}
        ellipsis={ellipsis}
      />
    );
    const renderItem = () =>
      itemRenderer ? (
        itemRenderer({ item, itemCmp: breadcrumbItem })
      ) : (
        <a href={item.href}>{breadcrumbItem}</a>
      );

    if (index === items.length - 1 && disableLastItem) {
      return (
        <>
          <LastItem $isBold={isBold} $variant={variant}>
            {renderItem()}
          </LastItem>
          {!hideLastSeparator && <Separator separator={separator} variant={variant} />}
        </>
      );
    } else if (item?.href) {
      return (
        <>
          <Tooltip title={tooltipTitle ?? `Go to ${item.title}`}>
            <ItemContainer
              $variant={variant}
              onClick={item?.onClick}
              $isClickable={!!item?.href && !item.disabled}
              $disabled={item?.disabled ?? false}
            >
              {renderItem()}
            </ItemContainer>
          </Tooltip>
          <Separator separator={separator} variant={variant} />
        </>
      );
    } else {
      return (
        <>
          <ItemContainer
            $variant={variant}
            $isClickable={!!item?.href && !item.disabled}
            $disabled={item?.disabled ?? false}
          >
            {renderItem()}
          </ItemContainer>
          <Separator separator={separator} variant={variant} />
        </>
      );
    }
  };

  return <>{items.map((item, index) => chooseItemTypeHandler(item, index))}</>;
};

interface NormalItemsProps {
  $isClickable: boolean;
  $variant: TextVariants;
  $disabled: boolean;
}

const ItemContainer = styled.div<NormalItemsProps>`
  line-height: 0.9;
  text-decoration: none;
  font-weight: 600;
  display: block;
  white-space: nowrap;
  pointer-events: ${({ $disabled }) => $disabled && 'none'};
  opacity: ${({ $disabled }) => $disabled && '0.5'};
  color: ${({ theme }) => theme.palette.grey[500]};
  cursor: ${({ $isClickable }) => ($isClickable ? 'pointer' : 'default')};
  font-size: ${({ $variant }) => {
    if ($variant === 'head') {
      return '20px';
    } else if ($variant === 'small') {
      return '12px';
    } else {
      return '14px';
    }
  }};
  &:hover {
    color: ${({ theme, $isClickable, $disabled }) =>
      $disabled ? theme.palette.grey[400] : $isClickable && theme.palette.primary[500]};
  }

  &:active {
    color: ${({ theme, $isClickable, $disabled }) =>
      $disabled ? theme.palette.grey[400] : $isClickable && theme.palette.primary[600]};
  }
`;

interface LastItemProps {
  $isBold?: boolean;
  $variant: TextVariants;
}

export const LastItem = styled.li<LastItemProps>`
  font-weight: 600;
  line-height: ${({ $isBold }) => ($isBold ? 0.7 : 0.9)};
  font-size: ${({ $variant, $isBold }) => {
    if ($variant === 'head') {
      return $isBold ? '36px' : '20px';
    } else if ($variant === 'small') {
      return '12px';
    } else {
      return '14px';
    }
  }};
  color: ${({ theme }) => theme.palette.grey[800]};
  white-space: nowrap;
`;
