import { compact, isEmpty, isArray } from 'lodash';

import { isArrayOfString } from '../utils/isArrayOfString';
import { omit } from '../utils/omit';

import { FilterItem, IFilter } from './filterTypes';

export const filterModifier = (
  item: FilterItem,
  filters: IFilter,
  canHaveMultipleValue: boolean = false,
): IFilter => {
  if (isEmpty(item.value)) {
    return omit(filters ?? {}, [item.name]);
  }

  const filterValue = filters?.[item.name];

  if (isValueExist(item.value, filterValue)) {
    const filteredItems = filterValues(item.value, filterValue);

    return isEmpty(filteredItems)
      ? omit(filters, [item.name])
      : { ...filters, [item.name]: filteredItems };
  }

  return {
    ...filters,
    [item.name]: addFilterValue(item, canHaveMultipleValue, filterValue),
  };
};

const addFilterValue = (
  item: FilterItem,
  canHaveMultipleValue: boolean,
  currentFilterValue?: string[] | Record<string, string>[],
): string[] | Record<string, string>[] => {
  const complexFilter = !!item.id;

  const filterValue = complexFilter ? { id: item.id, value: item.value } : item.value;

  const _currentFilterValue =
    canHaveMultipleValue && !!currentFilterValue ? currentFilterValue : [];

  return isArray(filterValue)
    ? filterValue
    : compact([..._currentFilterValue, filterValue]);
};

const filterValues = (
  newValue: string | string[],
  existedFilterValue: string[] | Record<string, string>[],
): string[] | Record<string, string>[] =>
  isArrayOfString(existedFilterValue)
    ? existedFilterValue.filter((filter) => filter !== newValue)
    : existedFilterValue.filter((filter) => filter.value !== newValue);

const isValueExist = (
  newValue: string | string[],
  existedFilterValue?: string[] | Record<string, string>[],
): boolean => {
  if (!existedFilterValue) return false;

  return isArrayOfString(existedFilterValue)
    ? !!existedFilterValue.find((filterGroup) => filterGroup === newValue)
    : !!existedFilterValue.find((filterGroup) => filterGroup.value === newValue);
};
