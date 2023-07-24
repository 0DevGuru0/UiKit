import { FC, useCallback } from 'react';

import styled from 'styled-components';

import { OldSelect as Select } from '@avidkit/select';

import { FilterItem, InputFilterItem } from '../filterTypes';

interface FilterCardInputProps {
  input: InputFilterItem;
  selectedItems: string[];
  filterHandler: (item: FilterItem, canHaveMultipleValue?: boolean) => void;
}

export const FilterCardInput: FC<FilterCardInputProps> = ({
  input,
  selectedItems,
  filterHandler,
}) => {
  const onSelectHandler = useCallback(
    (value: any) => filterHandler({ name: input.name, value }, input.multiSelect),
    [filterHandler, input.multiSelect, input.name],
  );

  return (
    <FilterOptions id={`filter_${input.name}`}>
      {input.rendererComponent ? (
        input.rendererComponent?.({
          filterHandler,
          input,
          selectedItems,
        })
      ) : (
        <Select
          label={input.label}
          items={input.items ?? []}
          icon={input.startAdornment}
          selectedItems={selectedItems}
          disabled={input.disabled ?? false}
          multiSelectable={true}
          onSelect={onSelectHandler}
        />
      )}
    </FilterOptions>
  );
};

const FilterOptions = styled.div`
  height: 84px;
`;
