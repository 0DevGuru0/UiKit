import { ReactNode } from 'react';

import styled, { css } from 'styled-components';

export interface OptionContentProps {
  label: string;
  color?: string;
  icon?: {
    hover?: ReactNode;
    default: ReactNode;
    position?: 'start' | 'end';
  };
  hoverColor?: {
    icon: string;
    background: string;
  };
}

export const OptionContent = ({ label, icon, hoverColor, color }: OptionContentProps) => {
  const iconPosition = icon?.position ?? 'start';

  const iconElement = (
    <>
      <Icon $color={color}>{icon?.default}</Icon>
      <HoveredIcon $hoverColor={hoverColor?.icon}>{icon?.hover}</HoveredIcon>
    </>
  );

  return (
    <Container>
      {iconPosition === 'start' && iconElement}
      <Label $color={color}>{label}</Label>
      <LabelHovered $color={color} $hoverColor={hoverColor?.icon}>
        {label}
      </LabelHovered>
      {iconPosition === 'end' && iconElement}
    </Container>
  );
};

interface LabelProps {
  $hoverColor?: string;
  $color?: string;
}

const Label = styled.div<LabelProps>`
  flex-grow: 1;
  padding: 0px 6px;
  line-height: 18px;
  height: 18px;
  font-size: 14px;
  pointer-events: none;
  font-weight: 400;
  color: ${({ theme, $color }) => $color ?? theme.palette.grey[700]};
`;

const LabelHovered = styled(Label)`
  font-weight: 600;
  color: ${({ theme, $hoverColor, $color }) =>
    $hoverColor ?? $color ?? theme.palette.primary.main};
`;

interface IconProps {
  $color?: string;
  $hoverColor?: string;
}

const svgStyle = css`
  pointer-events: none;
  svg {
    display: block;
    width: 18px;
    height: 18px;
  }
`;

const Icon = styled.div<IconProps>`
  ${svgStyle}
  color: ${({ theme, $color }) => $color ?? theme.palette.grey[600]};
`;

const HoveredIcon = styled.div<IconProps>`
  ${svgStyle}
  color: ${({ theme, $hoverColor, $color }) =>
    $hoverColor ?? $color ?? theme.palette.primary.main};
`;

const Container = styled.div`
  padding: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover ${Label}, &:hover ${Icon} {
    display: none;
    visibility: hidden;
  }

  ${LabelHovered}, ${HoveredIcon} {
    display: none;
    visibility: hidden;
  }

  &:hover ${LabelHovered}, &:hover ${HoveredIcon} {
    display: block;
    visibility: visible;
  }
`;
