import { FC, useState, ReactNode } from 'react';

import { Button } from '@avidkit/button';
import { useClickOutside } from '@avidkit/hooks';
import { Search as SearchIcon } from '@avidkit/icons';
import { Search, SearchProps } from '@avidkit/search';
import styled from 'styled-components';

import { NotificationProps, Notification } from './Header/Notification';
import { Routes } from './Header/Routes';
import { User, UserProps } from './Header/User';
import { OptionItem } from './Header/User/UserActions';

export interface ChildItem {
  href: string;
  label: string;
}
interface Config {
  href: string;
  label: string;
}

export interface HeaderProps {
  notifyStatus?: NotificationProps;
  search?: SearchProps;
  userInfo?: UserProps;
  config?: Config[];
  anchorElement?: FC<any>;
  logoutLabel?: string;
  onLogIn?: () => void;
  actions?: OptionItem[];
  customProfileMenu?: ReactNode;
}

export const Header = ({
  notifyStatus,
  search,
  userInfo,
  logoutLabel,
  onLogIn,
  config,
  anchorElement,
  actions,
  customProfileMenu,
}: HeaderProps) => {
  const [displaySearchBox, setDisplaySearchBox] = useState(false);
  const ref = useClickOutside(() => setDisplaySearchBox(false));

  const showLoginSection = !!onLogIn || !!userInfo;
  const showSeparator = showLoginSection && !!notifyStatus;

  return (
    <MainContainer>
      <Div>
        {config ? (
          <Routes routes={config} anchorElement={anchorElement} />
        ) : (
          <SearchContainer>{search && <Search {...search} />}</SearchContainer>
        )}
        <FlexContainer>
          {config && search && (
            <SearchContainer ref={ref}>
              {displaySearchBox ? (
                <Search {...search} />
              ) : (
                <SearchIcon onClick={() => setDisplaySearchBox(true)} />
              )}
            </SearchContainer>
          )}
          {notifyStatus && <Notification {...notifyStatus} />}
          {showSeparator && <Separator />}
          {showLoginSection &&
            (userInfo ? (
              <User
                {...userInfo}
                logoutLabel={logoutLabel}
                actions={actions}
                customProfileMenu={customProfileMenu}
              />
            ) : (
              <Button title="LogIn" onClick={onLogIn} />
            ))}
        </FlexContainer>
      </Div>
    </MainContainer>
  );
};

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Separator = styled.div`
  height: 24px;
  margin: 12px 18px 12px 24px;
  border: 1px solid ${({ theme }) => theme.palette.grey[700]};
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 36px;
  margin: 0 auto;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.grey[100]};
`;

const MainContainer = styled.div`
  height: 71px;
  border-bottom: 1px solid #e0e0e0;
`;

const SearchContainer = styled.div`
  width: 250px;
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;
  svg {
    cursor: pointer;
    width: 20px;

    height: 20px;
    path {
      fill: #8a8b8c;
    }
  }
`;
