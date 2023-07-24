import { ReactElement, useState } from 'react';
import styled, { css } from 'styled-components';

import { Menu } from '@avidkit/menu';

import {
  ChevronDown as ChevronDownIcon,
  SortByFill as SortByFillIcon,
  SortBy as SortByIcon,
} from '@avidkit/icons';

export interface SortByProps {
  className?: string;
  variant?: 'TROWEB' | 'LERNITO';
  selectedOptionPrefix?: string | ReactElement;
  options: string[][];
  selectedOption?: string;
  onSelectOption: (index: string) => void;
  isMenuOpen?: boolean;
  onToggleMenu?: (value: boolean) => void;
}

export const SortBy = ({
  variant = 'TROWEB',
  selectedOptionPrefix = 'Sort: ',
  isMenuOpen = false,
  ...props
}: SortByProps) => {
  const { className, selectedOption, options, onSelectOption, onToggleMenu } = props;

  const [menuOpen, setMenuOpen] = useState(isMenuOpen);

  const onClickSortBy = () => {
    setMenuOpen((prevState) => !prevState);
    onToggleMenu?.(menuOpen);
  };

  const onChangeSelectedItems = (selectedItem: string) => {
    onSelectOption(selectedItem);
  };

  return (
    <StyledSortBy className={className} onClick={onClickSortBy}>
      <Button $menuOpen={menuOpen}>
        <IconTextContainer>
          <div>
            <StyledSortByIcon />
            <StyledSortByFillIcon />
          </div>

          <TextContainer>
            {selectedOptionPrefix}
            <SelectedOption>{selectedOption ? selectedOption : 'Modify'}</SelectedOption>
          </TextContainer>
        </IconTextContainer>

        <StyledChevronDownIcon $menuOpen={menuOpen} />
      </Button>

      <MenuContainer>
        {menuOpen && (
          <Menu
            size="big"
            variant={variant}
            items={options}
            isMultiSelectable={false}
            selectedItem={selectedOption}
            onChangeSelectedItems={onChangeSelectedItems}
          />
        )}
      </MenuContainer>
    </StyledSortBy>
  );
};

const StyledSortBy = styled.div`
  position: relative;
  display: inline-block;
  z-index: 999;
`;

interface MenuProps {
  $menuOpen: boolean;
}

const Button = styled.div<MenuProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.palette.grey[100]};
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.palette.grey[500]};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.grey[500]};
    border: 1px solid
      ${({ $menuOpen, theme }) =>
        $menuOpen ? theme.palette.primary.light : theme.palette.secondary.light};
  }
`;

const IconTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const SortIconStyles = css`
  display: block;
  width: 24px;
  height: 24px;

  & > path,
  & > use {
    fill: ${({ theme }) => theme.palette.text.primary};
  }
`;

const StyledSortByIcon = styled(SortByIcon)`
  ${SortIconStyles}

  ${StyledSortBy}:hover & {
    display: none;
  }
`;

const StyledSortByFillIcon = styled(SortByFillIcon)`
  ${SortIconStyles}
  display: none;

  ${StyledSortBy}:hover & {
    display: block;
  }
`;

const TextContainer = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  white-space: pre;
  display: flex;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const SelectedOption = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

const StyledChevronDownIcon = styled(ChevronDownIcon)<MenuProps>`
  display: block;
  width: 20px;
  height: 20px;
  transform: rotateX(${({ $menuOpen }) => ($menuOpen ? -180 : 0)}deg);
  transition: transform 200ms;

  & path,
  & use {
    fill: ${({ theme }) => theme.palette.divider};
  }

  ${StyledSortBy}:hover & path, ${StyledSortBy}:hover & use {
    fill: ${({ theme }) => theme.palette.text.primary};
  }
`;

const MenuContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 12px;
`;
