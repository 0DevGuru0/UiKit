import React, { useState, useRef, useEffect, ElementType } from 'react';
import styled, { css } from 'styled-components';
import { useClickOutside } from '@avidkit/hooks';

type IStartAdornment = (
  hover: boolean,
  typingMode: boolean,
  isFilledMode: boolean,
) => JSX.Element;
export interface InputProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'onChange' | 'ref'
  > {
  value: string;
  errorText?: string;
  hasError?: boolean;
  placeholder?: string;
  label?: string;
  /*
   * Will be useful only when the `renderInput` set to `input`
   */

  rows?: number;
  /*
   * default: input
   */
  renderInput?: 'input' | 'textarea';
  disabled?: boolean;
  onChange: (val: string) => void;
  startAdornment?: JSX.Element | IStartAdornment;
  className?: string;
  debouncedTime?: number;
  // TODO: It's awful to vary component based on our specific projects. It makes the component specific instead of general
  variant?: 'TROWEB' | 'LERNITO';
}

export const Input = ({
  debouncedTime = 300,
  disabled = false,
  variant = 'TROWEB',
  renderInput = 'input',
  ...props
}: InputProps) => {
  const [tempValue, setTempValue] = useState<string>(props.value);
  const [hover, setHover] = useState(false);
  const [typingMode, setTypingMode] = useState(false);
  const disableTypingMode = () => setTypingMode(false);
  const TextField: ElementType = renderInput === 'input' ? TextInput : TextArea;

  useEffect(() => {
    setTempValue(props.value);
  }, [props.value]);

  useEffect(() => {
    const timeChangeEmitter = setTimeout(() => props.onChange(tempValue), debouncedTime);
    return () => clearTimeout(timeChangeEmitter);
  }, [tempValue]);

  const inputRef = useRef<HTMLInputElement>();
  const onInputContainerClicked = () => inputRef?.current?.focus();

  const containerRef = useClickOutside(disableTypingMode);

  const isFilledMode = props.value !== '' && !typingMode;
  useEffect(() => {
    if (!isFilledMode && props.value === '') {
      containerRef.current?.blur();
      inputRef.current?.blur();
      disableTypingMode();
    }
  }, [isFilledMode]);

  const StartAdornment = props.startAdornment
    ? React.isValidElement(props.startAdornment)
      ? props.startAdornment
      : (props.startAdornment as IStartAdornment)(hover, typingMode, isFilledMode)
    : '';

  return (
    <div className={props.className}>
      {!!props.label && <Label>{props.label}</Label>}
      <InputContainer
        ref={containerRef}
        disabled={disabled}
        hasContent={!!props.value}
        onClick={onInputContainerClicked}
        onMouseMove={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        isFilledMode={isFilledMode}
        isTypingMode={typingMode}
        hasError={props.hasError || !!props.errorText}
        variant={variant}
      >
        {StartAdornment}
        <TextField
          {...props}
          disabled={disabled}
          onFocus={() => setTypingMode(true)}
          onBlur={() => {
            setTypingMode(false);
          }}
          ref={inputRef}
          placeholder={props.placeholder}
          value={tempValue}
          onChange={(e: any) => setTempValue(e.target.value)}
        />
      </InputContainer>
      {props.errorText && <Error>{props.errorText}</Error>}
    </div>
  );
};

interface InputContainerProps {
  hasError: boolean;
  hasContent: boolean;
  isFilledMode: boolean;
  isTypingMode: boolean;
  disabled: boolean;
  variant?: 'TROWEB' | 'LERNITO';
}

const InputContainer = styled.div<InputContainerProps>`
  background-color: ${({ theme }) => theme.palette.grey[200]};
  border: 1px solid
    ${({ theme, hasContent, hasError, variant }) => {
      if (hasError) {
        return variant === 'TROWEB' ? theme.palette.error[400] : theme.palette.error[500];
      }

      if (hasContent) {
        return variant === 'TROWEB' ? theme.palette.grey[800] : theme.palette.grey[500];
      }

      return theme.palette.grey[100];
    }};
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
  padding: 14px;
  align-items: center;
  display: flex;
  position: relative;

  & > svg {
    margin-right: 6px;
  }

  & > svg path {
    width: 20px;
    height: 20px;
    stroke: ${({ theme }) => theme.palette.grey[400]};
    fill: ${({ theme }) => theme.palette.grey[400]};
  }
  ${({ disabled, theme, variant }) =>
    !disabled &&
    css`
      &:hover {
        cursor: pointer;
        background-color: ${theme.palette.grey[100]};
        border: 1px solid
          ${variant === 'TROWEB'
            ? theme.palette.secondary[400]
            : theme.palette.primary[300]};
      }
    `}

  ${({ isTypingMode, theme, hasError, variant }) =>
    isTypingMode &&
    css`
      box-shadow: 0 0 0 3px
        ${variant === 'TROWEB'
          ? theme.palette.secondary[100]
          : theme.palette.primary[100]};
      background-color: ${theme.palette.grey[100]};
      border: 1px solid
        ${() => {
          if (hasError) {
            return variant === 'TROWEB'
              ? theme.palette.error[400]
              : theme.palette.error[500];
          } else {
            return variant === 'TROWEB'
              ? theme.palette.secondary[500]
              : theme.palette.primary[300];
          }
        }};
    `}

  ${({ isFilledMode, disabled, theme, hasError, variant }) =>
    isFilledMode &&
    !disabled &&
    css`
      border: 1px solid
        ${() => {
          if (hasError) {
            return variant === 'TROWEB'
              ? theme.palette.error[400]
              : theme.palette.error[500];
          } else {
            return variant === 'TROWEB'
              ? theme.palette.grey[800]
              : theme.palette.grey[500];
          }
        }};
    `}

  ${({ disabled, theme }) =>
    disabled &&
    css`
      border: 1px solid ${theme.palette.grey[400]};
      background-color: ${theme.palette.grey[200]};
    `}
`;
const TextFieldStyle = css`
  flex-grow: 1;
  background-color: transparent;
  border: none;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.palette.grey[700]};
  }
  &:disabled {
    color: ${({ theme }) => theme.palette.grey[500]};
  }
`;

const TextInput = styled.input`
  ${TextFieldStyle}
`;
const TextArea = styled.textarea`
  ${TextFieldStyle}
`;

const Error = styled.span`
  margin-top: 12px;
  display: inline-block;
  color: ${({ theme }) => theme.palette.error.main};
`;

const Label = styled.div`
  color: ${({ theme }) => theme.palette.grey[800]};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
`;
