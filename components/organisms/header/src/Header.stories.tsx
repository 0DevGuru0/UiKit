/* eslint-disable no-console */

import { StoryFC } from '$storybook/StoryFC';

import { Bookmark } from '@avidkit/icons';
import { Header, HeaderProps } from './Header';

export default {
  title: 'Organisms / Header',
  component: Header,
  parameters: { background: { noPadding: false } },
};

export const UserHeader: StoryFC<HeaderProps> = (args) => <Header {...args} />;

UserHeader.args = {
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
};

export const WithCustomMenu = UserHeader.bind({});
WithCustomMenu.args = {
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
  customProfileMenu: <div>Samlpe</div>,
};
