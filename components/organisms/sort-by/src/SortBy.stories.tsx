import { useState } from 'react';
import { StoryFC } from '$storybook/StoryFC';

import { SortBy, SortByProps } from './SortBy';

export default {
  title: 'Organisms / SortBy',
  component: SortBy,
};

export const Default: StoryFC<SortByProps> = (args) => {
  const [selectedOption, setSelectedOption] = useState(args.selectedOption);

  args.selectedOption = selectedOption;
  args.onSelectOption = (newSelectedOption) => setSelectedOption(newSelectedOption);

  return <SortBy {...args} />;
};

export const LongOptionTitle = Default.bind({});
export const MultiSectionSortBy = Default.bind({});

Default.args = {
  options: [['Recent', 'Title', 'Task Status']],
  selectedOption: 'Recent',
};

LongOptionTitle.args = {
  options: [['Recent', 'Title', 'Task Status', 'Name and Family A-Z']],
  selectedOption: 'Recent',
};

MultiSectionSortBy.args = {
  options: [
    ['Title A to Z', 'Title Z to A'],
    ['Most view', 'Lowest view'],
  ],
};
