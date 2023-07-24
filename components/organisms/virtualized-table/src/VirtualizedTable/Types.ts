import { JSXElementConstructor, ReactElement, Ref } from 'react';
import { TableVirtuosoHandle } from 'react-virtuoso';

export interface ColumnConfig {
  label: string;
  columnKey: string;
  width?: number;
  backGroundColor?: string;
  style?: any;
  renderer?: (props: any) => JSX.Element;
  headerRenderer?: (props: any) => JSX.Element;
}

export interface VirtualizedTableProps<T> {
  data: T[];
  config: ColumnConfig[];
  className?: string;
  hover?: boolean;
  isFirstColumnFixed?: boolean;
  isLastColumnFixed?: boolean;
  fixedHeader?: boolean;
  isLoadingBody?: boolean;
  isLoadingNewItems?: boolean;
  customTableHead?: JSXElementConstructor<any>;
  customHeaderRow?: JSXElementConstructor<any>;
  customTableRow?: JSXElementConstructor<any>;
  bodyLoadingIndicator?: any;
  noItemsIndicator?: any;
  customLoadingIndicatorRow?: JSXElementConstructor<any>;
  customLoadingIndicator?: ReactElement | string;
  virtusoRef?: Ref<TableVirtuosoHandle>;
  onHeaderClick?: (columnKey: string, value: any, props: any) => void;
  atBottomStateChange?: (isAtBottom: boolean) => void;
  onCellClick?: (columnKey: string, value: any, props: any) => void;
  onEndReached?: (index: number) => void;
}

export interface VirtualizedTableCellProps {
  key: string;
  value: any;
  cellIndex: number;
  config: ColumnConfig;
  allConfigs: ColumnConfig[];
  isLastCellFixed?: boolean;
  isFirstCellFixed?: boolean;
  allData: any;
  isHeader?: boolean;
  sharpCorner?: boolean;
  rowIndex?: number;
  style?: any;
  className?: string;
  onClick?: (key: string, value: any, props: any) => void;
}
