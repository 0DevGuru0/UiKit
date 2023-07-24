import styled from 'styled-components';
import { StoryFC } from '$storybook/StoryFC';
import { MoreOptions, MoreOptionsProps } from './MoreOptions';
import { Edit, EditFill, Trash, TrashFill, MoreHorizontalFill } from '@avidkit/icons';
import { OptionRendererProps } from 'components/atoms/options/src/Options/OptionItem';
import { Download } from '@avidkit/icons';

export default {
  title: 'Molecules / MoreOptions',
  component: MoreOptions,
  parameters: { background: { noPadding: false } },
};

const actions = [
  {
    label: 'Edit Collections',
    icon: {
      default: <Edit />,
      hover: <EditFill />,
    },
    hoverColor: {
      icon: '#4262FA',
      background: '#e3e9fe',
    },
  },
  {
    label: 'Delete',
    icon: {
      default: <Trash />,
      hover: <TrashFill />,
    },
    hoverColor: {
      icon: '#ff4444',
      background: '#ffe8e6',
    },
  },
];

const Container = styled.div`
  width: 400px;
  & > div {
    float: right;
  }
`;

export const Default: StoryFC<MoreOptionsProps> = (args) => {
  return (
    <Container>
      <MoreOptions {...args} maxWidth={600} />
    </Container>
  );
};

Default.args = {
  sections: [actions, actions],
  variant: 'horizontal',
  size: 'Md',
  disabled: false,
  minWidth: 190,
  // handleOpeningOptions: () => console.log('actions'),
};

export const Contained: StoryFC<MoreOptionsProps> = (args) => {
  return (
    <Container>
      <MoreOptions {...args} maxWidth={200} />
    </Container>
  );
};

Contained.args = {
  sections: [actions, actions],
  variant: 'horizontal',
  contained: true,
  size: 'Md',
  disabled: false,
  minWidth: 190,
  // handleOpeningOptions: () => console.log('actions'),
};

export const WithCustomIcon: StoryFC<MoreOptionsProps> = (args) => {
  return (
    <Container>
      <MoreOptions {...args} maxWidth={189} />
    </Container>
  );
};

WithCustomIcon.args = {
  sections: [actions, actions],
  variant: 'horizontal',
  contained: true,
  size: 'Md',
  disabled: false,
  minWidth: 190,
  icon: <Download />,
  // handleOpeningOptions: () => console.log('actions'),
};

export const WithDefaultColorOptions: StoryFC<MoreOptionsProps> = (args) => {
  return (
    <Container>
      <MoreOptions {...args} maxWidth={187} />
    </Container>
  );
};

const DefaultColorOptionsArgs = [
  {
    label: 'Edit',
    disabled: true,
    hoverColor: {
      background: '#F1FFFE',
      icon: '#00A693',
    },
  },
  {
    label: 'Share',
    hoverColor: {
      background: '#F1FFFE',
      icon: '#00A693',
    },
  },
  {
    label: 'Danger',
    color: '#EE6449',
    hoverColor: {
      background: '#FFEBE8',
      icon: '#EE6449',
    },
  },
  {
    label: 'Warning',
    color: '#D3A430',
    hoverColor: {
      background: '#FFF8E8',
      icon: '#D3A430',
    },
  },
];

WithDefaultColorOptions.args = {
  sections: [DefaultColorOptionsArgs],
  variant: 'horizontal',
  contained: true,
  size: 'Md',
  disabled: false,
  minWidth: 190,
  icon: <MoreHorizontalFill />,
  // handleOpeningOptions: () => console.log('actions'),
};

export const WithCustomOptionRenderer = Default.bind({});

WithCustomOptionRenderer.args = {
  sections: [actions, actions],
  variant: 'horizontal',
  size: 'Md',
  disabled: false,
  optionRenderer: ({ itemCmp }: OptionRendererProps) => (
    <CustomOptionRenderer>{itemCmp}</CustomOptionRenderer>
  ),
};

const CustomOptionRenderer = styled.div`
  padding: 5px;
  border: 1px dashed blue;
`;
