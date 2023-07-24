import { FC } from 'react';
import { rgba } from 'polished';
import styled, { css } from 'styled-components';
import { OldSelectProps } from '../OldSelect';
import { Controller } from '../Select/Selector/Controller';

export type SelectorProps = Pick<
  OldSelectProps,
  'icon' | 'label' | 'placeHolder' | 'loading' | 'disabled' | 'renderInput'
> & {
  isOpen: boolean;
  hasError: boolean;
  isFilled?: boolean;
  isFocused: boolean;
  selectedValue?: string;
  controllerIcon?: JSX.Element;
  onControllerClick?: () => void;
  variant?: 'TROWEB' | 'LERNITO';
};

export const Selector: FC<SelectorProps> = ({
  loading = false,
  disabled = false,
  variant = 'TROWEB',
  ...props
}) => {
  const placeholderText = props.placeHolder ?? 'Select an option';

  return (
    <Container
      $error={props.hasError}
      $filled={props.isFilled}
      $focused={props.isFocused}
      $disabled={disabled}
      variant={variant}
    >
      {props.icon && <IconContainer $disabled={disabled}>{props.icon}</IconContainer>}
      {props.renderInput && props.isOpen ? (
        props.renderInput()
      ) : (
        <SelectedOption
          $hasIcon={!!props.icon}
          $filled={props.isFilled}
          $disabled={disabled}
        >
          {props.isFilled ? props.selectedValue : placeholderText}
        </SelectedOption>
      )}

      <Controller
        loading={loading}
        disabled={disabled}
        hasLabel={!!props.label}
        focused={props.isFocused}
        icon={props.controllerIcon}
        onIconClick={(e: any) => {
          if (props.onControllerClick) {
            e.stopPropagation();
            props.onControllerClick();
          }
        }}
      />
    </Container>
  );
};

interface ContainerProps {
  $filled?: boolean;
  $error?: boolean;
  $focused: boolean;
  $disabled?: boolean;
  variant?: 'TROWEB' | 'LERNITO';
}

const Container = styled.div<ContainerProps>`
  height: 24px;
  padding: 14px;
  display: flex;
  min-height: 52px;
  border-radius: 8px;
  background-color: ${({ theme, $filled, $focused, $error, $disabled }) => {
    if ($disabled) {
      return theme.palette.grey[200];
    }
    if ($error || $filled || $focused) {
      return theme.palette.grey[100];
    }
    return theme.palette.grey[200];
  }};
  border: 1px
    ${({ theme, $filled, $focused, $error, $disabled, variant }) => {
      if ($disabled) {
        return $filled ? theme.palette.grey[600] : rgba(theme.palette.grey[200]!, 0.5);
      }
      if ($error) {
        return variant === 'TROWEB' ? theme.palette.error[400] : theme.palette.error[500];
      }
      if ($focused) {
        return variant === 'TROWEB'
          ? theme.palette.secondary[400]
          : theme.palette.primary[300];
      }
      if ($filled) {
        return variant === 'TROWEB' ? theme.palette.grey[800] : theme.palette.grey[500];
      }
      return theme.palette.grey[200];
    }}
    solid;

  ${({ $focused, $disabled, theme, variant }) =>
    !$disabled &&
    $focused &&
    css`
      box-shadow: 0 0 0 3px
        ${variant === 'TROWEB'
          ? theme.palette.secondary[100]
          : theme.palette.primary[100]};
      outline: ${variant === 'LERNITO' && `3px solid ${theme.palette.primary[200]}`};
    `}

  ${({ $disabled, theme, variant }) =>
    !$disabled &&
    css`
      &:hover {
        border: 1px solid
          ${variant === 'TROWEB'
            ? theme.palette.secondary[400]
            : theme.palette.primary[300]};
        background-color: ${theme.palette.grey[100]};
      }
    `}
`;

interface IconContainerProps {
  $disabled?: boolean;
}

const IconContainer = styled.div<IconContainerProps>`
  margin-right: 6px;
  & > svg {
    width: 24px;
    height: 24px;
    fill: ${({ theme, $disabled }) =>
      $disabled ? theme.palette.grey[500] : theme.palette.grey[200]};
  }
`;

type TextProps = {
  $hasIcon?: boolean;
} & Omit<ContainerProps, '$focused'>;

const SelectedOption = styled.div<TextProps>`
  margin: auto;
  font-size: 16px;
  line-height: 20px;
  margin-right: 12px;
  font-weight: normal;
  width: calc(100% - 50px);
  margin-left: ${({ $hasIcon }) => ($hasIcon ? 6 : 10)}px;
  color: ${({ theme, $filled, $disabled }) => {
    if ($disabled) {
      return $filled ? theme.palette.grey[800] : theme.palette.grey[600];
    } else {
      return $filled ? theme.palette.grey[900] : theme.palette.grey[700];
    }
  }};
  /* This is to apply ellipsis (...) on lengthy item */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
