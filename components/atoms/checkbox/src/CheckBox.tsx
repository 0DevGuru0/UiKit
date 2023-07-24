import { FC, JSXElementConstructor } from 'react';
import styled, { keyframes } from 'styled-components';

export interface CheckBoxProps {
  id: string;
  label?: string;
  isChecked?: boolean;
  disabled?: boolean;
  className?: string;
  isHovered?: boolean;
  onChange?: (args: any) => void;
  checkComponent?: JSXElementConstructor<any>;
}

export const CheckBox: FC<CheckBoxProps> = (props) => {
  const {
    id,
    label,
    disabled,
    isChecked = false,
    isHovered,
    className,
    onChange,
    checkComponent: CheckComponent,
  } = props;

  return (
    <Container disabled={disabled} onClick={!disabled ? onChange : undefined}>
      {CheckComponent ? (
        <CheckComponent
          isChecked={isChecked}
          disabled={disabled}
          isHovered={isHovered}
          className={className}
        />
      ) : (
        <StyledCheckBox
          isChecked={isChecked}
          disabled={disabled}
          isHovered={isHovered}
          className={className}
        >
          {isChecked && <CheckedElement />}
        </StyledCheckBox>
      )}
      {label && (
        <Label htmlFor={id} isChecked={isChecked}>
          {label}
        </Label>
      )}
    </Container>
  );
};

interface StyledCheckBoxProps {
  disabled?: boolean;
  isChecked: boolean;
  isHovered?: boolean;
}

interface SignsProps {
  disabled?: boolean;
  isChecked?: boolean;
}

const StyledCheckBox = styled.div<StyledCheckBoxProps>`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.palette.grey[500] : theme.palette.grey[100]};
  cursor: ${({ disabled }) => (disabled ? 'unset' : 'pointer')};
  width: 18px;
  height: 18px;
  border-radius: 3px;
  position: relative;
  overflow: hidden;
  user-select: none;

  border: 2px solid
    ${({ theme, isChecked, isHovered, disabled }) =>
      disabled
        ? theme.palette.grey[500]
        : isChecked || isHovered
        ? theme.palette.primary.main
        : theme.palette.grey[700]};
`;

const Label = styled.label<SignsProps>`
  font-size: 16px;
  line-height: 18px;
  cursor: pointer;
  margin-left: 15px;
  position: relative;
  white-space: nowrap;
  display: inline-block;
  color: ${({ theme, isChecked, disabled }) =>
    disabled
      ? theme.palette.grey[700]
      : isChecked
      ? theme.palette.grey[900]
      : theme.palette.grey[800]};
  font-weight: ${({ isChecked }) => (isChecked ? 600 : 'normal')};
`;

const Container = styled.div<{ disabled?: boolean }>`
  display: inline-flex;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    ${StyledCheckBox} {
      border-color: ${({ theme, disabled }) => !disabled && theme.palette.primary.main};
    }

    ${Label} {
      color: ${({ theme, disabled }) => !disabled && theme.palette.grey[600]};
    }
  }
`;

const Transition = keyframes`
 from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const CheckedElement = styled.div<SignsProps>`
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-duration: 0.3s;
  animation-name: ${Transition};
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-color: ${({ theme, disabled }) => !disabled && theme.palette.primary.main};
`;
