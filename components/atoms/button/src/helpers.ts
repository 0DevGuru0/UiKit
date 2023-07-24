import { ButtonProps } from './Button';

export const getColor = (
  colorVariant: ButtonProps['color'],
  theme: any,
  index: number,
): string => {
  switch (colorVariant) {
    case 'primary':
      return theme.palette.primary[index];
    case 'secondary':
      return theme.palette.secondary[index];
    case 'info':
      return theme.palette.info[index];
    case 'error':
      return theme.palette.error[index];
    case 'grey':
      return theme.palette.grey[index];
    case 'reverse':
      return theme.palette.grey[index];
    default:
      return theme.palette.primary[index];
  }
};
export const getFontSizes = (size: ButtonProps['size']): string => {
  switch (size) {
    case 'xsmall':
      return '14px';
    case 'small':
      return '14px';
    case 'medium':
      return '16px';
    case 'large':
      return '16px';
    case 'xlarge':
      return '18px';
    default:
      return '16px';
  }
};
export const getBorderRadius = (
  size: ButtonProps['size'],
  largeRadius: ButtonProps['largeRadius'],
): string => {
  if (size === 'xsmall') {
    return '4px';
  }
  if (size === 'small' && largeRadius) {
    return '18px';
  }
  return '8px';
};

export const getColors = (
  variant: ButtonProps['variant'],
  color: ButtonProps['color'],
  theme: any,
): {
  textColor: string;
  backgroundColor: string;
  backgroundColorHover: string;
  backgroundColorActive: string;
  border: string;
} => {
  let textColor: string = 'initial';
  let backgroundColor: string = 'initial';
  let backgroundColorHover: string = 'initial';
  let backgroundColorActive: string = 'initial';
  let border: string = 'initial';
  switch (variant) {
    case 'solid':
      textColor = theme.palette.grey[100];
      backgroundColor = getColor(color, theme, 500);
      backgroundColorHover = getColor(color, theme, 400);
      backgroundColorActive = getColor(color, theme, 600);
      break;
    case 'tonal':
      backgroundColor = getColor(color, theme, 200);
      backgroundColorHover = getColor(color, theme, 300);
      backgroundColorActive = getColor(color, theme, 400);
      textColor = getColor(color, theme, 600);
      break;
    case 'outline':
      if (color === 'grey') {
        border = `1px solid ${theme.palette.grey[500]}}`;
        textColor = theme.palette.grey[600];
        backgroundColorHover = theme.palette.grey[200];
        backgroundColorActive = theme.palette.grey[300];
      } else if (color === 'reverse') {
        textColor = theme.palette.grey[100];
        backgroundColor = 'unset';
        backgroundColorHover = 'rgba(255, 255, 255, 0.1)';
        backgroundColorActive = 'rgba(0, 0, 0, 0.1)';
      } else {
        border = `1px solid ${getColor(color, theme, 500)}`;
        textColor = getColor(color, theme, 500);
        backgroundColorHover = getColor(color, theme, 200);
        backgroundColorActive = getColor(color, theme, 300);
      }
      break;
    case 'float':
      backgroundColor = theme.palette.grey[100];
      backgroundColorHover = getColor(color, theme, 100);
      backgroundColorActive = getColor(color, theme, 200);
      textColor = getColor(color, theme, 500);
      break;
    case 'text':
      backgroundColor = theme.palette.grey[100];
      backgroundColorHover = theme.palette.grey[100];
      backgroundColorActive = theme.palette.grey[100];
      textColor = getColor(color, theme, 500);
      break;
  }

  return {
    textColor,
    backgroundColor,
    backgroundColorHover,
    backgroundColorActive,
    border,
  };
};

export const getHeight = (size: ButtonProps['size']): string => {
  switch (size) {
    case 'xsmall':
      return '36px';
    case 'small':
      return '36px';
    case 'medium':
      return '48px';
    case 'large':
      return '60px';
    case 'xlarge':
      return '72px';
    default:
      return '48px';
  }
};
export const getPadding = (
  size: ButtonProps['size'],
  $iconButtonMode?: boolean,
): string => {
  if ($iconButtonMode) {
    return 'initial';
  }
  switch (size) {
    case 'xsmall':
      return '0px 24px';
    case 'small':
      return '0px 24px';
    case 'medium':
      return '0px 24px';
    case 'large':
      return '0px 36px';
    case 'xlarge':
      return '0px 36px';
    default:
      return '0px 24px';
  }
};

export const getBorder = (
  variant: ButtonProps['variant'],
  color: ButtonProps['color'],
  theme: any,
): string => {
  let border: string = 'initial';

  if (variant === 'outline') {
    if (color === 'grey') {
      border = `1px solid ${theme.palette.grey[500]}}`;
    } else if (color === 'reverse') {
      border = `1px solid ${theme.palette.grey[100]}}`;
    } else {
      border = `1px solid ${getColor(color, theme, 500)}`;
    }
  }
  return border;
};

export const getSvgSize = (size: ButtonProps['size']): string => {
  switch (size) {
    case 'xsmall':
      return '18px';
    case 'small':
      return '20px';
    case 'medium':
      return '24px';
    case 'large':
      return '24px';
    case 'xlarge':
      return '28px';
    default:
      return '24px';
  }
};
