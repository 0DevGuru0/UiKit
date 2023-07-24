import { createContext } from 'react';

import { atom, PrimitiveAtom } from 'jotai';

import { ToggleItem } from './ToggleSelect';
import { FilterConfig, IFilter } from './filterTypes';

export type FilterVariant =
  | 'Default'
  | 'WithSort'
  | 'SearchOnly'
  | 'WithSortAndToggle'
  | 'WithSortAndSelectAll'
  | 'SearchAndSortAndToggle';

export interface IFilterContext {
  config: FilterConfig;
  sortOptions: string[];
  showSelectAll: boolean;
  variant: FilterVariant;
  toggleItems: ToggleItem[];
  searchPlaceholder: string;
  buttonType: 'White' | 'Gray';
  cardType: 'Default' | 'Bordered';
  sortByAtom: PrimitiveAtom<string>;
  filtersAtom: PrimitiveAtom<IFilter>;
  toggleAtom: PrimitiveAtom<string[]>;
  showToggleAtom: PrimitiveAtom<boolean>;
  filterCardOpenAtom: PrimitiveAtom<boolean>;
  selectAllCheckedAtom: PrimitiveAtom<boolean>;
}

const toggledSet: string[] = [];
const showToggleAtom = atom(true);
const filterCardOpenAtom = atom(false);
const selectAllCheckedAtom = atom(false);

export const initFilterContext: IFilterContext = {
  config: {},
  showToggleAtom,
  sortOptions: ['Title A to Z', 'Title Z to A'],
  toggleItems: [],
  buttonType: 'Gray',
  filterCardOpenAtom,
  variant: 'Default',
  cardType: 'Bordered',
  selectAllCheckedAtom,
  showSelectAll: false,
  searchPlaceholder: '',
  filtersAtom: atom({}),
  toggleAtom: atom(toggledSet),
  sortByAtom: atom('Title A-Z'),
};

export const FilterContext = createContext(initFilterContext);
