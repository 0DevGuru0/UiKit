import {
  FormHelperText,
  ListItemText,
  MenuItem,
  Select,
  SelectProps,
} from '@mui/material';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { InputLabelProps } from './InputLabel';

export type NewSelectProps = SelectProps & {
  errorText?: string;
  lableProps?: InputLabelProps;
  placeHolderText?: string;
  loading?: boolean;
  controllerIcon?: JSX.Element;
  showLabel?: boolean;
  labelText?: string;
  optional?: boolean;
  isDisabled?: boolean;
  startIcon?: JSX.Element;
  onControllerClick?: () => void;
  onIconClick: (e: any) => void;
};

export const Error = styled.div`
  color: ${({ theme }) => theme.palette.error.main};
`;

export const StyledSelect = styled(Select)<{
  $isFilled?: boolean;
  $isDisabled?: boolean;
}>`
  font-family: inherit !important;
  border-radius: 8px;
  padding: 0px;
  height: 48px;
  ${({ $isDisabled }) =>
    css`
      ${$isDisabled && 'pointer-events: none; opacity: 0.5;'}
    `}
  .MuiInputBase-input {
    padding: 12px;
    font-size: 16px;
    font-weight: 400;
  }
  .MuiPopover-paper {
    width: 100%;
    margin-top: 4px;
    padding: 12px;
    border-radius: 8px;
    box-shadow: 0px 2px 24px rgba(97, 97, 115, 0.16);
  }
  .MuiPopover-root {
    cursor: pointer;
  }
  & .MuiList-padding {
    padding: 0px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  & .MuiOutlinedInput-notchedOutline {
    border-width: 1px;
    border-color: ${({ theme, $isFilled }) =>
      $isFilled ? theme.palette.grey[600] : 'transparent'};
    border-color: ${({ theme, error }) => error && theme.palette.error[500]} !important;
  }
  // change the color of the select when it is focused
  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme, $isFilled }) =>
      $isFilled ? theme.palette.grey[600] : theme.palette.primary[300]};
    border-width: 1px;
  }
  // change the color of the select when it is hovered
  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme, $isFilled }) =>
      $isFilled ? theme.palette.grey[600] : theme.palette.primary[300]};
    border-width: 1px;
  }
  & .MuiOutlinedInput-notchedOutline {
    ${(props) => props.disabled && 'border-color: transparent !important;'}
  }
  & .MuiSelect-icon {
    color: black;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
  }
  &:focus-within {
    outline-width: 3px;
    outline-color: ${({ theme }) => theme.palette.primary[200]};
    outline-style: solid;
    background-color: ${({ theme }) => theme.palette.grey[100]};
    ${({ $isFilled }) =>
      $isFilled &&
      css`
        outline-color: transparent !important;
      `}
  }
  &:hover {
    background-color: ${({ theme }) => theme.palette.grey[100]} !important;
  }
  background-color: ${({ theme, $isFilled }) =>
    $isFilled ? theme.palette.grey[100] : theme.palette.grey[200]};
  background-color: ${({ theme, disabled }) =>
    disabled && rgba(theme.palette.grey[200], 0.5)};
  color: ${({ theme, $isFilled }) =>
    $isFilled ? theme.palette.grey[800] : theme.palette.grey[500]};
  & .Mui-disabled {
    opacity: 0.5;
    & .MuiOutlinedInput-input {
      color: ${({ theme }) => theme.palette.grey[500]} !important;
    }
  }

  & .MuiOutlinedInput-input.Mui-disabled {
    color: ${({ theme }) => theme.palette.grey[500]};
    -webkit-text-fill-color: unset;
  }

  & .MuiMenuItem-root {
    font-family: inherit !important;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  padding: 6px 9px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.palette.grey[800]};
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary[100]};
    color: ${({ theme }) => theme.palette.primary[500]};
  }
  &.Mui-selected {
    background-color: unset;
    &:hover {
      background-color: ${({ theme }) => theme.palette.primary[100]};
      color: ${({ theme }) => theme.palette.primary[500]};
    }
  }
`;

export const StyledListItemText = styled(ListItemText)`
  font-family: inherit !important;
  span {
    font-family: inherit !important;
    font-weight: unset;
    font-size: unset;
  }
`;

interface IconProps {
  $focused: boolean;
  $disabled: boolean;
  $hasLabel: boolean;
}
export const CustomIconContainer = styled.div<IconProps>`
  cursor: pointer;
  right: 12px;
  width: 24px;
  height: 24px;
  position: unset;
  transition-duration: 300ms;
  top: ${({ $hasLabel }) => ($hasLabel ? 50 : 18)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -6px;
  margin-left: 12px;
  ${({ $disabled }) => $disabled && 'opacity: 0.5;'};
`;

export const StyledHelperText = styled(FormHelperText)`
  margin: 6px 0px 0px 0px;
`;

export const ControllerContainer = styled.div`
  pointer-events: none;
  height: 36px;
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: 12px;
  position: absolute;
  right: 0px;
`;
