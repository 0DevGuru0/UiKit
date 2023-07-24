import { FC, ReactElement, useEffect } from 'react';
import styled from 'styled-components';
import { Virtuoso } from 'react-virtuoso';

export interface InfiniteListProps {
  items: any[];
  loadingIndicator: ReactElement;
  height: string | number;
  width: string | number;
  hasNextPage?: boolean;
  hideScroll?: boolean;
  isNextPageLoading?: boolean;
  className?: string;
  loadNextPage: () => void;
  itemContent?: (index: any, item: any) => ReactElement;
}

export const InfiniteList: FC<InfiniteListProps> = (props) => {
  const {
    hasNextPage,
    hideScroll,
    isNextPageLoading,
    loadingIndicator,
    items,
    height,
    width,
    itemContent,
    loadNextPage,
    className,
  } = props;

  let loadMoreItems: () => void = () => null;
  if (!isNextPageLoading && hasNextPage) {
    loadMoreItems = loadNextPage;
  }

  useEffect(() => {
    if (items.length === 0) loadMoreItems();
  }, [items.length]);

  return (
    <StyledVirtuoso
      style={{ height, width }}
      data={items}
      endReached={() => {
        loadMoreItems();
      }}
      className={className}
      $hideScroll={hideScroll}
      itemContent={itemContent ? itemContent : (_, item) => item as ReactElement}
      totalCount={items.length}
      components={{
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Footer:
          // eslint-disable-next-line react/display-name
          () => <span>{hasNextPage ? loadingIndicator : undefined}</span>,
      }}
    />
  );
};

const StyledVirtuoso = styled(Virtuoso)<{ $hideScroll?: boolean }>``;
