import { StoryFC } from '$storybook/StoryFC';
import { UserCard, UserCardProps } from './UserCard';
import styled from 'styled-components';
import { Avatar as AvatarSvg } from '@avidkit/icons';

export default {
  title: 'Molecules / UserCard',
  component: UserCard,
};

const Template: StoryFC<UserCardProps> = (args) => (
  <Container>
    <UserCard {...args} />
  </Container>
);

const actions = [
  {
    label: 'Remove from admins',
    onClick: () => console.log('Remove from admins'),
  },
  {
    label: 'Add To admins',
    onClick: () => console.log('Add To admins'),
  },
];

export const UserCardDefault = Template.bind({});

UserCardDefault.args = {
  user: {
    name: 'Erfan Asadi',
    membership: 'In School1, School3',
    avatar: <AvatarSvg />,
    actions,
  },
} as const;

export const UserCardWithoutActions = Template.bind({});
UserCardWithoutActions.args = {
  user: { name: 'Erfan Asadi', membership: 'In School1, School3', avatar: <AvatarSvg /> },
} as const;

export const UserCardWithoutAvatar = Template.bind({});
UserCardWithoutAvatar.args = {
  user: { name: 'Erfan Asadi', membership: 'In School1, School3', actions },
} as const;

export const UserCardWithoutAvatarAndActions = Template.bind({});
UserCardWithoutAvatarAndActions.args = {
  user: { name: 'Erfan Asadi', membership: 'In School1, School3' },
} as const;

const Container = styled.div`
  width: 375px;
`;
