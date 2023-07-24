import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import Card from '@mui/material/Card';
export interface SampleProps {
  children?: ReactNode;
}

export const SampleDependant = (props: SampleProps) => {
  return <Container>This is a package that depends on sample</Container>;
};

const Container = styled(Card)`
  ${({ theme }) => css`
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.primary.contrastText};
    border-left: 8px solid ${theme.palette.error.main};
    border-radius: 4px;
    padding: 12px;
    width: 300px;
    text-align: center;
  `}
`;
