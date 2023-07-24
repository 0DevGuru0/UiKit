import { FC, ReactNode } from 'react';

import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import { Logout } from '@avidkit/icons';

export interface OptionItem {
  icon: any;
  label: string;
  currentValue?: string;
  onClick: () => void;
}

export interface UserActionsProps {
  username: string;
  actions?: OptionItem[];
  isOpen: boolean;
  logoutLabel?: string;
  onClose: () => void;
  onLogOut: () => void;
  customProfileMenu?: ReactNode;
}

export const UserActions: FC<UserActionsProps> = (props) => {
  const {
    isOpen,
    username,
    actions,
    logoutLabel = 'Logout',
    onLogOut: onLogout,
    onClose,
    customProfileMenu,
  } = props;

  const handleItemClick = (cb: () => void) => () => {
    onClose();
    cb();
  };

  return (
    <Container isOpen={isOpen} isCustom={customProfileMenu ? true : false}>
      {customProfileMenu ? (
        customProfileMenu
      ) : (
        <>
          <Header>
            <Identifier>{username}</Identifier>
          </Header>
          {actions?.map((action, key) => (
            <ActionRow key={key} onClick={handleItemClick(action.onClick)}>
              {action.icon ? <action.icon /> : ''}
              <ActionLabel>{action.label}</ActionLabel>
              {action.currentValue && <ActionValue>{action.currentValue}</ActionValue>}
            </ActionRow>
          ))}
          <Separator />
          <LogoutRow onClick={handleItemClick(onLogout)}>
            <Logout />
            <ActionLabel>{logoutLabel}</ActionLabel>
          </LogoutRow>
        </>
      )}
    </Container>
  );
};

const Container = styled.div<{
  isOpen: boolean;
  isCustom: boolean;
}>`
  position: absolute;
  right: 0;
  top: 54px;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  z-index: 10;
  ${({ isCustom }) =>
    !isCustom &&
    css`
      float: right;
      min-width: 226px;
      border-radius: 8px;
      flex-direction: column;
      box-shadow: 0 6px 20px 0 rgba(193, 205, 221, 0.5);
      background-color: ${({ theme }) => theme.palette.grey[100]};
    `}
`;

const Header = styled.div`
  border-radius: 8px 8px 0 0;
  padding: 12px;
  background-color: ${({ theme }) => theme.palette.grey[100]};
  cursor: default;
`;

const Identifier = styled.span`
  display: block;
  font-size: 14px;
  line-height: 18px;
  margin-top: 3px;
`;

const ActionRow = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 6px;
  padding: 6px;
  border-radius: 4px;
  cursor: pointer;
  & > svg {
    width: 20px;
    height: 20px;
    path,
    use {
      fill: ${({ theme }) => theme.palette.grey[700]};
    }
  }
  &:hover {
    background-color: ${({ theme }) => rgba(theme.palette.grey[700], 0.4)};
  }
`;

const ActionLabel = styled.div`
  padding: 0 6px;
  flex-grow: 1;
  color: ${({ theme }) => theme.palette.grey[800]};
  font-weight: 400;
  font-size: 14px;
  margin-left: 7px;
`;

const ActionValue = styled.div`
  font-size: 14px;
  font-weight: 600;
  padding-right: 6px;
  color: ${({ theme }) => theme.palette.grey[800]};
`;

const Separator = styled.div`
  height: 1px;
  margin: 0 12px 0 12px;
  background-color: ${({ theme }) => theme.palette.grey[700]};
`;

const LogoutRow = styled(ActionRow)`
  ${ActionLabel} {
    color: ${({ theme }) => theme.palette.error.main};
  }
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.palette.error.light};
  }
  > svg {
    width: 20px;
    height: 20px;
    transform: rotate(180deg);
  }
  > svg path,
  > svg use {
    fill: ${({ theme }) => theme.palette.error.main};
  }
`;
