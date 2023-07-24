import { StoryFC } from '$storybook/StoryFC';
import {
  VerificationCodeInput,
  VerificationCodeInputProps,
} from './VerificationCodeInput';
import styled from 'styled-components';

export default {
  title: 'Atoms / VerificationCodeInput',
  component: VerificationCodeInput,
  parameters: { background: { noPadding: false } },
};

export const VerificationCodeInputCmp: StoryFC<VerificationCodeInputProps> = (args) => {
  return (
    <Container>
      <VerificationCodeInput {...args} />
    </Container>
  );
};

VerificationCodeInputCmp.args = {
  length: 6,
};

const Container = styled.div`
  width: 350px;
`;
