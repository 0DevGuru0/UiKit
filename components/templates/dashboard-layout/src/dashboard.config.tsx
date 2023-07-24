/* eslint-disable no-console */
import { FooterProps } from '@avidkit/footer';
import { HeaderProps } from '@avidkit/header';
import {
  Facebook,
  FacebookFill,
  Instagram,
  InstagramFill,
  Linkedin,
  LinkedinFill,
  Twitter,
  TwitterFill,
  Bookmark,
} from '@avidkit/icons';

import { DashboardLayoutProps } from './DashboardLayout';
import { SidebarProps } from './DashboardLayout/Sidebar';
import { sidebarsConfig as sidebarConfig, links } from './DashboardLayout/sidebar.config';

const footer: FooterProps = {
  narrowPadding: true,
  footerConfig: {
    poweredBy: 'Powered by Lernito',
    academy: 'Lernito Academy',
    copyRightLink: 'https://notionwave.ca/',
    textLinks: [
      {
        href: '/faq',
        label: 'FAQ',
      },
      { href: '/help', label: 'Help Center' },
      { href: 'https://notionwave.ca/privacy-policy-2/', label: 'Privacy' },
      {
        label: 'Terms',
        onClick: (e) => {
          e.preventDefault();
          alert('hello lernito');
        },
      },
    ],
    iconLinks: [
      {
        label: 'Facebook',
        onClick: (e) => {
          e.preventDefault();
          alert('Facebook-icon');
        },
        icon: {
          default: <Facebook />,
          hover: <FacebookFill />,
        },
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/notionwave?lang=en',
        icon: {
          default: <Twitter />,
          hover: <TwitterFill />,
        },
      },
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/notionwave',
        icon: {
          default: <Instagram />,
          hover: <InstagramFill />,
        },
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/notionwave/',
        icon: {
          default: <Linkedin />,
          hover: <LinkedinFill />,
        },
      },
    ],
  },
};

const header: HeaderProps = {
  onLogIn: () => console.log('onLogIn'),
  notifyStatus: {
    status: 'new',
    onNotificationClick: () => console.log('onNotificationClick'),
  },
  search: {
    onChange: (val: any) => console.log('searchOnChange', val),
  },
  userInfo: {
    name: 'John Smith',
    onLogOut: () => console.log('onLogOut'),
    userName: 'JohnSmith',
    image: './defaultImage.png',
  },
  actions: [
    {
      icon: Bookmark,
      label: 'Go to Application',
      onClick: () => console.log('on Click go to application'),
    },
  ],
  config: links,
};

export const sidebar: SidebarProps = sidebarConfig[0];

export const dashboardLayoutConfig: DashboardLayoutProps = {
  footer,
  header,
  sidebar,
};
