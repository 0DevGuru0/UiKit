import { Background } from './theme/Background';
import { useLocaleData } from 'storybook-addon-locale';
import { RouterContext } from 'next/dist/shared/lib/router-context'; // next 12
import type { ThemeGlobals } from 'storybook-addon-theme-toggle';
import { StylesProvider, breakPoints } from '@avidkit/styles';
import { createdTheme, ThemeMode } from './theme/Theme';

export const decorators = [
  (Story: any, context: any) => {
    const { background } = context.parameters;
    const localeData = useLocaleData(context)!;
    const direction = localeData.dir!;

    const globals = context.globals as ThemeGlobals;
    const selectedTheme = globals.theme as ThemeMode;
    const theme = createdTheme(selectedTheme);

    return (
      <StylesProvider
        direction={direction}
        theme={theme}
        fontFamily={'Source Sans 3Variable'}
      >
        <Background noPadding={background?.noPadding}>
          <Story />
        </Background>
      </StylesProvider>
    );
  },
];
const customViewports = {
  MobileL: {
    name: 'Large Mobile',
    styles: {
      width: breakPoints.mobileL - 1 + 'px',
      height: '801px',
    },
  },
  mobileM: {
    name: 'Medium Mobile',
    styles: {
      width: breakPoints.mobileM - 1 + 'px',
      height: '801px',
    },
  },
  MobileS: {
    name: 'Small Mobile',
    styles: {
      width: breakPoints.mobileS - 1 + 'px',
      height: '801px',
    },
  },
  Tablet: {
    name: 'Tablet',
    styles: {
      width: breakPoints.tablet - 1 + 'px',
      height: '801px',
    },
  },
  Laptop: {
    name: 'Laptop',
    styles: {
      width: breakPoints.laptop - 1 + 'px',
      height: '801px',
    },
  },
};
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  defaultLocale: 'en',
  locales: {
    en: { dir: 'ltr', name: 'English' },
    fa: { dir: 'rtl', name: 'Persian' },
    ar: { dir: 'rtl', name: 'Arabic' },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  background: { noPadding: false },
  viewport: { viewports: customViewports },
  theme: {
    default: 'LERNITO_LIGHT',
    selector: 'body',
    themes: [
      {
        id: 'TROWEB_LIGHT',
        title: 'TROWEB_LIGHT',
        class: 'TROWEB_LIGHT',
        color: '#fff',
      },
      {
        id: 'TROWEB_DARK',
        title: 'TROWEB_DARK',
        class: 'TROWEB_DARK',
        color: '#000',
      },
      {
        id: 'LERNITO_LIGHT',
        title: 'LERNITO_LIGHT',
        class: 'LERNITO_LIGHT',
        color: '#fff',
      },
      {
        id: 'LERNITO_DARK',
        title: 'LERNITO_DARK',
        class: 'LERNITO_DARK',
        color: '#000',
      },
    ],
  },
};
