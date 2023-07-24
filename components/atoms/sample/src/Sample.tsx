import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { Card } from '@mui/material';
import { CheckCircle } from '@avidkit/icons';
import { tokens } from '@avidkit/styles';
import { get } from 'lodash';

export interface SampleProps {
  children?: ReactNode;
}

export const Sample = (props: SampleProps) => {
  return (
    <Container>
      <StyledIcon /> This is a sample component INFINITY
    </Container>
  );
};

const warningColor = tokens['troweb-light'].app.bg.warning.main.value;

const Container = styled(Card)`
  cursor: pointer;
  user-select: none;
  ${({ theme }) => css`
    border-left: 8px solid
      ${get(tokens['troweb-light'], warningColor.replace(/{(.*)}/, '$1')).value};
    border-radius: 4px;
    padding: 12px;
    width: 300px;
    text-align: center;
  `}
`;

const StyledIcon = styled(CheckCircle)`
  height: 14px;
  width: 16px;
  * {
    fill: black;
  }
`;
