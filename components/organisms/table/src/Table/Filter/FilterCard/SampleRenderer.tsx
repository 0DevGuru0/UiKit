import { FC } from 'react';

import styled from 'styled-components';
import { Input } from '@avidkit/input';

import { RenderComponent } from '../filterTypes';

export const SampleRenderer: FC<RenderComponent> = ({
  input,
  selectedItems,
  filterHandler,
}) => (
  <FilterOptions id={`filter_${input.name}`}>
    <Input
      value={selectedItems[0] ?? ''}
      label={input.label}
      disabled={input.disabled ?? false}
      onChange={(value: any) =>
        filterHandler({ name: input.name, value }, input.multiSelect)
      }
    />
  </FilterOptions>
);

const FilterOptions = styled.div`
  height: 84px;
`;
