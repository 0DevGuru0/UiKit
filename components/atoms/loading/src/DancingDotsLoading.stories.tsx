import { StoryFC } from '$storybook/StoryFC';
import styled from 'styled-components';
import { DancingDotsLoading, DancingDotsLoadingProps } from './DancingDotsLoading';
import { colorizeSvg } from '@avidkit/styles';
export default {
  title: 'Atoms / Loadings / DancingDotsLoading',
  component: DancingDotsLoading,
  parameters: { background: { noPadding: false } },
  argTypes: {
    size: {
      options: ['large', 'small', 'medium'] as DancingDotsLoadingProps['size'][],
      control: { type: 'select' },
    },
  },
};

export const DancingDotsLoadingDefault: StoryFC<DancingDotsLoadingProps> = (args) => {
  return <DancingDotsLoading {...args} />;
};
export const DancingDotsLoadingColored: StoryFC<DancingDotsLoadingProps> = (args) => {
  return <StyledDancingDotsLoading {...args} />;
};

DancingDotsLoadingDefault.args = {
  size: 'large',
};

const StyledDancingDotsLoading = styled(DancingDotsLoading)`
  ${colorizeSvg('blue')}
`;
