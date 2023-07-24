import { useAtom } from 'jotai';
import styled, { css } from 'styled-components';

import { Definition, TableVariant } from '../Table';

import { header } from './sharedTableStyle';
import { hoveredRow } from './store';

type ColumnPosition = 'left' | 'right';
export interface TableProps<T extends Definition> {
  items: any[];
  variant: TableVariant;
  definition: T;
  rowsHeight: string;
  position: ColumnPosition;
  rounded?: boolean;
  onRowClick?: (rowId: number) => void;
}

export const CornerColumn = <T extends Definition>(props: TableProps<T>) => {
  const { definition, items, position, onRowClick, rounded = false, variant } = props;
  const [_hoveredRow, setHoveredRow] = useAtom(hoveredRow);

  return (
    <section>
      <Header variant={variant} position={position}>
        {definition.label}
      </Header>
      {items.map((item, idx) => {
        const Renderer = definition.renderer;
        return (
          <DataCell
            rowsHeight={props.rowsHeight}
            $position={position}
            key={idx}
            $clickable={!!onRowClick}
            $rounded={rounded}
            variant={variant}
            onClick={onRowClick ? () => onRowClick(_hoveredRow) : undefined}
          >
            <RendererContainer onMouseOver={() => setHoveredRow(idx)}>
              <Renderer {...item} isHovered={_hoveredRow === idx} />
            </RendererContainer>
          </DataCell>
        );
      })}
    </section>
  );
};

const typography = css`
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
`;

interface IHeader {
  position: ColumnPosition;
  variant: TableVariant;
}

const Header = styled.div<IHeader>`
  ${typography}
  ${header}
  height:52px;
  padding-left: ${({ position }) => (position === 'left' ? '76' : '36')}px;
  border-radius: ${({ position }) =>
    position === 'left' ? '12px 0 0 12px' : ' 0 12px 12px 0'};
  background-color: ${({ theme, variant }) =>
    variant === 'iknito' ? theme.palette.grey[200] : theme.palette.grey[300]};
`;

const RendererContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 4px;
`;

interface IDataCell {
  $position: ColumnPosition;
  $clickable: boolean;
  $rounded: boolean;
  variant: TableVariant;
  rowsHeight: string;
}
const DataCell = styled.div<IDataCell>`
  padding-left: ${({ $position }) => ($position === 'right' ? '36px' : '24px')};
  padding-right: ${({ $position }) => $position === 'left' && '0px'};
  ${({ $position, $rounded }) =>
    $rounded
      ? $position === 'left'
        ? css`
            border-top-left-radius: 12px;
            border-bottom-left-radius: 12px;
          `
        : css`
            border-top-right-radius: 12px;
            border-bottom-right-radius: 12px;
          `
      : ''}
  border-top: 1.5px solid #fff;
  border-bottom: ${({ theme, variant }) =>
    variant === 'iknito'
      ? `1px solid ${theme.palette.grey[600]}`
      : `1px solid ${theme.palette.grey[400]}`};

  background-color: ${({ theme }) => theme.palette.background.default};
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'inherit')};
  height: ${({ rowsHeight }) => rowsHeight};
  display: flex;
  align-items: center;
`;
