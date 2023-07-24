import { FC } from 'react';
import styled from 'styled-components';

export interface InputLabelProps {
  label?: string;
  isFilled?: boolean;
  disabled?: boolean;
  isOptional?: boolean;
  labelId?: string;
  variant?: 'LERNITO' | 'TROWEB';
}

export const InputLabel: FC<InputLabelProps> = ({
  label,
  isFilled,
  disabled = false,
  isOptional = false,
  labelId,
  variant,
}) => {
  return (
    <LabelContainer id={labelId}>
      {label && (
        <Label $isFilled={isFilled} $disabled={disabled} $variant={variant}>
          {label}
        </Label>
      )}
      {isOptional && <Optional>(optional)</Optional>}
    </LabelContainer>
  );
};

const LabelContainer = styled.div`
  display: flex;
  width: max-content;
`;

const Optional = styled.div`
  font-size: 12px;
  margin-left: 3px;
  line-height: 18px;
  color: ${({ theme }) => theme.palette.grey[300]};
`;

interface LabelProps {
  $isFilled?: boolean;
  $disabled: boolean;
  $variant?: 'LERNITO' | 'TROWEB';
}

const Label = styled.div<LabelProps>`
  font-size: ${({ $variant }) => ($variant === 'LERNITO' ? '14px' : '16px')};
  font-weight: 600;
  margin-bottom: ${({ $variant }) => ($variant === 'LERNITO' ? '6px' : '12px')};
  color: ${({ theme }) => {
    return theme.palette.grey[700];
  }};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
`;
