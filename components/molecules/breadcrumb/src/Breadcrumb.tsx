import { FC } from 'react';
import styled from 'styled-components';
import { SeparatorVariants, TextVariants } from './Breadcrumb/Separator';
import { HiddenItems } from './Breadcrumb/HiddenItems';
import { Items, ItemsProps } from './Breadcrumb/Items';
import { ItemProps } from './Breadcrumb/Items/Item';

export interface BreadcrumbStep {
  title: string;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export interface BreadcrumbProps extends Pick<ItemsProps, 'itemRenderer'> {
  items: BreadcrumbStep[];
  separator?: SeparatorVariants;
  ellipsis?: {
    ellipsisAll?: boolean;
  } & Partial<Pick<ItemProps, 'numberOfWordsToShow'>>;

  limitFrom?: 'start' | 'end';
  threshold?: number;

  variant?: TextVariants;

  alignItemsCenter?: boolean;
  boldLastItem?: boolean;

  tooltipTitle?: string;
  otherTooltipTitle?: string;

  className?: string;
}

export const Breadcrumb: FC<BreadcrumbProps> = ({
  items,
  threshold = 2,
  separator = '>',
  variant = 'head',
  boldLastItem = true,
  limitFrom = 'start',
  tooltipTitle,
  otherTooltipTitle = 'View other pages',
  alignItemsCenter,
  itemRenderer,
  className,
  ellipsis,
}) => {
  const getValidThreshold = () => {
    if (threshold === 0) {
      return 1;
    } else if (threshold >= items.length) {
      // avoid repeating the first or last one
      return items.length - 1;
    }
    return threshold;
  };

  const itemsThreshold = getValidThreshold();
  const hasMiddleItems = items.length - 1 > itemsThreshold;

  let firstItems: BreadcrumbStep[] = [];
  let middleItems: BreadcrumbStep[] = [];
  let lastItems: BreadcrumbStep[] = [];

  if (limitFrom === 'start') {
    firstItems = items.slice(0, itemsThreshold);
    middleItems = items.slice(itemsThreshold, -1);
    lastItems = [items[items.length - 1]];
  } else {
    firstItems = [items[0]];
    lastItems = items.slice(items.length - itemsThreshold, items.length);
    middleItems = items.slice(1, items.length - itemsThreshold);
  }

  const numberOfWordsToShow = ellipsis?.numberOfWordsToShow ?? 13;
  return (
    <Container className={className} alignItemsCenter={alignItemsCenter}>
      <Items
        items={firstItems}
        separator={separator}
        variant={variant}
        tooltipTitle={tooltipTitle}
        numberOfWordsToShow={numberOfWordsToShow}
        itemRenderer={itemRenderer}
        ellipsisFirstItem={ellipsis?.ellipsisAll}
        ellipsisLastItem={firstItems.length > 1 || ellipsis?.ellipsisAll}
      />
      {hasMiddleItems && (
        <HiddenItems
          items={middleItems}
          otherTooltipTitle={otherTooltipTitle}
          itemRenderer={itemRenderer}
          separator={separator}
          variant={variant}
        />
      )}
      <Items
        variant={variant}
        isBold={boldLastItem}
        items={lastItems}
        separator={separator}
        itemRenderer={itemRenderer}
        tooltipTitle={tooltipTitle}
        numberOfWordsToShow={numberOfWordsToShow}
        ellipsisFirstItem={lastItems.length > 1 || ellipsis?.ellipsisAll}
        ellipsisLastItem={ellipsis?.ellipsisAll}
        hideLastSeparator
        disableLastItem
      />
    </Container>
  );
};

const Container = styled.ul<Pick<BreadcrumbProps, 'alignItemsCenter'>>`
  display: flex;
  align-items: ${({ alignItemsCenter }) => (alignItemsCenter ? 'center' : 'flex-end')};
  list-style-type: none;
  list-style: none;
  padding: 0;
  margin: 0;
`;
