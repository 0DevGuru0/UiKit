import { FC } from 'react';

import styled from 'styled-components';

import { Tooltip } from '@avidkit/tooltip';

import { ClickableItem } from '../Footer';

export const FooterIconLink: FC<ClickableItem> = ({
  href,
  label,
  icon,
  variant = 'TROWEB',
  onClick,
}) => {
  return (
    <Link
      href={onClick ? '' : href}
      target={onClick ? '_parent' : '_blank'}
      onClick={onClick}
    >
      <Tooltip title={label} arrow>
        <IconWrapper>
          <HoveredIcon label={label} variant={variant}>
            {icon?.hover}
          </HoveredIcon>
          <Icon>{icon?.default}</Icon>
        </IconWrapper>
      </Tooltip>
    </Link>
  );
};

const Link = styled.a`
  margin: auto 0 auto 12px;
  position: relative;
`;

const IconWrapper = styled.div`
  cursor: pointer;
  svg {
    height: 20px;
    width: 20px;
  }
`;

const Icon = styled.div`
  pointer-events: none;
  path,
  use {
    fill: ${({ theme }) => theme.palette.grey[400]};
  }
  ${IconWrapper}:hover & {
    display: none;
  }
`;

const HoveredIcon = styled(Icon)<ClickableItem>`
  display: none;
  pointer-events: none;
  path,
  use {
    fill: ${({ theme, variant }) =>
      variant === 'TROWEB' ? theme.palette.info.main : theme.palette.primary.main};
  }
  ${IconWrapper}:hover & {
    display: block;
  }
`;
