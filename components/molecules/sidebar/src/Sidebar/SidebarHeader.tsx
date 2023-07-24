import React, { ReactNode } from 'react';

import styled from 'styled-components';

import { Waffle } from '@avidkit/icons';

interface HeaderProps {
  logo: string | ReactNode;
  isShowWaffle?: boolean;
  onWaffleClick: () => void;
}

export const SidebarHeader = ({
  onWaffleClick,
  isShowWaffle = true,
  logo,
}: HeaderProps) => (
  <HeaderWrapper>
    {isShowWaffle && <WaffleIcon onClick={onWaffleClick} />}
    <LogoWrapper>
      {React.isValidElement(logo) ? logo : <img src={logo as string} />}
    </LogoWrapper>
  </HeaderWrapper>
);

const HeaderWrapper = styled.div`
  height: 36px;
  display: flex;
  margin-bottom: 57px;
  padding-left: 28px;
  padding-top: 28px;
`;

const LogoWrapper = styled.div`
  margin-left: 10px;
  & svg {
    width: 111px;
    height: 36px;
  }
`;

const WaffleIcon = styled(Waffle)`
  width: 24px;
  cursor: pointer;
  height: 24px;
  path,
  use {
    fill: ${({ theme }) => theme.palette.grey[200]};
    &:hover {
      fill: ${({ theme }) => theme.palette.secondary.main};
    }
  }
`;
