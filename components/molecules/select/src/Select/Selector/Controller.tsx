import { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { ChevronDown } from '@avidkit/icons';
import { CircleLoading } from '@avidkit/loading';

interface ControllerProps {
  focused: boolean;
  loading: boolean;
  hasLabel: boolean;
  disabled: boolean;
  icon?: JSX.Element;
  onIconClick?: (e: any) => void;
  variant?: 'LERNITO' | 'TROWEB';
}

export const Controller: FC<ControllerProps> = ({
  focused,
  loading,
  disabled,
  hasLabel,
  icon,
  variant,
  onIconClick,
}) => {
  return (
    <CircleLoading loading={loading} customLoadingElement={<Loader />}>
      {icon ? (
        <CustomIconContainer
          $focused={focused}
          $disabled={disabled}
          $hasLabel={hasLabel}
          onClick={onIconClick}
          $variant={variant}
        >
          {icon}
        </CustomIconContainer>
      ) : (
        <ArrowIcon
          $focused={focused}
          $disabled={disabled}
          $hasLabel={hasLabel}
          onClick={onIconClick}
          $variant={variant}
        />
      )}
    </CircleLoading>
  );
};

const Transition = keyframes`
 from {
   transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  width: 18px;
  height: 18px;
  margin: 0 auto;
  border-radius: 50%;
  animation-duration: 2s;
  animation-name: ${Transition};
  animation-iteration-count: infinite;
  border-top: 3px solid ${({ theme }) => theme.palette.grey[600]};
  border: 3px solid ${({ theme }) => theme.palette.secondary.main};
`;

interface IconProps {
  $focused: boolean;
  $disabled: boolean;
  $hasLabel: boolean;
  $variant?: 'LERNITO' | 'TROWEB';
}
const CustomIconContainer = styled.div<IconProps>`
  cursor: pointer;
  right: 12px;
  width: 36px;
  height: 36px;
  margin-right: 4px;
  position: ${({ $variant }) => ($variant === 'LERNITO' ? 'unset' : 'absolute')};
  transition-duration: 300ms;
  top: ${({ $hasLabel }) => ($hasLabel ? 50 : 18)}px;
  path,
  use {
    fill: ${({ theme, $disabled }) =>
      $disabled ? theme.palette.grey[400] : theme.palette.grey[300]};
  }
`;

export const ArrowIcon = styled(ChevronDown)<IconProps>`
  right: 12px;
  width: ${({ $variant }) => ($variant === 'LERNITO' ? '24px' : '20px')};
  height: ${({ $variant }) => ($variant === 'LERNITO' ? '24px' : '20px')};
  margin: ${({ $variant }) => ($variant === 'LERNITO' ? '12px' : '0px 4px 0px 0px')};
  position: ${({ $variant }) => ($variant === 'LERNITO' ? 'unset' : 'absolute')};
  transition-duration: 300ms;
  top: ${({ $hasLabel }) => ($hasLabel ? 50 : 18)}px;
  transform: rotate(${({ $focused }) => ($focused ? 180 : 0)}deg);
  path,
  use {
    fill: ${({ theme }) => theme.palette.grey[500]};
    opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  }
  flex-shrink: 0;
  cursor: pointer;
`;
