import { StoryFC } from '$storybook/StoryFC';
import styled from 'styled-components';
import { Breadcrumb, BreadcrumbProps } from './Breadcrumb';
import { ItemRendererProps } from './Breadcrumb/Items';

export default {
  title: 'Molecules / Breadcrumb',
  component: Breadcrumb,
  parameters: { background: { noPadding: false } },
  argTypes: {
    variant: {
      options: ['head', 'normal', 'small'],
      control: { type: 'radio' },
    },
  },
};

export const Default: StoryFC<BreadcrumbProps> = (args) => {
  return <Breadcrumb {...args} />;
};

export const NoLinks = Default.bind({});
export const WithHiddenItems = Default.bind({});
export const withParentVariant = Default.bind({});
export const WithCustomSeparator = Default.bind({});
export const InnerCardBreadcrumb = Default.bind({});
export const WithCustomItemRenderer = Default.bind({});

export const AllItemEllipsis: StoryFC<BreadcrumbProps> = (args) => {
  return <Breadcrumb {...args} />;
};

const numerousItems = [
  {
    href: '#',
    title: 'dashboard',
  },
  {
    title: 'mid step one',
  },
  {
    title: 'mid step two',
  },
  {
    title: 'mid step three',
  },
  {
    title: 'inbox',
  },
];

export const ItemEllipsis = AllItemEllipsis.bind({});

Default.args = {
  variant: 'head',
  boldLastItem: true,
  items: [
    {
      href: '#',
      title: 'dashboard',
    },
    {
      title: 'inbox',
    },
  ],
};

NoLinks.args = {
  variant: 'head',
  boldLastItem: true,
  items: [
    {
      title: 'dashboard',
    },
    {
      title: 'inbox',
    },
  ],
};

WithHiddenItems.args = {
  threshold: 2,
  boldLastItem: true,
  items: numerousItems,
};

withParentVariant.args = {
  limitFrom: 'end',
  threshold: 3,
  boldLastItem: true,
  variant: 'normal',
  tooltipTitle: 'go to link',
  otherTooltipTitle: 'look at the others',
  items: [
    {
      href: '#',
      title: 'dashboard',
    },
    {
      title: 'one',
      disabled: true,
    },
    {
      href: '#',
      title: 'two',
      disabled: true,
    },
    {
      href: '#',
      title: 'three',
    },
    {
      href: '#',
      title: 'four',
    },
    {
      href: 'https://somewebsite.com',
      title: 'school',
      disabled: true,
    },
    {
      title: 'private school',
    },
  ],
  alignItemsCenter: true,
};

WithCustomSeparator.args = {
  threshold: 3,
  separator: '/',
  variant: 'normal',
  boldLastItem: false,
  items: [
    {
      href: '#',
      title: 'All',
    },
    {
      href: '#',
      title: 'Tehran',
    },
    {
      title: 'School',
    },
  ],
};

InnerCardBreadcrumb.args = {
  threshold: 3,
  variant: 'small',
  boldLastItem: true,
  items: [
    {
      href: '#',
      title: 'School2',
    },
    {
      href: '#',
      title: 'Class1',
    },
  ],
  alignItemsCenter: true,
};

const ellipsisItems = [
  {
    href: '#',
    title: 'Main Collection',
  },
  {
    href: '#',
    title: 'Movies and theater with Erfan',
  },
  {
    href: '#',
    title: 'Music and instrument',
  },
  {
    href: '#',
    title: 'Photos and Media',
  },
  {
    href: '#',
    title: 'Items and Item',
  },
];

AllItemEllipsis.args = {
  threshold: 3,
  variant: 'head',
  items: ellipsisItems,
  alignItemsCenter: true,
  ellipsis: {
    ellipsisAll: true,
  },
};

ItemEllipsis.args = {
  threshold: 3,
  variant: 'head',
  limitFrom: 'end',
  items: ellipsisItems,
  alignItemsCenter: true,
};

WithCustomItemRenderer.args = {
  threshold: 3,
  variant: 'normal',
  boldLastItem: false,
  items: numerousItems,
  itemRenderer: ({ item, itemCmp }: ItemRendererProps) => (
    <CustomRendererContainer href={item.href}>{itemCmp}</CustomRendererContainer>
  ),
};

const CustomRendererContainer = styled.a`
  padding: 5px;
  border: 1px dashed black;
`;
