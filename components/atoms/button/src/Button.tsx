/* eslint-disable sonarjs/no-identical-functions */
import { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import {
  getBorderRadius,
  getFontSizes,
  getColors,
  getPadding,
  getHeight,
  getBorder,
  getColor,
  getSvgSize,
} from './helpers';
import { disableStyle, colorizeSvg } from '@avidkit/styles';
import MuiButton, { ButtonProps as MuiBtnType } from '@mui/material/Button';
import { ButtonContent } from './Button/ButtonContent';

type BaseType = Omit<MuiBtnType, 'color' | 'variant' | 'size'>;
export interface ButtonProps extends BaseType {
  label?: string;
  className?: string;
  variant?: 'solid' | 'tonal' | 'outline' | 'float' | 'text';
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'grey' | 'reverse';
  /**
    only gets applied for medium size
    @default false
   **/
  largeRadius?: boolean;
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  forceFocusedStyle?: boolean;
  /**
    If `true`, the button will be rendered as an icon button
    will use startIcon and endIcon as the icon.
    @default false
   **/
  iconButtonMode?: boolean;
  loading?: boolean;
  /**
    a react node to be rendered as the loading indicator
   **/
  loadingIndicator?: ReactNode;
}

interface InternalProps {
  $variant: ButtonProps['variant'];
  $color: ButtonProps['color'];
  $size: ButtonProps['size'];
  $largeRadius?: ButtonProps['largeRadius'];
  $forceFocusedStyle?: boolean;
  $iconButtonMode?: boolean;
}
export const Button: FC<ButtonProps> = (props) => {
  const {
    label,
    children,
    className,
    variant = 'solid',
    color = 'primary',
    size = 'medium',
    iconButtonMode,
    loading,
    loadingIndicator = <span>...</span>,
    forceFocusedStyle,
    startIcon,
    endIcon,
    disabled,
    largeRadius,
    ...otherProps
  } = props;

  return (
    <StyledButton
      $variant={variant}
      $color={color}
      $largeRadius={largeRadius}
      $size={size}
      startIcon={loading ? loadingIndicator : startIcon}
      endIcon={loading ? null : endIcon}
      $forceFocusedStyle={forceFocusedStyle}
      className={className}
      disabled={disabled}
      $iconButtonMode={iconButtonMode}
      disableRipple
      {...otherProps}
    >
      <ButtonContent
        loading={loading}
        loadingIndicator={loadingIndicator}
        label={label}
        iconButtonMode={iconButtonMode}
      >
        {children}
      </ButtonContent>
    </StyledButton>
  );
};

const StyledButton = styled(MuiButton)<InternalProps>`
  font-weight: 700;
  display: flex;
  min-width: 120px;
  text-transform: none;
  align-items: center;
  justify-content: center;
  ${({ theme, $variant, $color }) => {
    const svgColor = getColors($variant, $color, theme).textColor;
    return colorizeSvg(svgColor);
  }}
  svg {
    width: ${({ $size }) => getSvgSize($size)};
    height: ${({ $size }) => getSvgSize($size)};
  }
  & .MuiButton-startIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${({ $iconButtonMode }) => ($iconButtonMode ? '0' : '6px')} !important;
    margin-left: 0 !important;
  }

  & .MuiButton-endIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: ${({ $iconButtonMode }) => ($iconButtonMode ? '0' : '6px')} !important;
    margin-right: 0 !important;
  }
  &.MuiButtonBase-root {
    font-size: ${({ $size }) => getFontSizes($size)};
    border-radius: ${({ $size, $largeRadius }) => getBorderRadius($size, $largeRadius)};
    color: ${({ $variant, $color, theme }) =>
      getColors($variant, $color, theme).textColor};
    background-color: ${({ $variant, $color, theme }) =>
      getColors($variant, $color, theme).backgroundColor};
    padding: ${({ $size, $iconButtonMode }) => getPadding($size, $iconButtonMode)};
    height: ${({ $size }) => getHeight($size)};

    ${({ $size, $iconButtonMode }) =>
      $iconButtonMode &&
      css`
        min-width: unset;
        // we want it to be rectangular
        width: ${getHeight($size)};
      `}
    ${({ disabled }) => disabled && disableStyle};
    ${({ $color, theme, $forceFocusedStyle }) => {
      if (!$forceFocusedStyle) return;
      const focusColor =
        $color === 'grey' ? theme.palette.grey[300] : getColor($color, theme, 200);
      return css`
        box-shadow: 0px 0px 0px 3px ${focusColor};
      `;
    }}
    border: ${({ $variant, $color, theme }) => getBorder($variant, $color, theme)};
    &:hover {
      background-color: ${({ $color, $variant, theme }) =>
        getColors($variant, $color, theme).backgroundColorHover};
      ${({ $variant, $color, theme }) =>
        $variant === 'text' &&
        css`
          color: ${getColors($variant, $color, theme).textColor};
        `};
    }
    &:active {
      background-color: ${({ $color, $variant, theme }) =>
        getColors($variant, $color, theme).backgroundColorActive};
      ${({ $variant, $color, theme }) =>
        $variant === 'text' &&
        css`
          color: ${getColors($variant, $color, theme).textColor};
        `};
    }
    &:focus-visible {
      ${({ $color, theme }) => {
        const focusColor =
          $color === 'grey' ? theme.palette.grey[300] : getColor($color, theme, 200);
        return css`
          box-shadow: 0px 0px 0px 3px ${focusColor};
        `;
      }}
    }
  }
`;
