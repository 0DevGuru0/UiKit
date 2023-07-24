import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { Search } from '@avidkit/search';
import { UserCard, IUser } from '@avidkit/user-card';
import { Tooltip } from '@avidkit/tooltip';
import { InfiniteList } from '@avidkit/infinite-list';

interface ISortOption {
  id: string;
  label: string;
}

export interface MembersListProps {
  sortOptions: { firstOption: ISortOption; secondOption: ISortOption };
  selectedSortOptionId: string;
  allUsersCount: number;
  loadingIndicator: ReactElement;
  searchPlaceholder?: string;
  totalLabel?: string;
  sortLabel?: string;
  sortTooltipText?: string;
  hasNextPage?: boolean;
  isNextPageLoading?: boolean;
  users?: IUser[];
  children?: ReactNode;
  className?: string;
  loadNextPage: () => void;
  onSearch: (args?: any) => void;
  onToggleSortOption?: (args?: any) => void;
}

export const MembersList = (props: MembersListProps) => {
  const {
    users,
    allUsersCount,
    sortTooltipText = 'Change to ',
    totalLabel = 'total',
    sortLabel = 'Sort',
    searchPlaceholder = 'Search',
    sortOptions,
    selectedSortOptionId,
    loadingIndicator,
    hasNextPage,
    isNextPageLoading,
    className,
    loadNextPage,
    onSearch,
    onToggleSortOption,
  } = props;

  const findSortOptionLabel = (selected = true) => {
    if (sortOptions.firstOption.id === selectedSortOptionId) {
      if (selected) {
        return sortOptions.firstOption.label;
      } else {
        return sortOptions.secondOption.label;
      }
    } else {
      if (selected) {
        return sortOptions.secondOption.label;
      } else {
        return sortOptions.firstOption.label;
      }
    }
  };

  return (
    <Container className={className}>
      <Search
        placeholder={searchPlaceholder}
        startAdornment
        onChange={onSearch}
        variant="LERNITO"
      />
      <Row>
        <div>
          {allUsersCount}
          <Label>{totalLabel}</Label>
        </div>
        <div>
          <Label>{sortLabel}:</Label>
          <Tooltip title={`${sortTooltipText} ${findSortOptionLabel(false)}`}>
            <SortOption onClick={onToggleSortOption}>{findSortOptionLabel()}</SortOption>
          </Tooltip>
        </div>
      </Row>

      {users && (
        <InfiniteListContainer>
          <InfiniteList
            items={users}
            loadingIndicator={loadingIndicator}
            width={'100%'}
            height={'100%'}
            hasNextPage={hasNextPage}
            loadNextPage={loadNextPage}
            isNextPageLoading={isNextPageLoading}
            itemContent={(index, user) => (
              <StyledUserCard key={`User_${index}`} user={user} />
            )}
          />
        </InfiniteListContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledUserCard = styled(UserCard)`
  margin: 24px 0;
`;

const Row = styled.div`
  margin: 26px 0;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

const Label = styled.span`
  padding: 0 5px;
  color: ${({ theme }) => theme.palette.grey[800]};
`;

const SortOption = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
  cursor: pointer;
`;

const InfiniteListContainer = styled.div`
  width: 100%;
  height: calc(100% - 118px);
`;
