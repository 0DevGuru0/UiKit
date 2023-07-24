import { FC, useState, ReactNode, useCallback } from 'react';
import styled, { css } from 'styled-components';

import { Options, OptionsProps } from '@avidkit/options';
import { IconButton, IconSize } from '@avidkit/icon-button';
import { useClickOutside } from '@avidkit/hooks';
import { Close, MoreHorizontal, VerticalMore } from '@avidkit/icons';

export type MoreOptionsProps = {
  variant: 'horizontal' | 'vertical';
  contained?: boolean;
  size?: IconSize;
  disabled?: boolean;
  className?: string;
  maxWidth?: number;
  minWidth?: number;
  icon?: ReactNode;
  handleToggleOptions?: (isOpen: boolean) => void;
} & Pick<OptionsProps, 'sections' | 'optionRenderer'>;

export const MoreOptions: FC<MoreOptionsProps> = ({
  sections,
  className,
  variant,
  contained,
  size = 'Md',
  maxWidth,
  minWidth,
  disabled = false,
  icon,
  handleToggleOptions,
  optionRenderer,
}) => {
  const [isOpen, setOpen] = useState(false);

  const onClose = useCallback(() => {
    setOpen(false);
    if (handleToggleOptions) handleToggleOptions(false);
  }, [handleToggleOptions]);

  const onOpen = useCallback(() => {
    setOpen(true);
    if (handleToggleOptions) handleToggleOptions(true);
  }, [handleToggleOptions]);

  const optionMenuElement = useClickOutside(onClose);

  const handleIconClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (!disabled) {
      if (isOpen) {
        onClose();
      } else {
        onOpen();
      }
    }
  };

  const actionIcon = isOpen ? (
    <CloseIcon />
  ) : icon ? (
    icon
  ) : (
    <MoreIconWrapper>
      {variant === 'horizontal' ? <MoreHorizontal /> : <VerticalMore />}
    </MoreIconWrapper>
  );

  return (
    <Container className={className}>
      <IconButton
        icon={actionIcon}
        size={size}
        color="Normal"
        variant={contained ? 'Contained' : 'Free'}
        disabled={disabled}
        onClick={handleIconClick}
      />
      {isOpen && (
        <div ref={optionMenuElement}>
          <StyledOptions
            $maxWidth={maxWidth}
            $minWidth={minWidth}
            sections={sections}
            optionRenderer={optionRenderer}
          />
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 18px;
`;

interface StyledOptionsProps {
  $minWidth?: number;
  $maxWidth?: number;
}

const StyledOptions = styled(Options)<StyledOptionsProps>`
  position: absolute;
  right: 0;
  left: unset;
  width: max-content;
  min-width: ${({ $minWidth }) => ($minWidth ? `${$minWidth}px` : '140px')};
  max-width: ${({ $maxWidth }) => ($maxWidth ? `${$maxWidth}px` : 'default')};
  margin-top: 6px;
`;

const iconSize = css`
  width: 18px;
  height: 18px;
`;

const CloseIcon = styled(Close)`
  ${iconSize}
  display: block;
  path {
    fill: ${({ theme }) => theme.palette.grey[600]};
  }
  :hover path {
    fill: ${({ theme }) => theme.palette.grey[700]};
  }
`;

const MoreIconWrapper = styled.div`
  > svg {
    ${iconSize}
    display: block;
    path {
      fill: ${({ theme }) => theme.palette.grey[700]};
    }
    :hover path {
      fill: ${({ theme }) => theme.palette.grey[800]};
    }
  }
`;
