import { ReactNode, useMemo } from 'react';
import { createGlobalStyle, DefaultTheme } from 'styled-components';
import {
  StylisPlugin,
  StyleSheetManager as SCStyleSheetManager,
  ThemeProvider as SCThemeProvider,
} from 'styled-components';
import stylisRTLPlugin from 'stylis-plugin-rtl';

export type Direction = 'ltr' | 'rtl';

export interface StylesProviderProps {
  fontFamily?: string;
  direction?: Direction;
  theme: DefaultTheme | ((theme: DefaultTheme) => DefaultTheme);
  children?: ReactNode;
}

interface GlobalStylesProps {
  fontFamily: string;
}

const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  body {
    font-family: "${({ fontFamily }) => fontFamily}" !important;
  }
`;

export const StylesProvider = (props: StylesProviderProps) => {
  const { fontFamily, direction = 'ltr', theme } = props;

  const themeWithDirection = useMemo(() => {
    const newTheme = { ...theme, direction };

    if (fontFamily) {
      newTheme.typography = { ...newTheme.typography, fontFamily } as any;
    }

    return newTheme as typeof theme;
  }, [direction, theme, fontFamily]);

  const stylisPlugins = useMemo(
    () =>
      direction === 'rtl' ? [stylisRTLPlugin as unknown as StylisPlugin] : undefined,
    [direction],
  );

  return (
    <SCStyleSheetManager stylisPlugins={stylisPlugins}>
      <SCThemeProvider theme={themeWithDirection}>
        {fontFamily && <GlobalStyles fontFamily={fontFamily} />}
        {props.children}
      </SCThemeProvider>
    </SCStyleSheetManager>
  );
};
