import styled, { css } from 'styled-components';

import { CheckBox } from '@avidkit/checkbox';
import { Check } from '@avidkit/icons';

import { AdvanceItem, MenuProps } from '../Menu';

export interface ItemProps {
  size?: MenuProps['size'];
  variant?: MenuProps['variant'];
  id: string;
  content: AdvanceItem | string;
  isSelected?: boolean;
  onClickItem: () => void;
  isMultiSelectable?: MenuProps['isMultiSelectable'];
  checkComponent?: MenuProps['checkComponent'];
}

export const Item = (props: ItemProps) => {
  const {
    size,
    variant,
    id,
    content,
    isMultiSelectable,
    isSelected,
    checkComponent,
    onClickItem,
  } = props;

  const isTextItem = typeof content === 'string';
  const showCheckBox = isMultiSelectable || !!checkComponent;
  const showCheckIcon = isSelected && !isMultiSelectable && !checkComponent;
  const showDetails = isMultiSelectable && (content as AdvanceItem).details;

  return (
    <StyledItem variant={variant} size={size} onClick={onClickItem}>
      {showCheckBox && (
        <StyledCheckBox id={id} isChecked={isSelected} checkComponent={checkComponent} />
      )}

      <ContentContainer>
        {isTextItem ? (
          <PrimaryTitle size={size} isSelected={isSelected}>
            {content}
          </PrimaryTitle>
        ) : (
          <AdvanceItemContainer>
            {content.icon && <IconContainer>{content.icon}</IconContainer>}

            <div>
              <PrimaryTitle size={size} isSelected={isSelected}>
                {content.label}
              </PrimaryTitle>
              {showDetails && (
                <DetailsText isSelected={isSelected}>{content.details}</DetailsText>
              )}
            </div>
          </AdvanceItemContainer>
        )}

        {showCheckIcon && <StyledCheck variant={variant} />}
      </ContentContainer>
    </StyledItem>
  );
};

const StyledItem = styled.div<Pick<MenuProps, 'size' | 'variant'>>`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: ${({ size }) => (size === 'small' ? 120 : 261)}px;
  padding: ${({ size }) => (size === 'small' ? 6 : 12)}px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, variant }) =>
      variant === 'TROWEB' ? theme.palette.grey[200] : theme.palette.primary.light};
  }
`;

const StyledCheckBox = styled(CheckBox)`
  flex-shrink: 0;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const EllipsisTextStyling = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PrimaryTitle = styled.div<Pick<ItemProps, 'size' | 'variant' | 'isSelected'>>`
  ${EllipsisTextStyling}

  font-size: ${({ size }) => (size === 'small' ? 14 : 16)}px;
  font-weight: ${({ isSelected }) => (isSelected ? 600 : 400)};
  line-height: 20px;
  color: ${({ theme }) => theme.palette.grey[800]};

  ${StyledItem}:hover & {
    font-weight: 600;
  }
`;

const DetailsText = styled.div<Pick<ItemProps, 'isSelected'>>`
  ${EllipsisTextStyling}

  font-size: 12px;
  font-weight: ${({ isSelected }) => (isSelected ? 600 : 400)};
  color: ${({ theme }) => theme.palette.grey[700]};

  ${StyledItem}:hover & {
    font-weight: 600;
  }
`;

const StyledCheck = styled(Check)<Pick<ItemProps, 'variant'>>`
  flex-shrink: 0;
  display: block;
  width: 20px;
  height: 20px;

  & path,
  & use {
    fill: ${({ theme, variant }) =>
      variant === 'TROWEB' ? theme.palette.secondary.main : theme.palette.primary[500]};
  }
`;

const AdvanceItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const IconContainer = styled.div`
  flex-shrink: 0;
`;
