import { StoryFC } from '$storybook/StoryFC';
import { ProgressBar, ProgressBarProps } from './ProgressBar';

export default {
  title: 'Atoms / ProgressBar',
  component: ProgressBar,
  parameters: { background: { noPadding: false } },
};

export const ProgressBarCmp: StoryFC<ProgressBarProps> = (args) => {
  return <ProgressBar {...args} />;
};

ProgressBarCmp.args = {
  progress: 65,
};
