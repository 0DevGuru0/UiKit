import { FC } from 'react';

import { FlattenSimpleInterpolation } from 'styled-components';

export interface FilterItem {
  name: string;
  value: any;
  id?: string;
}

export interface RenderComponent {
  filterHandler: (item: FilterItem, canHaveMultipleValue?: boolean) => void;
  input: InputFilterItem;
  selectedItems: string[];
}

interface CommonFilterItem {
  name: string;
  label: string;
  disabled?: boolean;
  rendererProps?: any;
  onClick?: () => void;
  onChange?: () => void;
  defaultValue?: string;
  endAdornment?: JSX.Element;
  startAdornment?: JSX.Element;
  rendererComponent?: FC<RenderComponent>;
}

interface OptionFilterItem {
  name: string;
  value: string;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  endAdornment?: JSX.Element;
  style?: React.CSSProperties;
  startAdornment?: JSX.Element;
}

export interface InputFilterItem extends CommonFilterItem {
  items?: string[];
  onOpen?: () => void;
  onClose?: () => void;
  multiSelect?: boolean;
  options?: OptionFilterItem[];
  style?: any;
}

interface CheckboxFilterItem extends CommonFilterItem {
  indicatorColor?: string;
  style?: FlattenSimpleInterpolation;
}

export interface CheckboxFilter {
  name: string;
  label: string;
  checkboxes: CheckboxFilterItem[];
}

export interface FilterConfig {
  inputs?: InputFilterItem[];
  checkboxes?: CheckboxFilter[];
}

export type IFilter = Record<string, string[] | Record<string, string>[]> & {
  searchPhrase?: string;
};
