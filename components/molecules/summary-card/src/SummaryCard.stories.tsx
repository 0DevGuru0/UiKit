import { useState } from 'react';
import { SummaryCard, SummaryCardProps } from './SummaryCard';
import { StoryFC } from '$storybook/StoryFC';
import { MemberAlone as MemberSvg, Group as SubGroupsSvg } from '@avidkit/icons';

export default {
  title: 'Molecules / SummaryCard',
  component: SummaryCard,
};

const Template: StoryFC<SummaryCardProps> = (args) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <SummaryCard
      {...args}
      isSelected={isSelected}
      onSelect={() => setIsSelected(!isSelected)}
      onClick={() => console.log('clicked!')}
    />
  );
};
export const SummaryClassDefault = Template.bind({});
export const SummaryClassWithoutOptions = Template.bind({});
export const SummaryClassWithBreadCrumb = Template.bind({});

const tags = [
  'Enghelab',
  'French Language',
  '2 Shifts',
  'Tag 1',
  'Another Tag',
  'Another Tag',
];

const actions = [
  {
    label: 'Edit',
  },
  {
    label: 'Delete',
  },
];

const summaryInfo = [
  {
    label: 'SubGroups',
    description: 32,
    icon: <SubGroupsSvg />,
  },
  {
    label: 'Members',
    description: 41,
    icon: <MemberSvg />,
  },
];

SummaryClassDefault.args = {
  title: 'School 1',
  isSelected: false,
  tags,
  showTags: false,
  summaryInfo,
  actions,
  isTagActivated: false,
} as const;

SummaryClassWithoutOptions.args = {
  title: 'School 1',
  isSelected: false,
  summaryInfo,
  tags,
  showTags: false,
  isTagActivated: false,
  isDescriptionBold: true,
} as const;

SummaryClassWithBreadCrumb.args = {
  title: [
    {
      title: 'dashboard',
    },
    {
      title: 'inbox',
    },
  ],
  isSelected: false,
  summaryInfo,
  tags,
  showTags: false,
  isTagActivated: false,
} as const;
