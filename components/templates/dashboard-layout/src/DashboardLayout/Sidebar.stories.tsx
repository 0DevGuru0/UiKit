import { Sidebar, SidebarProps } from './Sidebar';
import { StoryFC } from '$storybook/StoryFC';
import { sidebarsConfig } from './sidebar.config';

export default {
  title: 'Templates / DashboardLayout / Sidebar',
  component: Sidebar,
  parameters: {
    background: { noPadding: true },
  },
};

export const SidebarCmp: StoryFC<SidebarProps> = Sidebar;

SidebarCmp.args = {
  ...(sidebarsConfig as any)[0],
};
