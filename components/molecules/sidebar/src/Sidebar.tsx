import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { hideScrollBar } from './Sidebar/hideScrollBar';
import { SidebarBody, ServiceConfig } from './Sidebar/SidebarBody';
import { SidebarHeader } from './Sidebar/SidebarHeader';
import styled from 'styled-components';

interface UserData {
  image: string;
  fullName: string;
  notifications?: number;
}

export interface SidebarProps {
  userData: UserData;
  sections: Record<string, ServiceConfig[]>;
  onWaffleClick: () => void;
  logo: ReactNode;
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const { userData, sections } = props;
  const router = useRouter();

  return (
    <Container className={props.className}>
      <ExtendedSidebarHeader {...props} />
      <ExtendedSidebarBody
        sections={sections}
        currentPage={router.pathname}
        notifications={userData.notifications}
      />
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.grey[800]};
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ExtendedSidebarBody = styled(SidebarBody)`
  && {
    flex: 1;
    overflow: hidden;
    overflow-y: auto;
    ${hideScrollBar}
  }
`;

const ExtendedSidebarHeader = styled(SidebarHeader)`
  && {
    padding-bottom: 36px;
  }
`;
