import { CSSProperties, FC, ReactElement, ReactNode } from 'react';

import styled from 'styled-components';
import { Config } from '..';

import { SidebarBody } from './Sidebar/SidebarBody';
import { SidebarFooter, Props as FooterProps } from './Sidebar/SidebarFooter';
import { DefaultHeader } from './Sidebar/SidebarHeader/DefaultHeader';
import { ProfileHeader } from './Sidebar/SidebarHeader/ProfileHeader';

export interface ButtonConfig {
  group?: string;
  icon: ReactNode;
  iconFilled?: ReactNode;
  label: string;
  href: string;
}

interface IDefaultHeader {
  kind: 'Default';
  openSidebarLogo?: ReactElement;
  closeSidebarLogo?: ReactElement;
}

interface IProfileHeader {
  kind: 'Profile';
  picture: ReactNode;
  title: string;
  subTitle: string;
}

export type HeaderConfig = IProfileHeader | IDefaultHeader;

export type UserSummary = Omit<UserData, 'notifications'>;

export interface ServiceConfig {
  group?: string;
  iconFilled?: ReactNode;
  href: string;
  label: string;
  icon: ReactNode;
  child?: Config[];
  roles?: any[];
}
export interface FooterConfig {
  route: Omit<ServiceConfig, 'icon'>;
}

interface Sections {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Main: ServiceConfig[];
  [sectionName: string]: ServiceConfig[];
}

export interface UserData {
  image: string;
  fullName: string;
  notifications?: number;
}

export interface SidebarProps {
  userData?: UserData;
  sections?: Sections;
  services?: ServiceConfig[];
  header: HeaderConfig;
  footer: Omit<FooterProps, 'isOpen'>;
  disableCollapse?: boolean;
  isOpen: boolean;
  isDialogShown: boolean;
  currentPage: string;
  onCloseClick?: () => void;
  onWaffleClick?: () => void;
  sidebarStyle?: CSSProperties;
  showWaffleButton?: boolean;
  separatorColor?: string;
  separatorTextColor?: string;
  indicatorStyle?: 'primary' | 'secondary';
  anchorElement: FC<any>;
  setConfig?: (newConfig: Config[]) => void;
}

type Props = HeaderConfig &
  Pick<IDefaultHeader, 'openSidebarLogo' | 'closeSidebarLogo'> & {
    isOpen: boolean;
    isDialogShown: boolean;
    currentService: string;
    services?: ServiceConfig[];
    isShowWaffle?: boolean;
    onClose?: () => void;
    onWaffleClick?: () => void;
    className?: string;
  };

export const Sidebar = (props: SidebarProps) => {
  const user: UserSummary = {
    fullName: props?.userData?.fullName ?? '',
    image: props?.userData?.image ?? '',
  };

  const Header = (
    props.header.kind === 'Profile' ? ProfileHeader : DefaultHeader
  ) as FC<Props>;

  return (
    <Container style={props.sidebarStyle} isOpen={props.isOpen}>
      <Header
        {...props.header}
        isOpen={props.isOpen}
        services={props.services}
        isDialogShown={props.isDialogShown}
        currentService={props.currentPage}
        onClose={props.onCloseClick}
        onWaffleClick={props.onWaffleClick}
        isShowWaffle={props.showWaffleButton ?? false}
      />
      <ExtendedSidebarBody
        anchorElement={props.anchorElement}
        sections={props.sections ?? {}}
        isOpen={props.isOpen}
        currentPage={props.currentPage}
        notifications={props?.userData?.notifications ?? 0}
        indicatorStyle={props.indicatorStyle}
        setConfig={props.setConfig}
      />
      <SidebarFooter {...props.footer} isOpen={props.isOpen} userData={user} />
    </Container>
  );
};

const sidebarPadding = 24;

interface ContainerProps {
  isOpen: boolean;
}

const Container = styled.div<ContainerProps>`
  background-color: ${({ theme }) => theme.palette.grey[200]};
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${sidebarPadding}px 0 0 ${sidebarPadding}px;
  position: relative;
  z-index: 1001;
  ${({ isOpen }) => (isOpen ? 'box-shadow: 1px 0 9px #e3e3e3' : '')};
`;

const ExtendedSidebarBody = styled(SidebarBody)`
  && {
    padding-top: 48px;
    flex: 1;
  }
`;
