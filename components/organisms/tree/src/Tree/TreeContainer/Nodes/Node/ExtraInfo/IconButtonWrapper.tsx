import Grid, { GridProps } from '@mui/material/Grid';
import styled from 'styled-components';

interface IconButtonWrapperProps extends GridProps {
  left: number;
}

export const IconButtonWrapper = styled((props: IconButtonWrapperProps) => (
  <Grid {...props} />
))`
  position: relative;
  padding-left: 6px;
  padding-right: 6px;
  & > div {
    position: absolute;
    top: 3px;
    left: ${({ left }) => left}px;
  }
`;
