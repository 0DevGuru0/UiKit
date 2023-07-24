import { css } from 'styled-components';

export const header = css`
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  font-family: 'Source Sans Pro';
  font-size: 16px;
  line-height: 52px;
  color: ${({ theme }) => theme.palette.text.primary};
`;
