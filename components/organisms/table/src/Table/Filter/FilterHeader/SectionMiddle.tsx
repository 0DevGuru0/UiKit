import { useCallback, useContext, useEffect } from 'react';

import { useAtom } from 'jotai';
import { useAtomValue } from 'jotai/utils';
import { includes } from 'lodash';
import styled from 'styled-components';

import { CheckBox } from '@avidkit/checkbox';
import { FilterContext, FilterVariant } from '../FilterContext';
import { filterModifier } from '../filterModifier';
import { ToggleSelect } from '../ToggleSelect';

export const SectionMiddle = () => {
  const {
    variant,
    toggleAtom,
    filtersAtom,
    toggleItems,
    showSelectAll,
    showToggleAtom,
    filterCardOpenAtom,
    selectAllCheckedAtom,
  } = useContext(FilterContext);

  const showToggle = useAtomValue(showToggleAtom);
  const [filters, setFilters] = useAtom(filtersAtom);
  const filterCardOpen = useAtomValue(filterCardOpenAtom);
  const [toggledList, setToggledList] = useAtom(toggleAtom);
  const [isSelectAllChecked, setIsSelectAllChecked] = useAtom(selectAllCheckedAtom);

  const showToggleVariants: FilterVariant[] = [
    'WithSortAndToggle',
    'SearchAndSortAndToggle',
  ];

  const handleSelectAllChange = useCallback(() => {
    setIsSelectAllChecked(!isSelectAllChecked);
  }, [isSelectAllChecked, setIsSelectAllChecked]);

  useEffect(() => {
    setToggledList((filters.toggle as string[]) ?? []);
  }, [filters, setToggledList]);

  const handleToggleChange = useCallback(
    (item: string) => {
      setFilters(filterModifier({ name: 'toggle', value: item }, filters, true));
    },
    [filters, setFilters],
  );

  return (
    <Container>
      {!filterCardOpen && showToggle && includes(showToggleVariants, variant) && (
        <ToggleContainer>
          <ToggleSelect
            items={toggleItems}
            selectedItems={toggledList}
            onSelect={handleToggleChange}
          />
        </ToggleContainer>
      )}
      <CheckboxContainer>
        {showSelectAll && (
          <CustomCheckbox
            id="SelectAll"
            label="Select All"
            isChecked={isSelectAllChecked}
            onChange={handleSelectAllChange}
          />
        )}
      </CheckboxContainer>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  margin-right: 36px;
`;

const ToggleContainer = styled.div`
  flex: 1;
  padding: 6px 0;
  padding-right: 0px;
`;

const CheckboxContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const CustomCheckbox = styled(CheckBox)`
  margin-left: 48px;
`;
