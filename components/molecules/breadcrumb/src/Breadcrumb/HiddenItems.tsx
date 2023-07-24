import styled, { useTheme } from 'styled-components';
import { FC, useCallback, useState } from 'react';
import { BreadcrumbStep } from '../Breadcrumb';
import { Tooltip } from '@avidkit/tooltip';
import { Options, OptionsProps } from '@avidkit/options';
import { useClickOutside } from '@avidkit/hooks';
import { Separator, SeparatorProps, TextVariants } from './Separator';
import { MoreHorizontalFill } from '@avidkit/icons';

export type HiddenItemsProps = {
  items: BreadcrumbStep[];
  otherTooltipTitle: string;
  itemRenderer: OptionsProps['optionRenderer'];
} & SeparatorProps;

export const HiddenItems: FC<HiddenItemsProps> = ({
  items,
  separator,
  variant,
  itemRenderer,
  otherTooltipTitle,
}) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const theme = useTheme();
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen(!isMenuOpen), [isMenuOpen]);
  const optionMenuElement = useClickOutside(closeMenu);

  return (
    <>
      <More $isOpen={isMenuOpen} onClick={toggleMenu}>
        <StyledTooltip title={otherTooltipTitle} $isOpen={isMenuOpen}>
          <StyledMoreSvgIconWrapper>
            <StyledMoreSvgIcon $variant={variant} $isOpen={isMenuOpen} />
          </StyledMoreSvgIconWrapper>
        </StyledTooltip>
        <div ref={optionMenuElement}>
          <StyledOptionsMenu
            $isOpen={isMenuOpen}
            optionRenderer={itemRenderer}
            sections={[
              items.map((el) => ({
                href: el.href,
                label: el.title,
                disabled: el.disabled,
                hoverColor: {
                  background: theme.palette.primary.light,
                  icon: theme.palette.grey[700],
                },
                onClick: el.onClick,
              })),
            ]}
          />
        </div>
      </More>
      <Separator variant={variant} separator={separator} />
    </>
  );
};

interface StyledOptionsMenuProps {
  $isOpen: boolean;
}

const More = styled.span<StyledOptionsMenuProps>`
  cursor: pointer;
  font-size: 20px;
  line-height: 24px;
  display: inline-block;
  color: ${({ theme, $isOpen }) =>
    $isOpen ? theme.palette.info.main : theme.palette.grey[700]};
  &:hover {
    color: ${({ theme }) => theme.palette.info.main};
  }
`;

const StyledTooltip = styled(Tooltip)<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  border-radius: 4px;
  background-color: ${({ theme, $isOpen }) =>
    $isOpen ? theme.palette.primary[200] : 'transparent'};

  &:hover {
    background-color: ${({ theme, $isOpen }) => !$isOpen && theme.palette.primary[100]};
  }

  &:active {
    background-color: ${({ theme }) => theme.palette.primary[200]};
  }
`;

interface MoreSvgTypes {
  $variant: TextVariants;
  $isOpen: boolean;
}

const StyledMoreSvgIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledMoreSvgIcon = styled(MoreHorizontalFill)<MoreSvgTypes>`
  width: ${({ $variant }) => ($variant === 'small' ? '15px' : '18px')};
  height: ${({ $variant }) => ($variant === 'small' ? '15px' : '18px')};

  &:hover {
    path {
      fill: ${({ theme }) => theme.palette.primary[500]};
    }
  }

  path {
    fill: ${({ theme, $isOpen }) =>
      $isOpen ? theme.palette.primary[500] : theme.palette.grey[500]};
  }
`;

const StyledOptionsMenu = styled(Options)<StyledOptionsMenuProps>`
  z-index: 1000;
  padding: 0;
  position: absolute;
  transform: translate(-45%, 6px);
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
`;
