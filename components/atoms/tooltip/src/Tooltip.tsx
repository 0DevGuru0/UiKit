import styled from 'styled-components';
import { Tooltip as MuiTooltip, TooltipProps } from '@mui/material';

export const Tooltip = styled((props: TooltipProps) => (
  <MuiTooltip classes={{ tooltip: props.className }} {...props} />
))`
  &.MuiTooltip-tooltip {
    background: ${({ theme }) => theme.palette.grey[900]};
    > span {
      color: ${({ theme }) => theme.palette.grey[900]};
    }
  }
`;
