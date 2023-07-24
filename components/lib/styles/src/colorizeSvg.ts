import { css, FlattenSimpleInterpolation } from 'styled-components';

export const colorizeSvg = (color: string): FlattenSimpleInterpolation => {
  return css`
    * > svg path,
    use {
      fill: ${color} !important;
    }
  `;
};
