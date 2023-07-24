/* eslint-disable react/display-name */
import { TableVirtuoso, TableVirtuosoProps } from 'react-virtuoso';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ForwardedRef, forwardRef } from 'react';
import { omitNullish } from '@avidkit/utils';
import styled, { css } from 'styled-components';
import { DefaultCell } from './VirtualizedTable/DefaultCell';
import { VirtualizedTableProps } from './VirtualizedTable/Types';
import { TableCell } from '@mui/material';

export const VirtualizedTable = <T extends unknown>(
  props: VirtualizedTableProps<T> & Partial<TableVirtuosoProps<T, any>>,
) => {
  const {
    data,
    height,
    width,
    className,
    hover,
    isLastColumnFixed,
    isFirstColumnFixed,
    config,
    isLoadingBody,
    isLoadingNewItems,
    noItemsIndicator,
    customHeaderRow,
    customTableHead,
    customTableRow,
    bodyLoadingIndicator,
    customLoadingIndicatorRow,
    customLoadingIndicator,
    fixedHeader = true,
    virtusoRef,
    atBottomStateChange,
    onHeaderClick,
    onCellClick,
    onEndReached,
    ...otherProps
  } = props;

  const style = omitNullish({ height, width });

  return (
    <TableVirtuoso
      style={style}
      className={className}
      data={data}
      ref={virtusoRef}
      endReached={onEndReached}
      atBottomStateChange={atBottomStateChange}
      components={{
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Table: (tableProps: any) => <Table {...tableProps} className={'avidkit-table'} />,

        TableHead: forwardRef((tableHeadProps, headRef: ForwardedRef<any>) => {
          const FinalTableHead = customTableHead || TableHead;
          let baseProps: any = {
            className: 'avidkit-table-head',
            ref: headRef,
            ...tableHeadProps,
            style: {
              position: fixedHeader ? 'sticky' : 'relative',
              top: -1,
              zIndex: 22,
            },
          };
          if (customHeaderRow) {
            baseProps = {
              ...baseProps,
              $fixedHeader: { fixedHeader },
            };
          }
          return <FinalTableHead {...baseProps} />;
        }),

        TableRow: forwardRef(
          (tableRowProps, rowRef: ForwardedRef<HTMLTableRowElement>): any => {
            const FinalTableRow = customTableRow || StyledTableRow;
            const FinalLoadingIndicator = customLoadingIndicatorRow || StyledTableRow;

            const currentRowIndex = tableRowProps['data-index'];
            const showLoadingIndicator =
              isLoadingNewItems && currentRowIndex === data.length - 1;

            if (showLoadingIndicator) {
              return [
                <FinalTableRow
                  key={`normalRow${currentRowIndex}`}
                  className={'avidkit-table-row'}
                  {...tableRowProps}
                  ref={rowRef}
                  hover={hover}
                />,
                <FinalLoadingIndicator
                  key={`loadingRow${currentRowIndex}`}
                  className={'avidkit-table-loading-row'}
                >
                  <td colSpan={config.length} className={'avidkit-loading-cell'}>
                    <LoadingCell className={'avidkit-loading-container'}>
                      {customLoadingIndicator}
                    </LoadingCell>
                  </td>
                </FinalLoadingIndicator>,
              ];
            } else {
              return (
                <FinalTableRow
                  className={'avidkit-table-row'}
                  key={`normalRow${currentRowIndex}`}
                  {...tableRowProps}
                  ref={rowRef}
                  hover={hover}
                />
              );
            }
          },
        ),

        TableBody: forwardRef(
          (tableBodyProps, tableBodyRef: ForwardedRef<HTMLTableSectionElement>) => {
            const showLoadingIndicator = isLoadingBody && bodyLoadingIndicator;
            const showNoItemsIndicator = noItemsIndicator && data.length === 0;
            if (showNoItemsIndicator || showLoadingIndicator) {
              return (
                <TableBody {...tableBodyProps}>
                  <TableRow>
                    <SoleBorderlessCell colSpan={config.length}>
                      {showLoadingIndicator ? bodyLoadingIndicator : noItemsIndicator}
                    </SoleBorderlessCell>
                  </TableRow>
                </TableBody>
              );
            } else {
              return (
                <TableBody
                  className={'avidkit-table-body'}
                  {...tableBodyProps}
                  ref={tableBodyRef}
                />
              );
            }
          },
        ),
      }}
      fixedHeaderContent={() => {
        const FinalHeaderFixedRow = customHeaderRow || TableRow;
        return (
          <FinalHeaderFixedRow className={'avidkit-table-header-fixed'}>
            {config.map((currentRowConfig, index) => {
              const { label, columnKey, headerRenderer } = currentRowConfig;
              const FinalCellRenderer = headerRenderer || DefaultCell;
              return (
                <FinalCellRenderer
                  key={columnKey}
                  value={label}
                  cellIndex={index}
                  style={currentRowConfig.style}
                  config={currentRowConfig}
                  isLastCellFixed={isLastColumnFixed}
                  isFirstCellFixed={isFirstColumnFixed}
                  allConfigs={config}
                  allData={data}
                  isHeader={true}
                  onClick={onHeaderClick}
                  className="avidkit-table-header-cell"
                />
              );
            })}
          </FinalHeaderFixedRow>
        );
      }}
      itemContent={(index: any, rowData: any) => {
        return (
          <>
            {config.map((currentRowConfig, cellIndex) => {
              const { columnKey, renderer } = currentRowConfig;
              const value = rowData[columnKey];
              const FinalCellRenderer = renderer || DefaultCell;
              return (
                <FinalCellRenderer
                  className={'avidkit-table-cell'}
                  key={columnKey}
                  value={value}
                  rowIndex={index}
                  style={currentRowConfig.style}
                  isLastCellFixed={isLastColumnFixed}
                  isFirstCellFixed={isFirstColumnFixed}
                  cellIndex={cellIndex}
                  config={currentRowConfig}
                  allConfigs={config}
                  allData={data}
                  onClick={onCellClick}
                />
              );
            })}
          </>
        );
      }}
      {...otherProps}
    />
  );
};

const StyledTableRow = styled(TableRow)`
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.grey[400]}`};
  ${({ hover }) => {
    return (
      hover &&
      css`
        &:hover {
          &.MuiTableRow-hover {
            position: relative;
            z-index: 2;
            box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
            background-color: unset;
          }
        }
      `
    );
  }}
`;

const LoadingCell = styled.div`
  min-height: 92px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SoleBorderlessCell = styled(TableCell)`
  &.MuiTableCell-root {
    border-bottom: unset;
  }
`;
