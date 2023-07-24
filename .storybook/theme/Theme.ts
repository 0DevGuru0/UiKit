import { createTheme, Theme, ThemeOptions } from '@mui/material/styles';
import { lernitoDarkTheme, lernitoLightTheme } from './lernitoTheme';
import { trowebDarkTheme, trowebLightTheme } from './trowebTheme';
import '@fontsource/source-sans-3/variable.css';
import '@fontsource/source-sans-3/variable-italic.css';

export type ThemeMode = 'TROWEB_LIGHT' | 'TROWEB_DARK' | 'LERNITO_LIGHT' | 'LERNITO_DARK';

const getThemeByMode = (mode: ThemeMode): ThemeOptions => {
  switch (mode) {
    case 'TROWEB_LIGHT':
      return trowebLightTheme;
    case 'TROWEB_DARK':
      return trowebDarkTheme;
    case 'LERNITO_LIGHT':
      return lernitoLightTheme;
    case 'LERNITO_DARK':
      return lernitoDarkTheme;
    default:
      return trowebLightTheme;
  }
};

export const createdTheme = (mode: ThemeMode = 'TROWEB_LIGHT'): Theme =>
  createTheme(getThemeByMode(mode));
