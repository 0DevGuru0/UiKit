import { IPalette as IArvandPalette } from '$storybook/ITheme';
import { Theme as MUITheme, Palette } from '@mui/material/styles';

declare module 'styled-components' {
  export interface DefaultTheme extends MUITheme {
    palette: Required<Palette> & IArvandPalette;
  }
}

declare module '@mui/material/styles' {
  export interface PaletteOptions extends IArvandPalette {}
}

declare module '@mui/material/styles/createPalette' {
  export interface Palette extends IArvandPalette {}
}
