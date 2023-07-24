import { ReactNode } from 'react';
import { Footer, FooterProps } from '@avidkit/footer';
import { Header, HeaderProps } from '@avidkit/header';
import styled from 'styled-components';

import { Sidebar, SidebarProps } from './DashboardLayout/Sidebar';

export interface Config {
  href: string;
  label: string;
}

export interface DashboardLayoutProps {
  children?: ReactNode;
  footer?: FooterProps;
  sidebar: SidebarProps;
  header: HeaderProps;
}

export const DashboardLayout = (props: DashboardLayoutProps) => {
  return (
    <Container>
      <SidebarContainer isSidebarOpen={props.sidebar.isOpen}>
        <Sidebar {...props.sidebar} />
      </SidebarContainer>
      <BodyContainer isSidebarOpen={props.sidebar.isOpen}>
        <Header {...props.header} config={props.header.config} />
        <Body>
          {props.children}
          {props.footer && <Footer {...props.footer} />}
        </Body>
      </BodyContainer>
    </Container>
  );
};

interface ContainerProps {
  isSidebarOpen: boolean;
}

const SidebarContainer = styled.div<ContainerProps>`
  display: inline-block;
  vertical-align: top;
  width: ${({ isSidebarOpen }) => (isSidebarOpen ? '348px' : '96px')};
  height: 100vh;
  transition: width 300ms cubic-bezier(0.61, 1.01, 0.66, 1.15);
`;

const Container = styled.div`
  display: flex;
`;

interface BodyContainerProps {
  isSidebarOpen: boolean;
}

const BodyContainer = styled.div<BodyContainerProps>`
  position: relative;
  display: inline-block;
  width: ${({ isSidebarOpen }) =>
    isSidebarOpen ? 'calc(100% - 348px)' : 'calc(100% - 96px)'};
`;

const Body = styled.div`
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 71px);
  & > div:nth-last-child(2) {
    flex: 1;
  }
`;
