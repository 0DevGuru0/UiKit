import { FC, MutableRefObject, useState } from 'react';
import styled from 'styled-components';

import { useClickOutside } from '@avidkit/hooks';
import { ChevronDown } from '@avidkit/icons';
import { Options, OptionsProps } from '@avidkit/options';
import { Button, ButtonProps } from '@avidkit/button';

export type DropdownButtonProps = {
  buttonTitle: string;
  size?: ButtonProps['size'];
  disabled?: boolean;
  className?: string;
} & Pick<OptionsProps, 'sections'>;

export const DropdownButton: FC<DropdownButtonProps> = ({
  sections,
  className,
  size = 'small',
  disabled = false,
  buttonTitle,
}) => {
  const [isOpen, setOpen] = useState(false);

  const dropDownButtonElement: MutableRefObject<any> = useClickOutside(() =>
    setOpen(false),
  );

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    if (!disabled) {
      setOpen((prev) => !prev);
    }
  };

  const modifiedSections = sections.map((section) => {
    return section.map((action) => {
      return {
        ...action,
        onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          setOpen(false);
          if (action.onClick) {
            action.onClick(e);
          }
        },
      };
    });
  });

  return (
    <Container className={className} ref={dropDownButtonElement}>
      <Button
        label={buttonTitle}
        size={size}
        variant="solid"
        disabled={disabled}
        onClick={handleClick}
        endIcon={<StyledChevronDown />}
      />
      {isOpen && <StyledOptions sections={modifiedSections} />}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: fit-content;
`;

const StyledOptions = styled(Options)`
  position: absolute;
  max-width: 150px;
  margin-top: 1px;
`;

const StyledChevronDown = styled(ChevronDown)`
  path,
  use {
    fill: ${({ theme }) => theme.palette.grey[100]};
  }
`;
