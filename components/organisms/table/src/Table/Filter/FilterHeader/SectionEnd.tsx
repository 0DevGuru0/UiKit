import { useContext } from 'react';

import { useAtom } from 'jotai';
import { includes } from 'lodash';
import styled from 'styled-components';

import { SortBy } from '@avidkit/sort-by';

import { FilterContext, FilterVariant } from '../FilterContext';

export const SectionEnd = () => {
  const { variant, sortByAtom, sortOptions } = useContext(FilterContext);

  const [sortBy, setSortBy] = useAtom(sortByAtom);

  const showSortVariants: FilterVariant[] = [
    'WithSort',
    'WithSortAndToggle',
    'WithSortAndSelectAll',
    'SearchAndSortAndToggle',
  ];

  return (
    <Container>
      {includes(showSortVariants, variant) && sortOptions && (
        <SortBy
          options={[sortOptions]}
          onSelectOption={setSortBy}
          selectedOption={sortBy}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
