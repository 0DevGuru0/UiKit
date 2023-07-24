import { StoryFC } from '$storybook/StoryFC';
import { DropdownButton, DropdownButtonProps } from './DropdownButton';

export default {
  title: 'Molecules / DropdownButton',
  component: DropdownButton,
  parameters: { background: { noPadding: false } },
};

export const DropdownButtonCmp: StoryFC<DropdownButtonProps> = (args) => {
  return <DropdownButton {...args} />;
};

DropdownButtonCmp.args = {
  buttonTitle: 'Options',
  sections: [
    [
      {
        label: 'Import via file',
      },
      {
        label: 'Add member',
      },
    ],
  ],
};
