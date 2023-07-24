import { StoryFC } from '$storybook/StoryFC';
import { Options, OptionsProps } from './Options';
import { Edit, EditFill, Share, ShareFill, Trash, TrashFill } from '@avidkit/icons';
import styled from 'styled-components';
import { OptionRendererProps } from './Options/OptionItem';

export default {
  title: 'Atoms / Options',
  component: Options,
  parameters: {
    background: { noPadding: false },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/4PiDtwmiQoxCGfVXG4XQn4/Avid-kit?node-id=0%3A11020&t=NxsJVL2IfvkHpsdi-4',
    },
  },
};

export const Simple: StoryFC<OptionsProps> = (args) => {
  return <Options {...args} />;
};

export const WithIcon = Simple.bind({});
export const WithHeader = Simple.bind({});
export const EndIcon = Simple.bind({});
export const WithCustomOptionRenderer = Simple.bind({});

const actions = [
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
    label: 'Delete',
    hoverColor: {
      background: '#F1FFFE',
      icon: '#00A693',
    },
  },
];

const iconActions = [
  {
    label: 'Edit',
    icon: {
      default: <Edit />,
      hover: <EditFill />,
    },
    hoverColor: {
      icon: '#1b62f8', // theme.palette.primary.main
      background: '#e3ecfe', // theme.palette.primary[100],
    },
  },
  {
    label: 'Share',
    icon: {
      default: <Share />,
      hover: <ShareFill />,
    },
    hoverColor: {
      icon: '#1b62f8', // theme.palette.primary.main,
      background: '#e3ecfe', // theme.palette.primary[100],
    },
  },
  {
    label: 'Delete',
    icon: {
      default: <Trash />,
      hover: <TrashFill />,
    },
    hoverColor: {
      icon: '#f36d53', // theme.palette.error.main,
      background: '#feedea', // theme.palette.error.light,
    },
  },
];

const endIconActions = [
  {
    label: 'Edit',
    icon: {
      default: <Edit />,
      hover: <EditFill />,
      position: 'end',
    },
    hoverColor: {
      icon: '#1b62f8', // theme.palette.primary.main
      background: '#e3ecfe', // theme.palette.primary[100],
    },
  },
  {
    label: 'Share',
    icon: {
      default: <Share />,
      hover: <ShareFill />,
      position: 'end',
    },
    hoverColor: {
      icon: '#1b62f8', // theme.palette.primary.main,
      background: '#e3ecfe', // theme.palette.primary[100],
    },
  },
  {
    label: 'Delete',
    hoverColor: {
      icon: '#f36d53', // theme.palette.error.main,
      background: '#feedea', // theme.palette.error.light,
    },
  },
];

Simple.args = {
  sections: [actions],
};

WithHeader.args = {
  header: 'Other pages',
  sections: [actions],
};

WithIcon.args = {
  sections: [iconActions],
};

EndIcon.args = {
  sections: [endIconActions, iconActions],
};

WithCustomOptionRenderer.args = {
  sections: [endIconActions, iconActions],
  optionRenderer: ({ item, itemCmp }: OptionRendererProps) => (
    <CustomRenderer href={item.href}>{itemCmp}</CustomRenderer>
  ),
};

const CustomRenderer = styled.a`
  border: 1px dashed red;
`;
