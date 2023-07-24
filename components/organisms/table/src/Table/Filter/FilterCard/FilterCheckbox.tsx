import { FC, useContext } from 'react';

import { useAtomValue } from 'jotai/utils';
import { some } from 'lodash';
import styled, { FlattenSimpleInterpolation } from 'styled-components';

import { CheckBox } from '@avidkit/checkbox';

import { isArrayOfString } from '../../utils/isArrayOfString';
import { FilterContext } from '../FilterContext';
import { CheckboxFilter, FilterItem } from '../filterTypes';

interface FilterCheckboxProps {
  item: CheckboxFilter;
  filterHandler: (item: FilterItem, canHaveMultipleValue?: boolean) => void;
}

export const FilterCheckbox: FC<FilterCheckboxProps> = ({ item, filterHandler }) => {
  const { filtersAtom } = useContext(FilterContext);
  const filters = useAtomValue(filtersAtom);

  return (
    <>
      <TextTitle color="dark">{item.label}</TextTitle>
      <CheckableFilters>
        {item.checkboxes.map((checkbox, innerKey) => {
          const filtersItem = filters?.[item.name];
          const isChecked = filtersItem
            ? isArrayOfString(filtersItem)
              ? filtersItem.includes(checkbox.label)
              : some(filtersItem, (element: any) => element.value === checkbox.label)
            : false;
          return (
            <StateContainer key={innerKey}>
              <CustomCheckbox
                isChecked={isChecked}
                label={checkbox.label}
                $style={checkbox.style}
                id={`checkbox-${innerKey}`}
                disabled={checkbox.disabled}
                onChange={() =>
                  filterHandler({ name: item.name, value: checkbox.label }, true)
                }
              />
              {checkbox.indicatorColor && <Circle color={checkbox.indicatorColor} />}
            </StateContainer>
          );
        })}
      </CheckableFilters>
    </>
  );
};

const CheckableFilters = styled.div`
  z-index: 2;
  display: grid;
  padding-top: 12px;
  position: relative;
  grid-column-gap: 42px;
  grid-template-columns: repeat(6, 1fr);
`;

interface StateProps {
  color?: string;
}

const TextTitle = styled.div<StateProps>`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const StateContainer = styled.div`
  display: flex;
  max-width: 182px;
`;

const Circle = styled.div<StateProps>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: auto 0 auto 5px;
  background-color: ${({ color }) => color};
`;

interface CustomCheckboxProps {
  $style?: FlattenSimpleInterpolation;
}

const CustomCheckbox = styled(CheckBox)<CustomCheckboxProps>`
  ${({ $style }) => $style}
`;
