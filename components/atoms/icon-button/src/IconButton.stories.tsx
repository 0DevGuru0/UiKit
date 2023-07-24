import { StoryFC } from '$storybook/StoryFC';
import { Download } from '@avidkit/icons';
import { IconButton, IconButtonProps } from './IconButton';

export default {
  title: 'Atoms / IconButton',
  component: IconButton,
  parameters: { background: { noPadding: false } },
  argTypes: {
    color: {
      options: [
        'Normal',
        'Primary',
        'Secondary',
        'Negative',
        'Tertiary',
        'Fourth',
        'ToolPrimary',
        'ToolSecondary',
        'ToolNegative',
      ],
      control: { type: 'select' },
    },
    size: {
      options: ['Xs', 'Sm', 'Md', 'Lg', 'Xl'],
      control: { type: 'select' },
    },
  },
};

export const Contained: StoryFC<IconButtonProps> = (args) => {
  return <IconButton {...args} />;
};

export const Free = Contained.bind({});
export const WithText = Contained.bind({});

Contained.args = {
  variant: 'Contained',
  color: 'Normal',
  title: 'Tooltip',
  icon: <Download />,
};

Free.args = {
  variant: 'Free',
  color: 'Normal',
  title: 'Tooltip',
  icon: <Download />,
};

WithText.args = {
  color: 'Normal',
  title: 'Icon Text',
  icon: <Download />,
  variant: 'WithText',
};
