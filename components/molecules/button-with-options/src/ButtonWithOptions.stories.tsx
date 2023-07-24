import { useState } from 'react';
import { StoryFC } from '$storybook/StoryFC';
import { ButtonWithOptions } from './ButtonWithOptions';
import { Filter } from '@avidkit/icons';
import type { AdvanceItem as Item } from '@avidkit/menu';

export default {
  title: 'Molecules / ButtonWithOptions',
  component: ButtonWithOptions,
  parameters: { background: { noPadding: false } },
};

export const Default: StoryFC = (args) => {
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  const selectHandler = (item: any) => {
    if (item.label === selectedItems[0]?.label) {
      setSelectedItems([]);
    } else {
      setSelectedItems([item]);
    }
  };

  return (
    <ButtonWithOptions
      {...args}
      maxWidth={600}
      selectedItems={selectedItems}
      onSelectItem={selectHandler}
      buttonTitle="Filter"
      items={[
        { id: '1', label: 'Item 01' },
        { id: '2', label: 'Item 02', details: 'Description 02' },
        { id: '3', label: 'Item 03', details: 'Description 03' },
      ]}
      icon={<Filter />}
    />
  );
};
