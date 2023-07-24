import { StoryFC } from '$storybook/StoryFC';
import { SampleDependant, SampleProps } from './SampleDependant';

export default {
  title: 'Atoms / SampleDependant',
  component: SampleDependant,
  parameters: { background: { noPadding: false } },
};

export const SampleCmp: StoryFC<SampleProps> = (args) => {
  return <SampleDependant {...args} />;
};

SampleCmp.args = {};
