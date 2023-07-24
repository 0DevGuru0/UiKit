import { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { ChevronRight } from '@avidkit/icons';
import { AdvanceItem, Menu } from '@avidkit/menu';
import { useClickOutside } from '@avidkit/hooks';

export interface DropdownContainerProps {
  className?: string;
  items: {
    id: string;
    label: string;
  }[];
  selectedItemId?: string;
  selectedItemElement: ReactElement;
  defaultItem?: string;
  onSelect?: (args: any) => void;
}

export const DropdownContainer = <T extends string | AdvanceItem = string | AdvanceItem>(
  props: DropdownContainerProps,
) => {
  const {
    items,
    selectedItemElement,
    selectedItemId,
    className,
    onSelect = () => null,
  } = props;
  const [isMenuOpen, setMenuOpen] = useState(false);

  const optionMenuElement = useClickOutside(() => setMenuOpen(false));
  const itemLabels = items.map((item) => item.label);
  const selectedItemLabel = items.find((item) => item.id === selectedItemId)?.label;

  const handleOnSelect = (instance: T) => {
    onSelect(items.find((item) => item.label === instance)?.id);
  };

  return (
    <Container className={className}>
      <MenuContainer>
        <DropDownIcon onClick={() => setMenuOpen(true)} />
        <DropDownLabel>{selectedItemLabel}</DropDownLabel>
      </MenuContainer>
      <div ref={optionMenuElement}>
        {isMenuOpen ? (
          <StyledMenu
            size="big"
            items={[itemLabels]}
            selectedItem={selectedItemLabel}
            onChangeSelectedItems={handleOnSelect}
            variant="LERNITO"
          />
        ) : null}
      </div>
      <ElementContainer>{selectedItemElement}</ElementContainer>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.grey[600]};
  border-radius: 12px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  size: 24px;
  position: relative;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 24px;
  padding-top: 18px;
  cursor: pointer;
`;

const DropDownIcon = styled(ChevronRight)`
  transform: rotate(90deg);
  cursor: pointer;
  margin-right: 15px;
  align-self: center;
  height: 24px;
  width: 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.grey[300]};
`;

const DropDownLabel = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.grey[800]};
`;

const StyledMenu = styled(Menu)`
  position: absolute !important;
  top: 48px;
  left: 24px;
`;

const ElementContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 24px;
`;
