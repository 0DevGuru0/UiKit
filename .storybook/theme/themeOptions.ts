/**
 * TODO: this is Pubnito Shared UI related and for material 4.0
 * We use material 5.0 and should change this a lot
 */

import { getContrastRatio } from '@mui/material/styles';
// import { ThemeOptions } from '@mui/material/styles';
import { dark, light } from '@mui/material/styles/createPalette';

const contrastThreshold = 3;

export const themeOptions: (palette: any) => any = (palette) => {
  return {
    typography: {},
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1024,
        lg: 1280,
        xl: 1920,
      },
    },
    palette: {
      ...palette,
      contrastThreshold,
      getContrastText: (background: any) => {
        // if (background === primary.dark) {
        //   return '#a4c4c4';
        // }
        const contrastText =
          getContrastRatio(background, dark.text.primary) >= contrastThreshold
            ? dark.text.primary
            : light.text.primary;
        return contrastText;
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          color: palette.grey[100],
        },
      },
      MuiAppBar: {
        colorPrimary: {
          backgroundColor: palette.grey[800],
        },
      },
      MuiPopover: {
        paper: {
          borderRadius: 8,
          boxShadow: '0 2px 12px 0 rgba(33, 36, 42, 0.25);',
        },
      },
      MuiTypography: {
        body1: {
          fontSize: '1rem',
          fontWeight: 600,

          lineHeight: 1,
        },
        body2: {
          fontSize: '0.875rem',
          fontWeight: 600,
        },
        subtitle1: {
          fontSize: '0.75rem',
          fontWeight: 'normal',
          color: palette.grey[200],
          lineHeight: 1,
        },
        subtitle2: {
          fontSize: '0.625rem',
          fontWeight: 'normal',
          color: palette.grey[300],
        },
        h3: {
          fontSize: '1.5rem',
          fontWeight: 'bold',
          fontStretch: 'normal',
          fontStyle: 'normal',
        },
        h4: {
          fontSize: '1.25rem',
          fontWeight: 'bold',
          fontStretch: 'normal',
          fontStyle: 'normal',
        },
        h5: {
          fontSize: '1rem',
          fontWeight: 'bold',
          fontStretch: 'normal',
          fontStyle: 'normal',
          lineHeight: 'normal',
          letterSpacing: 'normal',
        },
        h6: {
          fontSize: '0.875rem',
          fontWeight: 'bold',
          fontStretch: 'normal',
          fontStyle: 'normal',
          lineHeight: 'normal',
          letterSpacing: 'normal',
        },
      },
      MuiList: {
        padding: {
          padding: '0 important',
        },
      },
      MuiLinearProgress: {
        root: {
          borderRadius: 8,
          height: 5,
        },
        bar: {
          borderRadius: 8,
        },
        colorPrimary: {
          backgroundColor: 'rgba(214, 214, 216, 0.5)',
        },
      },
      MuiTooltip: {
        tooltip: {
          backgroundColor: palette.grey[100],
          fontSize: '0.75rem',
          color: palette.grey[800],
        },
        arrow: {
          '&::before': {
            backgroundColor: palette.grey[100],
          },
        },
      },
      MuiButton: {
        root: {
          fontWeight: 'bold',
          fontStretch: 'normal',
          fontStyle: 'normal',
          lineHeight: 'normal',
          letterSpacing: 'normal',
          textTransform: 'none',
          borderRadius: '8px',
          padding: '8px 24px',
          height: '36px',
          boxShadow: 'none',
        },
        contained: {
          boxShadow: 'none',
        },
        sizeLarge: {
          padding: '16px 24px',
          borderRadius: '12px',
          fontSize: '1.25rem',
          height: '57px',
          boxShadow: `0 2px 9px 0 ${palette.grey[500]}`,
        },
        containedSecondary: {
          color: palette.grey[800],
        },
      },
      MuiTab: {
        textColorPrimary: {
          '&.Mui-selected': {
            color: palette.grey[100],
            fontWeight: 'bold',
          },
        },
      },
      MuiBackdrop: {
        root: {
          backgroundColor: 'rgba(33, 36, 42, 0.2)',
          backdropFilter: 'blur(3px)',
        },
      },
      MuiPaper: {
        elevation4: {
          boxShadow: `0 2px 9px 0 ${palette.grey[500]}`,
        },
      },
    },
    text: {
      primary: palette.grey[200],
      lowContrast: palette.grey[400],
      highContrast: palette.grey[100],
    },
    indicator: {
      default: 'transparent',
      selected: '#00d1ab',
    },
    cmp: {
      pagination: {
        root: {
          background: palette.grey[700],
        },
        btnRoot: {
          hovered: {
            background: palette.grey[400],
          },
        },
      },
      pageCountBox: {
        buttonRoot: {
          default: {
            background: 'transparent',
          },
          hovered: {
            background: '#d6d6d84a',
          },
          after: {
            background: {
              current: palette.primary.main,
              other: 'transparent',
            },
          },
        },
      },
      moreOptions: {
        root: {
          background: {
            default: 'transparent',
            error: '#fdeeee',
            primary: '#e6f7f9',
            hover: '#e6f7f9',
          },
        },
        iconFill: {
          error: '#e94d4d',
          primary: '#09b6c7',
          highContrast: '#21242a',
          default: '#21242a',
        },
        text: {
          error: '#e94d4d',
          primary: '#09b6c7',
        },
      },
    },
  };
};
