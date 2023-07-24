import { FC, useState, ReactNode, useCallback } from 'react';
import styled from 'styled-components';

import { ChevronDown as ArrowSVG } from '@avidkit/icons';
import { OptionItem, UserActions } from './User/UserActions';

import { useClickOutside } from '@avidkit/hooks';

export interface UserProps {
  image: any;
  name: string;
  userName: string;
  actions?: OptionItem[];
  logoutLabel?: string;
  onLogOut: () => void;
  customProfileMenu?: ReactNode;
}

export const User: FC<UserProps> = ({
  image,
  name,
  userName,
  logoutLabel,
  onLogOut,
  actions,
  customProfileMenu,
}) => {
  const [actionStatus, setActionStatus] = useState<boolean>(false);
  const closeHandler = useCallback(() => setActionStatus(false), []);
  const containerRef = useClickOutside(closeHandler);

  return (
    <MainContainer ref={containerRef}>
      <ResearcherContainer onClick={() => setActionStatus(!actionStatus)}>
        <Image src={image ?? '/defaultUser.png'} />
        <Name>{name}</Name>
        <ChevronSVG $rotated={actionStatus} />
      </ResearcherContainer>
      <UserActions
        actions={actions}
        username={userName}
        isOpen={actionStatus}
        onClose={closeHandler}
        logoutLabel={logoutLabel}
        onLogOut={onLogOut}
        customProfileMenu={customProfileMenu}
      />
    </MainContainer>
  );
};

const ChevronSVG = styled(ArrowSVG)<{
  $rotated: boolean;
}>`
  width: 18px;
  height: 18px;
  transition-duration: 300ms;
  transform: rotate(${({ $rotated }) => ($rotated ? 180 : 0)}deg);
  path,
  use {
    fill: ${({ theme }) => theme.palette.grey[700]};
    font-size: 22px;
  }
`;

const ResearcherContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 6px;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.grey[300]};
    ${ChevronSVG} path {
      fill: ${({ theme }) => theme.palette.grey[700]};
    }
  }
`;

const MainContainer = styled.div`
  display: inline-flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.grey[100]};
`;

const Name = styled.span`
  display: inline-block;
  width: max-content;
  color: ${({ theme }) => theme.palette.grey[900]};
  font-size: 16px;
  font-weight: 400;
  padding: 0 6px 0 12px;
`;

const Image = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 8px;
`;
