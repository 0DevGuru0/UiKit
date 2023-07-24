import styled, { css } from 'styled-components';
import { StoryFC } from '$storybook/StoryFC';
import { Tooltip } from './Tooltip';
import { TooltipProps } from '@mui/material';

export default {
  title: 'Atoms / Tooltip',
  component: Tooltip,
  parameters: { background: { noPadding: false } },
};

export const Default: StoryFC<Omit<TooltipProps, 'children'>> = (args) => {
  return (
    <Tooltip {...args}>
      <Container>Hover me!</Container>
    </Tooltip>
  );
};

Default.args = {
  title: 'Tooltip title',
};

const Container = styled.div`
  cursor: pointer;
  ${({ theme }) => css`
    padding: 5px;
    width: 100px;
    color: ${theme.palette.grey[100]};
    background-color: ${theme.palette.primary.main};
  `}
`;
