import { useState } from 'react';
import { StoryFC } from '$storybook/StoryFC';
import { MembersList, MembersListProps } from './MembersList';
import styled from 'styled-components';
import { Avatar as AvatarSvg } from '@avidkit/icons';

export default {
  title: 'Molecules / MembersList',
  component: MembersList,
  parameters: { background: { noPadding: false } },
};

export const MembersListCmp: StoryFC<MembersListProps> = (args) => {
  const [selectedSortOptionId, setSelectedSortOptionLabel] = useState(
    sortOptions.firstOption.id,
  );
  const [items, setItems] = useState<any>([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isNextPageLoading, setIsNextPageLoading] = useState(false);

  const loadNextPage = () => {
    setIsNextPageLoading(true);
    setTimeout(() => {
      setHasNextPage(items.length < 50);
      setIsNextPageLoading(false);
      setItems(
        [...items].concat(
          new Array(10).fill(true).map((_, index) => {
            return {
              name: 'Bijan Rabbani',
              membership: 'In School4',
              avatar: <AvatarSvg />,
              actions,
            };
          }),
        ),
      );
    }, 2500);
  };

  const LoadingIndicator = <Loading> Waiting...</Loading>;

  const orderedUsers =
    selectedSortOptionId === sortOptions.firstOption.id
      ? [...items]
      : [...items].reverse();

  const onToggleSortOption = () => {
    setSelectedSortOptionLabel((prev) =>
      prev === sortOptions.firstOption.id
        ? sortOptions.secondOption.id
        : sortOptions.firstOption.id,
    );
  };
  return (
    <Container>
      <MembersList
        {...args}
        users={orderedUsers}
        selectedSortOptionId={selectedSortOptionId}
        onToggleSortOption={onToggleSortOption}
        loadNextPage={loadNextPage}
        loadingIndicator={LoadingIndicator}
        hasNextPage={hasNextPage}
        isNextPageLoading={isNextPageLoading}
      />
    </Container>
  );
};

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

const sortOptions = {
  firstOption: {
    id: '1',
    label: 'Title A to Z',
  },
  secondOption: {
    id: '2',
    label: 'Title Z to A',
  },
};

MembersListCmp.args = {
  allUsersCount: 3,
  sortOptions,
  selectedSortOptionId: sortOptions.firstOption.id,
  loadingIndicator: <div>Loading...</div>,
  loadNextPage: () => null,
};

const Container = styled.div`
  width: 300px;
  height: 600px;
`;

const Loading = styled.div`
  color: #111111;
  background-color: #eee8b5;
  border-radius: 2px;
  border: 1px solid #bbb8b8;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: flex;
  font: 16px;
  justify-content: center;
  align-items: center;
`;
