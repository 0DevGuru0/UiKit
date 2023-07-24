import { StoryFC } from '$storybook/StoryFC';
import { LabelWithBreadcrumb, LabelWithBreadcrumbProps } from './LabelWithBreadcrumb';
import styled from 'styled-components';

export default {
  title: 'Molecules / LabelWithBreadcrumb',
  component: LabelWithBreadcrumb,
  parameters: { background: { noPadding: false } },
};

export const SingleStep: StoryFC<LabelWithBreadcrumbProps> = (args) => {
  return (
    <Container>
      <LabelWithBreadcrumb {...args} />
    </Container>
  );
};

SingleStep.args = {
  label: 'Maziar Gholami',
  items: ['All', 'Tehran', 'Private Schools'],
};

const Container = styled.div`
  width: 390px;
`;
