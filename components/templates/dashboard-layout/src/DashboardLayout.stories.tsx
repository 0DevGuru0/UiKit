import { useState } from 'react';
import { DashboardLayout } from './DashboardLayout';
import { dashboardLayoutConfig, sidebar } from './dashboard.config';
import { StoryFC } from '$storybook/StoryFC';
import { mainSection } from './DashboardLayout/sidebar.config';
import { DashboardLayoutProps } from '.';

export default {
  title: 'Templates / DashboardLayout',
  component: DashboardLayout,
  parameters: {
    background: { noPadding: true },
    nextRouter: {
      pathname: '/admin',
    },
  },
};

const duplicateSection = mainSection.slice();

const sidebarSectionConfig = {
  Main: [duplicateSection[0]],
  'First Group': [...duplicateSection.splice(1, 2)],
  'Second Group': [...duplicateSection.splice(2, 4)],
};

export const DashboardLayoutCmp: StoryFC<DashboardLayoutProps> = (args) => {
  const [open, setOpen] = useState(true);

  const onToggle = () => {
    setOpen((v) => !v);
  };

  return (
    <DashboardLayout
      {...args}
      sidebar={{
        ...sidebar,
        ...args?.sidebar,
        isOpen: open,
        footer: {
          ...sidebar.footer,
          ...args?.sidebar?.footer,
          onToggle,
        },
      }}
    >
      <h3 style={{ flex: 1 }} />
    </DashboardLayout>
  );
};

DashboardLayoutCmp.args = dashboardLayoutConfig;

export const Secondary = DashboardLayoutCmp.bind({});

Secondary.args = {
  ...dashboardLayoutConfig,
  sidebar: {
    ...sidebar,
    sections: {
      ...sidebarSectionConfig,
    },
    indicatorStyle: 'primary',
    isOpen: true,
    footer: {
      ...sidebar.footer,
      label: undefined,
      hasFooterDivider: true,
      links: [
        {
          label: 'First',
        },
        {
          label: 'Second',
        },
      ],
    },
  },
};
