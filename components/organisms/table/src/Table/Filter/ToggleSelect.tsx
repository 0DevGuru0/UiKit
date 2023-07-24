import { FC, ReactNode } from 'react';

import clsx from 'classnames';
import styled from 'styled-components';

import { MoreItems } from './ToggleSelect/MoreItems';
import { ToggleSelectVisibleItems } from './ToggleSelect/ToggleSelectVisibleItems';

export interface ToggleItem {
  title: string;
  innerItem?: ReactNode | string;
}

export interface ToggleSelectProps {
  threshold?: number;
  className?: string;
  items: ToggleItem[];
  selectedItems: string[];
  onSelect: (id: string) => void;
}

export const ToggleSelect: FC<ToggleSelectProps> = ({
  items,
  threshold = 5,
  ...props
}) => {
  const visibleItemsCount = items.length - threshold;
  const visibleItems = visibleItemsCount > 0 ? items.slice(0, threshold) : items;
  const hiddenItems = visibleItemsCount > 0 ? items.slice(threshold, items.length) : [];

  return (
    <Container className={clsx('ToggleSelect', props.className)}>
      <ToggleSelectVisibleItems items={visibleItems} {...props} />
      {visibleItemsCount > 0 && <MoreItems items={hiddenItems} {...props} />}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
