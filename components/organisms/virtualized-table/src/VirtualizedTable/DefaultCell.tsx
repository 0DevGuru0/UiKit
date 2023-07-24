import TableCell from '@mui/material/TableCell';
import styled, { css } from 'styled-components';
import { VirtualizedTableCellProps } from './Types';

export const DefaultCell = (props: VirtualizedTableCellProps) => {
  const {
    value,
    config,
    style,
    isHeader,
    cellIndex,
    allConfigs,
    sharpCorner,
    onClick,
    isFirstCellFixed,
    isLastCellFixed,
    className,
  } = props;

  const isFirst = cellIndex === 0;
  const isLast = cellIndex === allConfigs.length - 1;
  const cellStyles = {
    minWidth: config.width,
    backgroundColor: !isHeader && config.backGroundColor,
    ...style,
  };

  return (
    <StyledTableCell
      className={className}
      $isHeader={isHeader}
      $isFirst={isFirst}
      $isLast={isLast}
      $sharpCorner={sharpCorner}
      style={cellStyles}
      $isFirstCellFixed={isFirstCellFixed}
      $isLastCellFixed={isLastCellFixed}
      onClick={() => onClick && onClick(config.columnKey, value, props)}
    >
      {value}
    </StyledTableCell>
  );
};

export const StyledTableCell = styled(TableCell)<{
  $isHeader?: boolean;
  $isFirst?: boolean;
  $sharpCorner?: boolean;
  $isLast?: boolean;
  $isLastCellFixed?: boolean;
  $isFirstCellFixed?: boolean;
}>`
  height: 72px;
  border-bottom: unset;
  background-color: white;
  border-radius: ${({ $isFirst, $isLast, $sharpCorner }): any => {
    if ($sharpCorner) return;
    if ($isFirst) {
      return '1em 0 0 1em';
    } else if ($isLast) {
      return '0 1em 1em 0';
    }
  }};
  border-collapse: separate;
  background-color: ${({ theme, $isHeader }) => $isHeader && theme.palette.grey[300]};
  // make sticky to left if index is 0
  ${({ $isFirst, $isFirstCellFixed }) =>
    $isFirst &&
    $isFirstCellFixed &&
    css`
      position: sticky;
      left: 0;
      z-index: 1;
    `}
  // make sticky to right if index is last
  ${({ $isLast, $isLastCellFixed }) =>
    $isLast &&
    $isLastCellFixed &&
    css`
      position: sticky;
      right: 0;
      z-index: 1;
    `}
`;
