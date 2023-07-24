import { FC, useState, useEffect } from 'react';

import { Popover } from '@mui/material';
import styled from 'styled-components';

import { Close } from '@avidkit/icons';
import { Input } from '@avidkit/input';
import { CircleLoading } from '@avidkit/loading';

import { Item, ItemProps } from './filterSelectorMenu/Item';

export interface FilterSelectorMenuProps {
  multiSelect?: boolean;
  items?: Omit<ItemProps, 'multiSelect'>[];
  onChange?: (selectedItems: ItemProps[]) => void;
  onClose?: (event: any) => void;
  loading?: boolean;
  anchorEl?: Element;
  chooseable?: boolean;
}

export const FilterSelectorMenu: FC<FilterSelectorMenuProps> = ({
  multiSelect = false,
  items = [],
  onChange,
  onClose,
  loading = false,
  anchorEl,
  chooseable = true,
}) => {
  const [allItems, setAllItems] = useState<ItemProps[]>([]);

  useEffect(() => {
    const itemsWithMultiSelect = items.map((item) => ({
      ...item,
      multiSelect,
    }));
    const itemsWithSort = [...itemsWithMultiSelect].sort(
      ({ selected: x }, { selected: y }) => {
        const interiorCheck = x ? -1 : 1;
        return x === y ? 0 : interiorCheck;
      },
    );
    setAllItems([
      {
        label: 'Unassigned',
        id: '0',
        selected: !items?.some((v) => v.selected),
        multiSelect,
      },
      ...itemsWithSort,
    ]);
  }, [items, multiSelect]);

  const [searchValue, setSearchValue] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState<ItemProps[] | null>();

  const onChangeSearch = (search: string) => {
    setSearchValue(search);
    if (search) {
      const newFilteredItems: ItemProps[] = allItems.filter((item) =>
        item.label.toLowerCase().includes(search.toLowerCase()),
      );
      setFilteredItems(newFilteredItems);
    } else {
      setFilteredItems(null);
    }
  };

  const onClickItem = (selectedItem: ItemProps) => {
    const newItems: ItemProps[] = allItems.map((item) => {
      if (item.id === selectedItem.id) {
        item.selected = !item.selected;
      } else {
        if (!multiSelect) {
          item.selected = false;
        }
      }
      return item;
    });
    setAllItems(newItems);

    if (onChange) {
      const selectedItems: ItemProps[] = allItems.filter((item) => item.selected);
      onChange(selectedItems);
    }
  };

  const open = Boolean(anchorEl);
  const showingItems = filteredItems ?? allItems;

  return (
    <Popover
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <CircleLoading loading={loading}>
        <Container>
          <CloseButton onClick={onClose} />
          {chooseable ? (
            <>
              <Input value={searchValue} placeholder="Search" onChange={onChangeSearch} />
              <ItemsContainer>
                {showingItems.map((item, index) => (
                  <Item
                    key={index}
                    {...item}
                    onClick={onClickItem}
                    multiSelect={multiSelect}
                  />
                ))}
              </ItemsContainer>
            </>
          ) : (
            <NotFilterableContainer>Unable To Select</NotFilterableContainer>
          )}
        </Container>
      </CircleLoading>
    </Popover>
  );
};

const Container = styled.div`
  width: 220px;
  max-height: 237px;
  padding: 12px;
`;

const NotFilterableContainer = styled.div`
  color: ${({ theme }) => theme.palette.text.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
`;

const ItemsContainer = styled.div`
  margin-top: 12px;
  overflow-y: auto;
  max-height: 189px;
`;

const CloseButton = styled(Close)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  path,
  use {
    fill: ${({ theme }) => theme.palette.text.primary};
    &:hover {
      fill: ${({ theme }) => theme.palette.text.secondary};
    }
  }
`;
