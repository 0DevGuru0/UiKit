import { useMemo, useRef, useState } from 'react';
import { AdvanceItem as Item } from '@avidkit/menu';
import { SearchInput } from './Autocomplete/SearchInput';
import {
  OldSelect as Select,
  OldSelectCommonProps as SelectCommonProps,
} from '@avidkit/select';
import { debounce } from 'lodash';

export type AutocompleteProps<T extends string | Item> = (
  | {
      multiSelectable?: false;
      selectedItem?: T;
      onSelectItem?: (item: T) => void;
    }
  | {
      multiSelectable: true;
      selectedItems?: T[];
      onSelectItems?: (items: T[]) => void;
    }
) &
  AutocompleteCommonProps<T>;

type AutocompleteCommonProps<T extends string | Item> = {
  searchTerm?: string;
  keepSearchTerm?: boolean;
  searchPlaceholder?: string;
  dropDownIcon?: JSX.Element;
  className?: string;
  onDropDownIconClick?: (val: string) => void;
  onFilterChange?: (value: string) => void;
} & SelectCommonProps<T>;

// eslint-disable-next-line sonarjs/cognitive-complexity
export const Autocomplete = <T extends string | Item>(props: AutocompleteProps<T>) => {
  const { items, searchPlaceholder, onFilterChange, keepSearchTerm } = props;

  const [localSearchTerm, setLocalSearchTerm] = useState<string>('');
  const [localSelectedItem, setLocalSelectedItem] = useState<T | undefined>();
  const [localSelectedItems, setLocalSelectedItems] = useState<T[]>([]);

  const rendererRef = useRef<HTMLInputElement>(null);

  const searchTerm: string =
    props.searchTerm !== undefined ? props.searchTerm ?? '' : localSearchTerm;

  const filteredItems = items.filter((element) => {
    const itemLabel = typeof element === 'string' ? element : element.label;
    return itemLabel.toLocaleLowerCase().match(searchTerm.toLocaleLowerCase()) != null;
  });

  const onChange = useMemo(
    () => debounce(onFilterChange ?? setLocalSearchTerm),
    [onFilterChange, setLocalSearchTerm],
  );

  const clearSearchTerm = () => {
    if (onFilterChange) {
      return onFilterChange(keepSearchTerm ? searchTerm : '');
    }
    setLocalSearchTerm(keepSearchTerm ? searchTerm : '');
  };

  const onSelectItemHandler = (item: T) => {
    if (!props.multiSelectable && props.onSelectItem) {
      props.onSelectItem?.(item);
    } else {
      setLocalSelectedItem((prev) => (item === prev ? undefined : item));
    }
  };

  const onSelectItemsHandler = (newItems: T[]) => {
    if (props.multiSelectable && props.onSelectItems) {
      props.onSelectItems?.(newItems);
    } else {
      setLocalSelectedItems(newItems);
    }
  };

  const selectProps = {
    ...props,
    items: filteredItems,
    controllerIcon: props.dropDownIcon,
    onControllerClick: () => {
      if (props.onDropDownIconClick) {
        props.onDropDownIconClick(searchTerm);
        clearSearchTerm();
      }
    },
    rendererRef,
    renderInput: () => (
      <SearchInput
        searchPlaceholder={searchPlaceholder}
        rendererRef={rendererRef}
        onChangeSearchTerm={(e) => onChange(e.target.value)}
        searchTerm={keepSearchTerm ? searchTerm : undefined}
      />
    ),
  };

  return props.multiSelectable ? (
    <Select
      {...selectProps}
      multiSelectable
      selectedItems={
        props.onSelectItems && props.selectedItems
          ? props.selectedItems
          : localSelectedItems
      }
      onSelect={onSelectItemsHandler}
      onCloseShowMenu={clearSearchTerm}
    />
  ) : (
    <Select
      {...selectProps}
      multiSelectable={false}
      selectedItem={props.onSelectItem ? props.selectedItem : localSelectedItem}
      onSelect={onSelectItemHandler}
      onCloseShowMenu={clearSearchTerm}
    />
  );
};
