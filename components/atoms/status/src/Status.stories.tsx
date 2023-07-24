import { StoryFC } from '$storybook/StoryFC';
import { Status, StatusProps } from './Status';
import styled from 'styled-components';

export default {
  title: 'Atoms / Status',
  component: Status,
  parameters: {},
};

export const StatusCmp: StoryFC<StatusProps> = (args) => {
  return <Status {...args}>Awaiting / Todo</Status>;
};

StatusCmp.args = {
  type: 'grey',
  variant: 'filled',
};
StatusCmp.parameters = {
  zeplinLink:
    'https://app.zeplin.io/project/61ef8beef9e28e42533ceefb/screen/62c3f551bde30b19bcb68878',
};

export const CustomStatus: StoryFC<StatusProps> = (args) => {
  return <StyledStatus {...args}>Awaiting / Todo</StyledStatus>;
};

CustomStatus.args = {};
CustomStatus.parameters = {
  zeplinLink:
    'https://app.zeplin.io/project/61ef8beef9e28e42533ceefb/screen/62c3f551bde30b19bcb68878',
};

const StyledStatus = styled(Status)`
  & .AK-OutlinedStatus {
    color: #f28907 !important;
    background-color: #ffedd9 !important;
    border: 1px solid #f28907 !important;
  }

  & .AK-FilledStatus {
    color: #ffedd9 !important;
    background-color: #f28907 !important;
  }
`;
