import { FC, useEffect, useRef } from 'react';

import { useUpdateAtom } from 'jotai/utils';
import { first, last, pick } from 'lodash';
import styled, { css } from 'styled-components';

import { CornerColumn } from './Table/CornerColumn';
import { InnerTable } from './Table/InnerTable';
import { hoveredRow } from './Table/store';

export interface Definition {
  width: string;
  column: string;
  label: string;
  renderer: FC<any>;
}

export interface TableProps<T extends readonly Definition[]> {
  items: Record<T[number]['column'], any>[];
  definitions: T;
  variant?: TableVariant;
  rowsHeight?: string;
  fetchMoreThreshold?: number;
  isLastFixed?: boolean;
  rounded?: boolean;
  infinite?: boolean;
  isFetchingMore?: boolean;
  hasNextPage?: boolean;
  onFetchMore?: () => void;
  onRowClick?: (rowId: number) => void;
}

export type TableVariant = 'lernito' | 'iknito';
export const Table = <T extends readonly Definition[]>(props: TableProps<T>) => {
  const {
    definitions,
    items,
    fetchMoreThreshold = 150,
    variant = 'iknito',
    isLastFixed = true,
    rounded = false,
    infinite = false,
    isFetchingMore,
    hasNextPage,
    onFetchMore,
    rowsHeight = '93px',
    onRowClick,
  } = props;

  const setHoveredRow = useUpdateAtom(hoveredRow);

  const gridRef = useRef<HTMLDivElement | null>(null);

  // @ts-ignore
  useEffect(() => {
    if (!infinite) return;

    const updateScrollPosition = () => {
      const { scrollHeight, offsetHeight, scrollTop } = gridRef.current!;
      const distance = offsetHeight + scrollTop;
      if (
        distance > scrollHeight - fetchMoreThreshold &&
        hasNextPage &&
        !isFetchingMore &&
        onFetchMore
      ) {
        onFetchMore();
      }
    };

    const refCurrent = gridRef?.current;
    if (refCurrent) {
      refCurrent.addEventListener('scroll', updateScrollPosition, false);
      return () => {
        refCurrent?.removeEventListener('scroll', updateScrollPosition, false);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const firstDefinition = first(definitions) as Definition;

  const lastDefinition = last(definitions) as Definition;

  const innerTableDefinitions = isLastFixed
    ? definitions.slice(1, -1)
    : definitions.slice(1);

  const innerTableDefinitionColNames = innerTableDefinitions.map((def) => def.column);

  const innerTableItems = items.map((item) => pick(item, innerTableDefinitionColNames));

  const TableGrid = () => {
    return (
      <Grid
        rowsHeight={rowsHeight}
        isLastHidden={!isLastFixed}
        firstColWidth={firstDefinition.width}
        lastColWidth={lastDefinition.width}
        onMouseLeave={() => setHoveredRow(-1)}
        infinite={infinite}
        ref={gridRef}
      >
        <CornerColumn
          items={items.map((item) => item[firstDefinition.column])}
          definition={firstDefinition}
          rowsHeight={rowsHeight}
          position="left"
          onRowClick={onRowClick}
          rounded={rounded}
          variant={variant}
        />
        <InnerTable
          rowsHeight={rowsHeight}
          onRowClick={onRowClick}
          definitions={innerTableDefinitions}
          items={innerTableItems}
          variant={variant}
          isLastFixed={isLastFixed}
        />
        {isLastFixed && (
          <CornerColumn
            rowsHeight={rowsHeight}
            items={items.map((item) => item[lastDefinition.column])}
            definition={lastDefinition}
            position="right"
            onRowClick={onRowClick}
            rounded={rounded}
            variant={variant}
          />
        )}
      </Grid>
    );
  };
  return <TableGrid />;
};

interface TableGrid {
  lastColWidth: string;
  firstColWidth: string;
  isLastHidden: boolean;
  infinite?: boolean;
  rowsHeight: string;
}

const Grid = styled.div<TableGrid>`
  height: inherit;
  margin-bottom: 100px;
  ${({ infinite }) => {
    return (
      infinite &&
      css`
        overflow-y: scroll;
      `
    );
  }}

  width: 100%;
  display: grid;
  grid-row-gap: 1px;
  grid-auto-rows: ${({ rowsHeight }) => rowsHeight};
  grid-template-rows: 52px;
  grid-template-columns: ${({ firstColWidth, lastColWidth, isLastHidden }) =>
    isLastHidden ? `${firstColWidth} 1fr ` : `${firstColWidth} 1fr ${lastColWidth}`};
`;
