import { FC, isValidElement, useCallback } from 'react';
import styled from 'styled-components';
import { ToggleSelectProps } from '../ToggleSelect';

interface ToggleItemProps extends Pick<ToggleSelectProps, 'selectedItems'> {
  onClick: (item: ToggleSelectProps['items'][0]) => void;
  item: ToggleSelectProps['items'][0];
}

export const ToggleItem: FC<ToggleItemProps> = ({ item, onClick, selectedItems }) => {
  const handleClick = useCallback(() => {
    onClick(item);
  }, [item, onClick]);

  return (
    <ToggleItemCircle
      onClick={handleClick}
      $selected={selectedItems.includes(item.title)}
    >
      {isValidElement(item.innerItem) ? (
        <Icon>{item.innerItem}</Icon>
      ) : (
        <Image src={(item.innerItem as string) ?? './defaultUser.png'} />
      )}
    </ToggleItemCircle>
  );
};

interface CircleProps {
  $selected: boolean;
}

const ToggleItemCircle = styled.div<CircleProps>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.grey[700]};
  :not(:first-child) {
    margin-left: -10px;
  }
  border: 2px solid
    ${({ theme, $selected }) =>
      $selected ? theme.palette.primary.light : theme.palette.background.default};
`;

const Icon = styled.div`
  margin: 6px;
  > svg {
    width: 20px;
    height: 20px;
    & path,
    & use {
      fill: ${({ theme }) => theme.palette.grey[300]};
    }
  }
`;

const Image = styled.img`
  width: inherit;
  height: inherit;
  border-radius: 50%;
`;
