import { StoryFC } from '$storybook/StoryFC';
import { CircleLoading, CircleLoadingProps } from './CircleLoading';

export default {
  title: 'Atoms / Loadings / CircleLoading',
  component: CircleLoading,
  parameters: { background: { noPadding: false } },
  argTypes: {
    loading: {
      control: { type: 'boolean' },
    },
  },
};

export const LoadingCmp: StoryFC<CircleLoadingProps> = (args) => {
  return (
    <CircleLoading {...args}>
      <h1>Test loading</h1>
    </CircleLoading>
  );
};

LoadingCmp.args = {
  loading: true,
};
