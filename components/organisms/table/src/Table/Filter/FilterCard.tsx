import { Fragment, useContext, useEffect } from 'react';

import gsap from 'gsap';
import { useAtom } from 'jotai';
import { useUpdateAtom } from 'jotai/utils';
import { isEmpty } from 'lodash';
import styled from 'styled-components';

import { AnimationWrapper } from '../utils/animationWrapper';
import { isArrayOfString } from '../utils/isArrayOfString';
import { FilterCheckbox } from './FilterCard/FilterCheckbox';
import { HeaderSection } from './FilterCard/HeaderSection';
import { FilterCardInput } from './FilterCard/FilterCardInput';
import { FilterContext } from './FilterContext';
import { filterModifier } from './filterModifier';
import { FilterItem, IFilter, InputFilterItem } from './filterTypes';

export const FilterCard = () => {
  const {
    cardType,
    filtersAtom,
    showToggleAtom,
    config: { inputs, checkboxes },
  } = useContext(FilterContext);

  const [filters, setFilters] = useAtom(filtersAtom);
  const setShowToggle = useUpdateAtom(showToggleAtom);

  const animation = (element: any) =>
    gsap.from(element, { opacity: 0, immediateRender: false, overwrite: true });

  const filterHandler = (item: FilterItem, canHaveMultipleValue?: boolean) => {
    // If user chose the items that are appeared in toggle, hide the toggle
    if (item.name === 'toggle') {
      setShowToggle(false);
    }
    setFilters((_filters) => filterModifier(item, _filters, canHaveMultipleValue));
  };

  useEffect(() => {
    setShowToggle(isEmpty(filters.toggle));
  }, [filters, setShowToggle]);

  return (
    <AnimationWrapper gsapHandler={animation}>
      <Container $variant={cardType}>
        <HeaderSection />
        {inputs && (
          <SelectableFilters>
            {inputs.map((input) => (
              <FilterCardInput
                key={`${input.name}-${input.label}`}
                input={input}
                selectedItems={fetchInputSelectedItems(filters, input)}
                filterHandler={filterHandler}
              />
            ))}
          </SelectableFilters>
        )}
        {checkboxes?.map((item) => (
          <Fragment key={`${item.name}-${item.label}`}>
            <FilterCheckbox item={item} filterHandler={filterHandler} />
          </Fragment>
        ))}
      </Container>
    </AnimationWrapper>
  );
};

interface CardProps {
  $variant: 'Default' | 'Bordered';
}

const Container = styled.div<CardProps>`
  padding: 36px;
  width: inherit;
  height: max-content;
  border-radius: 12px;
  margin-bottom: 36px;
  background-color: ${({ theme }) => theme.palette.background.default};
  border: ${({ theme, $variant }) =>
    $variant === 'Bordered' ? `solid 1px ${theme.palette.divider}` : 'unset'};
  box-shadow: ${({ theme, $variant }) =>
    $variant === 'Default' ? `0 2px 6px 0 ${theme.palette.grey[400]}` : 'unset'};
`;

const SelectableFilters = styled.div`
  display: grid;
  margin-bottom: 36px;
  grid-gap: 36px 24px;
  grid-template-columns: repeat(4, minmax(200px, 468px));
`;

const fetchInputSelectedItems = (filters: IFilter, input: InputFilterItem): string[] => {
  const filterItem = filters?.[input.name] ?? [];
  return isArrayOfString(filterItem) ? filterItem : filterItem.map((item) => item.value);
};
