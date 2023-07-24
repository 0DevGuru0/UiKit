import { isString } from 'lodash';
import { useCallback, useState } from 'react';
import { animateMenuItem } from '@avidkit/select';
import { AdvanceItem as Item } from '@avidkit/menu';

export type SelectedItems<T extends string | Item = string | Item> =
  | { multiSelectable: true; selectedItems: T[] }
  | { multiSelectable?: false; selectedItem: T };

export type UseAutoCompleteArgs<T extends string | Item = string | Item> =
  SelectedItems & { items: T[] };

type UseAutoCompleteOutputs<T extends string | Item = string | Item> = SelectedItems & {
  itemList: T[];
  onSelectItem: (item: T, itemRef?: HTMLDivElement) => void;
  onFilterChange: (value: string) => void;
};

// eslint-disable-next-line sonarjs/cognitive-complexity
export const useAutocomplete = (props: UseAutoCompleteArgs): UseAutoCompleteOutputs => {
  const { items, multiSelectable } = props;

  const [itemsList, setItemsList] = useState(items);
  const [orderedSelectedItems, setOrderedSelectedItems] = useState(
    multiSelectable ? props.selectedItems : props.selectedItem,
  );

  const onFilterChange = useCallback(
    (value: string) => {
      const filteredItems = items.filter((element) => {
        const itemLabel = isString(element) ? element : element.label;
        return itemLabel.toLocaleLowerCase().match(value.toLocaleLowerCase()) != null;
      });
      setItemsList(filteredItems);
    },
    [items],
  );

  const onSelectItem = (item: string | Item, itemRef?: HTMLDivElement): void => {
    if (itemRef && multiSelectable && Array.isArray(orderedSelectedItems)) {
      return animateMenuItem(itemRef, () => {
        const updatedList = orderedSelectedItems.includes(item)
          ? orderedSelectedItems.filter((element) =>
              isString(item)
                ? element !== item
                : !isString(element) && element.label !== item.label,
            )
          : [...orderedSelectedItems, item];
        setOrderedSelectedItems(updatedList);
      });
    }
    setOrderedSelectedItems(item);
  };

  if (multiSelectable) {
    return {
      itemList: itemsList,
      onFilterChange,
      onSelectItem,
      multiSelectable,
      selectedItems: orderedSelectedItems as string[],
    };
  } else {
    return {
      itemList: itemsList,
      onFilterChange,
      onSelectItem,
      multiSelectable,
      selectedItem: orderedSelectedItems as string,
    };
  }
};
