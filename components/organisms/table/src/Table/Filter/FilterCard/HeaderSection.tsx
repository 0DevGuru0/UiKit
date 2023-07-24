import { useContext } from 'react';

import { Button } from '@avidkit/button';
import { useAtom } from 'jotai';
import { isEmpty } from 'lodash';
import styled from 'styled-components';

import { FilterContext } from '../FilterContext';

export const HeaderSection = () => {
  const { filtersAtom } = useContext(FilterContext);
  const [filters, setFilters] = useAtom(filtersAtom);

  const clearFilters = () => {
    setFilters({});
  };

  return (
    <HeadContainer>
      <TextHead>Filter by</TextHead>
      {!isEmpty(filters) && (
        <Button title="Clear Filters" onClick={clearFilters} color="error" />
      )}
    </HeadContainer>
  );
};

const HeadContainer = styled.div`
  display: flex;
  margin-bottom: 36px;
`;

const TextHead = styled.div`
  flex: 1;
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  color: ${({ theme }) => theme.palette.text.primary};
`;
