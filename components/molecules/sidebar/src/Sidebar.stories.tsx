import styled from 'styled-components';
import { ServiceConfig } from './Sidebar/SidebarBody';
import { StoryFC } from '$storybook/StoryFC';
import { Sidebar, SidebarProps } from './Sidebar';
import {
  Inbox,
  InboxFill,
  Journal,
  JournalFill,
  Shield,
  ShieldFill,
} from '@avidkit/icons';

export default {
  title: 'Molecules / Sidebar',
  component: Sidebar,
  parameters: {
    nextRouter: {
      pathname: '/dashboard',
    },
    background: { noPadding: true },
    figma:
      'https://www.figma.com/file/SnbTiJnEvWdckzYPTnByqL/Lernito-Exam?node-id=21032%3A126383',
  },
};

const sections: Record<string, ServiceConfig[]> = {
  Main: [
    {
      href: '/management/inbox',
      label: 'Inbox',
      icon: <Inbox />,
      iconFilled: <InboxFill />,
    },
    {
      href: '/management/policies',
      label: 'Policies',
      icon: <Shield />,
      iconFilled: <ShieldFill />,
    },
    {
      href: '/management/journals',
      label: 'Journals',
      icon: <Journal />,
      iconFilled: <JournalFill />,
    },
  ],
};

const userData = {
  fullName: 'Beni del Toro',
  image: '/defaultUser.png',
  notifications: 120,
};

export const SidebarComponent: StoryFC<SidebarProps> = (args) => (
  <SidebarContainer>
    <Sidebar {...args} />
  </SidebarContainer>
);

const SidebarContainer = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 300px;
  height: 100vh;
  transition: width 300ms cubic-bezier(0.61, 1.01, 0.66, 1.15);
`;

SidebarComponent.args = {
  logo: './Sidebar/toefl.png',
  sections,
  userData,
};
