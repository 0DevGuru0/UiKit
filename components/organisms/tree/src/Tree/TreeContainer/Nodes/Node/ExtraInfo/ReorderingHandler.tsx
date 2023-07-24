import { SortableHandle } from 'react-sortable-hoc';

import { MoveVertical } from '@avidkit/icons';
import { IconButton } from '@avidkit/icon-button';
import { IconButtonWrapper } from './IconButtonWrapper';

export const ReorderingHandler = SortableHandle(() => {
  return (
    <IconButtonWrapper item left={-10}>
      <IconButton icon={<MoveVertical />} variant="Free" color="Secondary" size="Sm" />
    </IconButtonWrapper>
  );
});
