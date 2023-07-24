import { useMemo } from 'react';

import { useAtom } from 'jotai';
import { useAtomValue } from 'jotai/utils';
import ScrollContainer, { ScrollContainerProps } from 'react-indiana-drag-scroll';
import styled from 'styled-components';

import { Definition, TableProps, TableVariant } from '../Table';
import { header } from './sharedTableStyle';
import { hoveredRow, overflowScrollNone } from './store';
import { hideScrollBar } from './utils/hideScrollBar';

export const InnerTable = <T extends readonly Definition[]>(props: TableProps<T>) => {
  const { definitions, items, onRowClick, variant, isLastFixed } = props;
  const [_hoveredRow, setHoveredRow] = useAtom(hoveredRow);
  const _overflowNone = useAtomValue(overflowScrollNone);

  const colsWidth = useMemo(() => {
    return definitions.map((el) => `minmax(${el.width}, auto)`).join(' ');
  }, [definitions]);

  if (typeof window === 'undefined') {
    return <div />;
  }
  return (
    <TableScrollContainer
      vertical={false}
      colStart={2}
      rowsHeight={props.rowsHeight!}
      colEnd={3}
      variant={variant!}
      rowStart={1}
      overflowNone={_overflowNone}
      rowEnd={items.length + 2}
      colsWidth={colsWidth}
    >
      {definitions.map((el, idx) => (
        <Header
          key={idx}
          colStart={idx + 1}
          colEnd={idx + 2}
          rowStart={1}
          rowEnd={2}
          isLast={definitions.length === idx + 1}
          isLastFixed={isLastFixed}
        >
          {el.label}
        </Header>
      ))}
      {items.map((rowData, rowIndex) => {
        return Object.keys(rowData).map((cellName, cellIndex) => {
          const Renderer = definitions[cellIndex].renderer;
          return (
            <DataCell
              key={`${rowIndex}_${cellIndex}`}
              colStart={cellIndex + 1}
              colEnd={cellIndex + 2}
              rowStart={rowIndex + 2}
              rowEnd={rowIndex + 3}
              variant={variant!}
              onMouseOver={() => setHoveredRow(rowIndex)}
              onClick={onRowClick ? () => onRowClick(_hoveredRow) : undefined}
              clickable={!!onRowClick}
            >
              <Renderer {...rowData[cellName]} />
            </DataCell>
          );
        });
      })}
    </TableScrollContainer>
  );
};

interface CellProps {
  colStart: number;
  colEnd: number;
  rowStart: number;
  rowEnd: number;
  isLast?: boolean;
  isLastFixed?: boolean;
}
type TableScrollContainerProps = CellProps &
  ScrollContainerProps & {
    colsWidth: string;
    overflowNone: boolean;
    rowsHeight: string;
    variant: TableVariant;
  };

const TableScrollContainer = styled(ScrollContainer)<TableScrollContainerProps>`
  height: 100%;
  overflow: ${({ overflowNone }) => (overflowNone ? 'unset' : 'auto')};
  z-index: 2;
  display: grid;
  grid-template-rows: 52px;
  grid-template-columns: ${({ colsWidth }) => colsWidth};
  grid-row: ${({ rowStart, rowEnd }) => `${rowStart} / ${rowEnd}`};
  grid-column: ${({ colStart, colEnd }) => `${colStart} / ${colEnd}`};
  grid-auto-rows: ${({ rowsHeight }) => rowsHeight};
  grid-auto-columns: ${({ colsWidth }) => colsWidth};
  background-color: ${({ theme, variant }) =>
    variant === 'iknito' ? theme.palette.grey[200] : 'inherit'};
  background-position: left center, right center, left center, right center;
  background-repeat: no-repeat;
  background-size: 24px 100%, 24px 100%, 12px 100%, 12px 100%;
  background-attachment: local, local, scroll, scroll;
  ${hideScrollBar}
`;

type DataCellProps = CellProps & {
  variant: TableVariant;
  clickable?: boolean;
};

const DataCell = styled.div<DataCellProps>`
  padding: 4px;
  padding-left: 36px;
  display: flex;
  flex-direction: column;
  border-bottom: ${({ theme, variant }) =>
    variant === 'iknito'
      ? `1px solid ${theme.palette.grey[600]}`
      : `1px solid ${theme.palette.grey[400]}`};

  justify-content: center;
  align-items: stretch;
  grid-row: ${({ rowStart, rowEnd }) => `${rowStart} / ${rowEnd}`};
  grid-column: ${({ colStart, colEnd }) => `${colStart} / ${colEnd}`};
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'inherit')};
`;

const Header = styled.div<CellProps>`
  ${header}
  padding-left: 36px;
  background-color: ${({ theme }) => theme.palette.grey[300]};
  grid-row: ${({ rowStart, rowEnd }) => `${rowStart} / ${rowEnd}`};
  grid-column: ${({ colStart, colEnd }) => `${colStart} / ${colEnd}`};
  border-radius: ${({ isLast, isLastFixed }) =>
    !isLastFixed && isLast && ' 0 12px 12px 0'};
`;
