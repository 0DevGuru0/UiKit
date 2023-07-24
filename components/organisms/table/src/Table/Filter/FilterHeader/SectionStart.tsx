import { useCallback, useContext } from 'react';

import { useAtom } from 'jotai';
import styled from 'styled-components';

import { Search } from '@avidkit/search';

import { FilterContext } from '../FilterContext';
import { FilterButton } from '../SectionStart/FilterButton';

export const SectionStart = () => {
  const { variant, filtersAtom, searchPlaceholder } = useContext(FilterContext);

  const [filters, setFilters] = useAtom(filtersAtom);

  const searchHandler = useCallback(
    (searchPhrase: any) => {
      setFilters({ ...filters, searchPhrase });
    },
    [filters, setFilters],
  );

  return (
    <Container>
      <Search
        defaultValue={filters.searchPhrase}
        onChange={searchHandler}
        placeholder={searchPlaceholder}
      />
      {variant !== 'SearchOnly' && variant !== 'SearchAndSortAndToggle' && (
        <FilterButton />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-right: 24px;
`;
