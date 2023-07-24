import { FC, useState } from 'react';
import styled, { css } from 'styled-components';

import { StoryFC } from '$storybook/StoryFC';
import { Bell, Building, Download, Check } from '@avidkit/icons';

import { Menu, MenuProps } from './Menu';

export default {
  title: 'Molecules / Menu',
  component: Menu,
  parameters: { background: { noPadding: false } },
};

export const SingleSelectableMenu: StoryFC<MenuProps> = (args) => {
  args.isMultiSelectable = false;
  const [selectedItem, setSelectedItem] = useState(args.items[0][0]);

  return (
    <Menu
      {...args}
      isMultiSelectable={false}
      selectedItem={selectedItem}
      onChangeSelectedItems={(value) => setSelectedItem(value)}
    />
  );
};

export const MultiSelectableMenu: StoryFC<MenuProps> = (args) => {
  const [selectedItems, setSelectedItems] = useState([args.items?.[0]?.[0]]);
  return (
    <Menu
      {...args}
      isMultiSelectable={true}
      selectedItems={selectedItems}
      onChangeSelectedItems={(newSelectedItems) => setSelectedItems(newSelectedItems)}
    />
  );
};

export const BigSizing = SingleSelectableMenu.bind({});
export const LernitoVariant = SingleSelectableMenu.bind({});
export const MultiSelectableWithCustomCheckbox = MultiSelectableMenu.bind({});
export const MultiSelectableWithAdvanceItems = MultiSelectableMenu.bind({});
export const DefaultNoItems = MultiSelectableMenu.bind({});
export const CustomNoItems = MultiSelectableMenu.bind({});

SingleSelectableMenu.args = {
  items: [['First Item', 'Second Item', 'Third Item', 'Forth Item']],
  isMultiSelectable: false,
  selectedItem: 'First Item',
};

BigSizing.args = {
  ...SingleSelectableMenu.args,
  size: 'big',
};

LernitoVariant.args = {
  ...SingleSelectableMenu.args,
  variant: 'LERNITO',
};

MultiSelectableMenu.args = {
  items: [
    ['First Item', 'Second Item', 'Third Item'],
    ['Sixth Item', 'Seventh Item'],
  ],
  selectedItems: ['First Item'],
};

MultiSelectableMenu.args = {
  ...MultiSelectableMenu.args,
  isMultiSelectable: true,
};

interface CustomCheckBoxProps {
  isChecked: boolean;
}

const CustomCheckBox: FC<CustomCheckBoxProps> = ({ isChecked }) => (
  <StyledCustomCheckBox isChecked={isChecked}>
    {isChecked && <StyledCheck />}
  </StyledCustomCheckBox>
);

const StyledCustomCheckBox = styled.div<CustomCheckBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: ${({ isChecked }) => (isChecked ? '#00a693' : '#FFFFFF')};
  border: 1px solid ${({ isChecked }) => (isChecked ? '#00a693' : '#a1b1c7')};
  border-radius: 4px;

  &:hover {
    border-color: #00a693;
  }
`;

const StyledCheck = styled(Check)`
  display: block;
  width: 18px;
  height: 18px;

  & path,
  & use {
    fill: #ffffff;
  }
`;

MultiSelectableWithCustomCheckbox.args = {
  ...MultiSelectableMenu.args,
  isMultiSelectable: true,
  checkComponent: CustomCheckBox,
};

const IconStyles = css`
  display: block;
  width: 20px;
  height: 20px;
`;

const StyledBellIcon = styled(Bell)`
  ${IconStyles}
`;

const StyledBuildingIcon = styled(Building)`
  ${IconStyles}
`;

const StyledDownloadIcon = styled(Download)`
  ${IconStyles}
`;

MultiSelectableWithAdvanceItems.args = {
  size: 'big',
  items: [
    [
      {
        label: 'First Item',
        details: 'First Description',
        icon: <StyledBellIcon />,
      },
      {
        label: 'Second Item',
        details: 'Second Description',
        icon: <StyledBuildingIcon />,
      },
      {
        label: 'Third Item',
        details: 'Third Description',
        icon: <StyledDownloadIcon />,
      },
    ],
  ],
  isMultiSelectable: true,
};

CustomNoItems.args = {
  emptyMenuMessage1: (
    <div>
      <p>No result</p>
      <p>Try changing the search term</p>
    </div>
  ),
};
