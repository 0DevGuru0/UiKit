import { useState } from 'react';
import { AdvanceItem, AdvanceItem as Item } from '@avidkit/menu';
import { concat, sample, isString } from 'lodash';
import { Waffle, Check } from '@avidkit/icons';
import { StoryFC } from '$storybook/StoryFC';
import { OldSelect, OldSelectProps } from './OldSelect';
import styled from 'styled-components';

export default {
  title: 'Molecules / OldSelect',
  component: OldSelect,
  parameters: { background: { noPadding: false } },
};

const items = ['Recent', 'Title', 'Task Status', 'Updated', 'Nearness'];
const objectItems: Item[] = [
  { label: 'Recent' },
  { label: 'Title' },
  { label: 'Task Status' },
  { label: 'Updated' },
  { label: 'Nearness' },
];
const moreItems = ['January', 'February', 'March', 'April', 'May', 'June'];

export const SingleSelect: StoryFC<OldSelectProps> = (args) => {
  const hasLazyLoading = args.label === 'Scroll to Load More';
  const primarySelectedItem =
    !args.multiSelectable && args.selectedItem ? args.selectedItem : '';
  const [itemList, setItemList] = useState(args.items);
  const [selectedItem, setSelectedItem] = useState<string | AdvanceItem | undefined>(
    primarySelectedItem,
  );

  const handleSelectOption = (item: string | AdvanceItem): void => {
    setSelectedItem((prev) => (prev === item ? undefined : item));
  };

  const handleLoadMoreItems = () => {
    setTimeout(() => {
      const newItems: string[] = [];
      for (const item of itemList.slice(0, 5)) {
        const element = isString(item) ? item : item.label;
        newItems.push(`${element} ${sample(moreItems)}`);
      }
      setItemList(concat(itemList, newItems));
    }, 500);
  };

  return (
    <OldSelect
      {...args}
      items={itemList}
      multiSelectable={false}
      selectedItem={selectedItem}
      onSelect={handleSelectOption}
      onLoadMoreItems={hasLazyLoading ? handleLoadMoreItems : undefined}
    />
  );
};

export const SingleSelectWithPreselectedItem = SingleSelect.bind({});
export const SingleSelectWithIcon = SingleSelect.bind({});
export const SingleSelectWithError = SingleSelect.bind({});

SingleSelect.args = {
  items,
  label: 'Default',
};

SingleSelectWithPreselectedItem.args = {
  items,
  selectedItem: items[0],
  icon: <Waffle />,
};

SingleSelectWithIcon.args = {
  items,
  icon: <Waffle />,
};

SingleSelectWithError.args = {
  items,
  label: 'With Error',
  errorText: 'You must select at least one item',
};

export const MultiSelect: StoryFC<OldSelectProps<string>> = (args) => {
  const hasLazyLoading = args.label === 'Scroll to Load More';

  const primarySelectedItem =
    args.multiSelectable && args.selectedItems ? args.selectedItems : [];

  const [itemList, setItemList] = useState(args.items);
  const [selectedItems, setSelectedItems] =
    useState<(string | AdvanceItem)[]>(primarySelectedItem);

  const handleSelectOption = (values: string[]) => {
    setSelectedItems(values);
  };

  // eslint-disable-next-line sonarjs/no-identical-functions
  const handleLoadMoreItems = () => {
    // eslint-disable-next-line sonarjs/no-identical-functions
    setTimeout(() => {
      const newItems: string[] = [];
      for (const item of itemList.slice(0, 5)) {
        const element = isString(item) ? item : item.label;
        newItems.push(`${element} ${sample(moreItems)}`);
      }
      setItemList(concat(itemList, newItems));
    }, 500);
  };

  return (
    <OldSelect
      {...args}
      items={itemList}
      multiSelectable
      selectedItems={selectedItems}
      onSelect={handleSelectOption}
      onLoadMoreItems={hasLazyLoading ? handleLoadMoreItems : undefined}
    />
  );
};

export const MultiSelectWithCustomCheckbox = MultiSelect.bind({});
export const MultiSelectWithObject = MultiSelect.bind({});
export const MultiSelectWithDetails = MultiSelect.bind({});
export const MultiSelectWithLazyLoading = MultiSelect.bind({});
export const MultiSelectWithEmptyInput = MultiSelect.bind({});
export const CustomEmptyTitle = MultiSelect.bind({});

const SvgWrapper = styled.div<{ $isChecked: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $isChecked }) => ($isChecked ? '#00a693' : '#FFFFFF')};
  border: 1px solid ${({ $isChecked }) => ($isChecked ? '#00a693' : '#a1b1c7')};
  border-radius: 4px;
  width: 18px;
  height: 18px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;

  &:hover {
    border-color: #00a693;
  }
`;
const StyledCheck = styled(Check)`
  path {
    fill: #ffffff;
  }
`;

const CustomCheckBox = (props: any) => {
  return (
    <SvgWrapper $isChecked={props.isChecked}>
      {props.isChecked && <StyledCheck />}
    </SvgWrapper>
  );
};

MultiSelect.args = {
  items,
  selectedItems: [],
  multiSelectable: true,
  label: 'Multi-Selectable',
};

MultiSelectWithCustomCheckbox.args = {
  items,
  selectedItems: [],
  multiSelectable: true,
  label: 'Multi-Selectable',
  checkComponent: CustomCheckBox,
  variant: 'LERNITO',
};

MultiSelectWithObject.args = {
  items: objectItems,
  selectedItems: [],
  multiSelectable: true,
  label: 'Multi-Selectable',
  variant: 'LERNITO',
};

MultiSelectWithDetails.args = {
  selectedItems: [{ id: '0', label: 'Title' }],
  multiSelectable: true,
  label: 'With Details',
  items: [
    { id: '0', label: 'Title' },
    { id: '1', label: 'Recent' },
    { id: '2', label: 'Task Status' },
  ],
};

MultiSelectWithLazyLoading.args = {
  items,
  selectedItems: [],
  label: 'Scroll to Load More',
};

CustomEmptyTitle.args = {
  items: [],
  selectedItems: [],
  emptyTitle: (
    <>
      <p>No results</p>
      <p>Change the phrase and try again</p>
    </>
  ),
};

MultiSelectWithEmptyInput.args = {
  items,
  selectedItems: [],
  label: 'Scroll to Load More',
  emptyInput: true,
};
