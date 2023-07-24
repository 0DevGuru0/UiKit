import { ReactNode } from 'react';

import Link from 'next/link';
import { rgba } from 'polished';
import styled, { css } from 'styled-components';

interface SidebarButtonProps {
  icon: ReactNode;
  iconFilled?: ReactNode;
  label: string;
  href: string;
  isPrimary?: boolean;
  isActive?: boolean;
  notifications?: number;
}

export const Button = (props: SidebarButtonProps) => {
  return (
    <Container>
      <Link href={props.href}>
        <ButtonContainer title={props.label} isActive={props.isActive}>
          <Icon>{!props.isActive ? props.icon : props.iconFilled || props.icon}</Icon>
          <Text isActive={props.isActive}>{props.label}</Text>
        </ButtonContainer>
      </Link>
      {props.isActive && <SelectedIndicator />}
    </Container>
  );
};

interface ButtonProps {
  isActive?: boolean;
  numberOfNotifications?: number;
}

const Icon = styled.div`
  height: 20px;
  > svg {
    width: inherit;
    height: inherit;
    & path,
    & use {
      fill: ${({ theme }) => theme.palette.grey[300]};
    }
  }
`;

const Text = styled.div<ButtonProps>`
  line-height: 1.5;
  margin-left: 12px;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.grey[200]};
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  color: ${({ theme, isActive }) => isActive && theme.palette.primary.main};
`;

const highlighted = css`
  color: ${({ theme }) => theme.palette.primary.main};
  ${Icon} > svg path, use {
    fill: ${({ theme }) => theme.palette.primary.main} !important;
  }
`;

const Container = styled.div`
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 36px;
`;

const ButtonContainer = styled.div<ButtonProps>`
  padding: 12px;
  font-size: 16px;
  border-radius: 12px;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: left;
  line-height: 1.5;
  cursor: pointer;
  ${({ isActive }) => isActive && highlighted};
  margin-right: ${({ isActive }) => (isActive ? 18 : 24)}px;
  margin-left: 20px;
  &:hover {
    ${highlighted};
    background-color: ${({ theme }) => rgba(theme.palette.grey[600], 0.6)};
  }
`;

const SelectedIndicator = styled.div`
  margin: auto 0;
  width: 6px;
  height: 36px;
  border-radius: 12px 0 0 12px;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;
