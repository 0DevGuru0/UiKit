import { FC, ReactNode } from 'react';

import styled, { css } from 'styled-components';
import { Config } from '../../..';

import { SidebarProps } from '../../Sidebar';

type SidebarButtonProps = Pick<
  SidebarProps,
  'indicatorStyle' | 'anchorElement' | 'setConfig'
> & {
  icon: ReactNode;
  iconFilled?: ReactNode;
  label: string;
  href: string;
  withLabel?: boolean;
  isPrimary?: boolean;
  isActive?: boolean;
  notifications?: number;
  child?: Config[];
};

export const Button: FC<SidebarButtonProps> = (props) => {
  const Link = props.anchorElement;

  const onClickLinkHandler = () => {
    const { label, href } = props;
    props.setConfig?.(props.child ? props.child : [{ href, label }]);
  };

  return (
    <Container onClick={onClickLinkHandler}>
      <Link href={props.child ? '' : props.href}>
        <ButtonContainer title={props.label} isActive={props.isActive}>
          <Icon>{!props.isActive ? props.icon : props.iconFilled || props.icon}</Icon>
          {props.withLabel && <Text isActive={props.isActive}>{props.label}</Text>}
        </ButtonContainer>
      </Link>
      {props.isActive && <SelectedIndicator variant={props.indicatorStyle} />}
    </Container>
  );
};

interface ButtonProps {
  isPrimary?: boolean;
  isActive?: boolean;
  numberOfNotifications?: number;
}

const Icon = styled.div`
  height: 24px;
  > svg {
    width: inherit;
    height: inherit;
    & path,
    & use {
      fill: ${({ theme }) => theme.palette.grey[700]};
    }
  }
`;

const Text = styled.div<ButtonProps>`
  line-height: 1.5;
  margin-left: 12px;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
`;

const highlighted = css`
  color: ${({ theme }) => theme.palette.primary.main};
  ${Icon} > svg path, use {
    fill: ${({ theme }) => theme.palette.primary.main} !important;
  }
`;

const Container = styled.div`
  display: flex;
  position: relative;
  white-space: nowrap;
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
  color: ${({ theme }) => theme.palette.grey[800]};
  ${({ isActive }) => isActive && highlighted};
  margin-right: ${({ isActive }) => (isActive ? 18 : 24)}px;
  &:hover {
    ${highlighted}
    background-color: ${({ theme }) => theme.palette.grey[300]};
  }
`;

interface SelectedIndicatorProps {
  variant?: 'primary' | 'secondary';
}

const primaryVariant = css`
  width: 6px;
  height: 36px;
  border-radius: 12px 0 0 12px;
`;

const circleMeasure = 16;

const secondaryVariant = css`
  width: ${circleMeasure}px;
  height: ${circleMeasure}px;
  border-radius: 50%;
  position: absolute;
  left: -32px;
  top: 16px;
  box-shadow: 0 0 10px 5px rgba(67, 98, 205, 0.2);
`;

const SelectedIndicator = styled.div<SelectedIndicatorProps>`
  margin: auto 0;
  background-color: ${({ theme }) => theme.palette.primary.main};
  ${({ variant }) => (variant === 'primary' ? primaryVariant : secondaryVariant)};
`;
