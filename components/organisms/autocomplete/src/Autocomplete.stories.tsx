import { useState, useCallback } from 'react';
import { StoryFC } from '$storybook/StoryFC';
import { Autocomplete, AutocompleteProps } from './Autocomplete';
import { isEmpty, uniqBy } from 'lodash';
import { Plus } from '@avidkit/icons';
import { AdvanceItem } from 'components/molecules/menu/src';
import Chip from '@mui/material/Chip';

export default {
  title: 'Organisms / Autocomplete',
  component: Autocomplete,
  parameters: { background: { noPadding: false } },
};

const items = ['Recent', 'Resolved', 'Title', 'Task Status'];
const complexItems = [
  {
    id: '1',
    label: 'Recent',
  },
  {
    id: '2',
    label: 'Resolved',
  },
  {
    id: '3',
    label: 'Title',
  },
  {
    id: '4',
    label: 'Task Status',
  },
];

export const Default: StoryFC<AutocompleteProps<string>> = (args) => {
  return (
    <Autocomplete
      {...args}
      emptyTitle={
        <>
          <p>Not Result</p>
          <p>Try changing the search item</p>
        </>
      }
    />
  );
};

Default.args = {
  items,
  label: 'SingleSelect',
  multiSelectable: false,
  selectedItem: items[0],
  searchPlaceholder: 'Search something ...',
};

export const MultiSelect = Default.bind({});

MultiSelect.args = {
  items,
  label: 'MultiSelect',
  multiSelectable: true,
  searchPlaceholder: 'Search something ...',
};

export const MultiSelectWithKeepSearchTerm: StoryFC<AutocompleteProps<string>> = (
  args,
) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  return (
    <Autocomplete {...args} searchTerm={searchTerm} onFilterChange={setSearchTerm} />
  );
};

MultiSelectWithKeepSearchTerm.args = {
  items,
  label: 'MultiSelect',
  multiSelectable: true,
  searchPlaceholder: 'Search something ...',
  keepSearchTerm: true,
};

export const SingleSelectWithCustomFiltrationAndSelection: StoryFC<
  AutocompleteProps<string>
> = (args) => {
  const [itemsList, setItemsList] = useState(args.items);
  const [selectedItem, setSelectedItem] = useState<string>(items[0]);

  const onSelectSingleItem = (item: string) => {
    setSelectedItem(item);
  };

  const onExactMatch = (value: string) => {
    if (value === '') {
      setItemsList(args.items);
      return;
    }
    const exactMatchedItems = args.items.filter((element: string) => value === element);
    setItemsList(!isEmpty(exactMatchedItems) ? exactMatchedItems : []);
  };

  return (
    <Autocomplete
      label={args.label}
      items={itemsList}
      multiSelectable={false}
      selectedItem={selectedItem}
      placeHolder={args.searchPlaceholder}
      onSelectItem={onSelectSingleItem}
      onFilterChange={onExactMatch}
    />
  );
};

SingleSelectWithCustomFiltrationAndSelection.args = {
  items,
  label: 'With Custom Filtration and Selection',
  multiSelectable: false,
  selectedItem: items[0],
} as const;

export const SingleSelectWithCustomControllerIcon: StoryFC<
  AutocompleteProps<AdvanceItem>
> = (args) => {
  const [selectedItem, setSelectedItem] = useState<AdvanceItem>(complexItems[0]);
  const [itemList] = useState(args.items);

  const onSelectSingleItem = (item: AdvanceItem) => {
    setSelectedItem(item);
  };

  return (
    <Autocomplete
      label={args.label}
      items={itemList}
      multiSelectable={false}
      selectedItem={selectedItem}
      placeHolder={args.searchPlaceholder}
      onSelectItem={onSelectSingleItem}
      dropDownIcon={<Plus />}
      onDropDownIconClick={(searchTerm) => {
        console.log('searchTerm:', searchTerm);
      }}
    />
  );
};

SingleSelectWithCustomControllerIcon.args = {
  items: complexItems,
  multiSelectable: false,
  label: 'With Custom Controller',
};

export const MultiSelectWithChips: StoryFC<AutocompleteProps<AdvanceItem>> = (args) => {
  const [localItems, setLocalItems] = useState<AdvanceItem[]>(args.items);
  const [chipItems, setChipItems] = useState<AdvanceItem[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const onSelectItems = useCallback(
    (selectedItems: AdvanceItem[]) => {
      const targetLabels = selectedItems.map((i) => i.label);
      const _chipItems = uniqBy(
        [...chipItems, ...selectedItems.filter((i) => targetLabels.includes(i.label))],
        'id',
      );
      setChipItems(_chipItems);
      const _labels = _chipItems.map((i) => i.label);
      setLocalItems([...localItems.filter((i) => !_labels.includes(i.label))]);
    },
    [chipItems, localItems],
  );

  const onDeleteChip = useCallback(
    (label: string) => {
      setLocalItems([...localItems, ...chipItems.filter((i) => i.label === label)]);
      setChipItems([...chipItems.filter((i) => i.label !== label)]);
    },
    [chipItems, localItems],
  );

  return (
    <>
      {chipItems.map((chip) => (
        <Chip
          key={chip.label}
          label={chip.label}
          variant="filled"
          color="primary"
          onDelete={() => onDeleteChip(chip.label)}
        />
      ))}
      <Autocomplete
        {...args}
        items={localItems}
        multiSelectable
        searchTerm={searchTerm}
        onSelectItems={onSelectItems}
        onFilterChange={setSearchTerm}
      />
    </>
  );
};

MultiSelectWithChips.args = {
  items: complexItems,
  label: 'With Chips',
  keepSearchTerm: true,
};
