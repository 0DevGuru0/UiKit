import { FC, MutableRefObject, useState } from 'react';
import styled from 'styled-components';
import { Menu, AdvanceItem as Item } from '@avidkit/menu';
import { OptionsProps } from '@avidkit/options';
import { Button, ButtonProps } from '@avidkit/button';
import { useClickOutside } from '@avidkit/hooks';

export type ButtonWithOptionsProps = {
  buttonTitle: string;
  icon?: React.ReactElement;
  items: Item[];
  selectedItems: Item[];
  className?: string;
  buttonProps: Partial<ButtonProps>;
  onSelectItem?: (item: any) => void;
} & Pick<OptionsProps, 'sections'>;

export const ButtonWithOptions: FC<ButtonWithOptionsProps> = ({
  className,
  buttonTitle,
  icon,
  items,
  selectedItems,
  buttonProps,
  onSelectItem,
}) => {
  const [isOpen, setOpen] = useState(false);

  const optionMenuElement: MutableRefObject<any> = useClickOutside(() => setOpen(false));

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
    setOpen(!isOpen);
  };

  return (
    <Container className={className}>
      <div onClick={handleClick}>
        <StyledButton
          color={'info'}
          size={'small'}
          title={buttonTitle}
          startIcon={icon}
          iconButtonMode
          {...buttonProps}
        />
      </div>

      {isOpen && (
        <div ref={optionMenuElement}>
          <Menu
            onChangeSelectedItems={(item) => {
              if (onSelectItem) {
                onSelectItem(item);
              }
            }}
            selectedItems={selectedItems}
            items={[items]}
          />
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const StyledButton = styled(Button)`
  & .MuiButton-root {
    background-color: ${({ theme }) => theme.palette.grey[300]};
  }
  & .MuiTypography-root {
    color: ${({ theme }) => theme.palette.primary.dark};
  }
  & * {
    fill: ${({ theme }) => theme.palette.primary.dark};
  }
`;
