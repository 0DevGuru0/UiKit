import { FC, useCallback, useRef, useState } from 'react';

import styled from 'styled-components';

import { Menu } from '@avidkit/menu';

import { ToggleSelectProps } from '../ToggleSelect';
import { useClickOutside } from '../../utils/useClickOutSide';

type MoreItemsProps = Pick<ToggleSelectProps, 'items' | 'onSelect' | 'selectedItems'>;

export const MoreItems: FC<MoreItemsProps> = ({ items, selectedItems, onSelect }) => {
  const menuRef = useRef<HTMLInputElement>(null);
  const [showMenu, setShowMenu] = useState(false);
  useClickOutside(menuRef, () => setShowMenu(false));

  const menuItems = [
    items.map((item) => {
      return item.title;
    }),
  ];

  const handleMenuSelect = useCallback(
    (index: any) => {
      onSelect(index);
    },
    [onSelect],
  );

  return (
    <Container>
      <div onClick={() => setShowMenu(true)}>{`+${items.length} more`}</div>
      {showMenu && (
        <StyledMenu
          size="small"
          items={menuItems}
          onChangeSelectedItems={handleMenuSelect}
          selectedItems={selectedItems}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin: auto 0;
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
  margin-left: 12px;
  color: ${({ theme }) => theme.palette.grey[400]};
  &:hover {
    color: ${({ theme }) => theme.palette.grey[200]};
  }
`;

const StyledMenu = styled(Menu)`
  top: 50px;
  z-index: 999;
  position: absolute;
`;
