import { FC, useCallback } from 'react';

import styled from 'styled-components';

import { Tooltip } from '@avidkit/tooltip';

import { ToggleSelectProps } from '../ToggleSelect';
import { ToggleItem } from './ToggleItem';

type ShownItemsProps = Pick<ToggleSelectProps, 'items' | 'onSelect' | 'selectedItems'>;

export const ToggleSelectVisibleItems: FC<ShownItemsProps> = ({
  items,
  onSelect,
  selectedItems,
}) => {
  const handleClick = useCallback(
    (item: ShownItemsProps['items'][0]) => {
      onSelect(item.title);
    },
    [onSelect],
  );

  return (
    <Container>
      {items.map((item) => (
        <Tooltip key={item.title} title={item.title} arrow>
          <ToggleItem item={item} onClick={handleClick} selectedItems={selectedItems} />
        </Tooltip>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  cursor: pointer;
`;
