import { FC, ReactElement } from 'react';

import styled from 'styled-components';

import { rgba } from 'polished';

import { OptionContent, OptionContentProps } from './OptionItem/OptionContent';

export interface OptionRendererProps {
  item: { title: string; href?: string; disabled?: boolean };
  itemCmp: ReactElement;
  itemCmpWithoutLink: ReactElement;
}

export interface OptionItemProps {
  label: string;
  href?: string;
  disabled?: boolean;
  icon?: OptionContentProps['icon'];
  hoverColor?: OptionContentProps['hoverColor'];
  color?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  optionRenderer?: (args: OptionRendererProps) => ReactElement;
}

export const OptionItem: FC<OptionItemProps> = ({
  icon,
  href,
  label,
  disabled = false,
  hoverColor,
  color,
  optionRenderer,
  onClick,
}) => {
  const item = (
    <ItemRow $backgroundHover={hoverColor?.background} $disabled={disabled}>
      <OptionContent label={label} icon={icon} hoverColor={hoverColor} color={color} />
    </ItemRow>
  );

  const itemLink = (
    <LinkedItem href={href} onClick={onClick}>
      {item}
    </LinkedItem>
  );

  return (
    <>
      {optionRenderer
        ? optionRenderer({
            item: { title: label, disabled, href },
            itemCmp: itemLink,
            itemCmpWithoutLink: item, // naming is for backward compatibility
          })
        : itemLink}
    </>
  );
};

interface ItemRowProps {
  $backgroundHover?: string;
  $disabled: boolean;
}

const LinkedItem = styled.a`
  margin: 0;
  padding: 0;
  text-decoration: none;
`;

const ItemRow = styled.div<ItemRowProps>`
  margin: 0;
  padding: 0;
  width: inherit;
  cursor: pointer;
  border-radius: 4px;

  // disabled
  pointer-events: ${({ $disabled }) => $disabled && 'none'};
  opacity: ${({ $disabled }) => $disabled && '0.5'};

  user-select: none;
  box-sizing: border-box;

  &:hover {
    background-color: ${({ $backgroundHover, theme }) =>
      $backgroundHover ?? rgba(theme.palette.primary.light, 0.1)};
  }

  & svg {
    width: 18px;
    height: 18px;
  }
`;
