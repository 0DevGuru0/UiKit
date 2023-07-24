import { css } from 'styled-components';

export const customScrollBar = css`
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #c1c1c1;
    border-radius: 10px;
    min-height: 40px;
  }
`;
