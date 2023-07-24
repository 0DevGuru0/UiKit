import { FC, ReactElement } from 'react';

import { LogoIknitoSf } from '@avidkit/icons';
import styled, { css } from 'styled-components';

interface Props {
  isOpen?: boolean;
  openSidebarLogo?: ReactElement;
  closeSidebarLogo?: ReactElement;
}

export const DefaultHeader: FC<Props> = ({
  isOpen,
  openSidebarLogo,
  closeSidebarLogo,
}) => {
  const logo = isOpen ? openSidebarLogo : closeSidebarLogo;
  return <HeaderWrapper isOpen={isOpen}>{logo ?? <DefaultLogo />}</HeaderWrapper>;
};

interface HeaderWrapperProps {
  isOpen?: boolean;
}

const svgStyle = css`
  width: 111px;
  height: 36px;
`;

const HeaderWrapper = styled.div<HeaderWrapperProps>`
  height: 36px;
  display: flex;
  svg {
    ${svgStyle}
  }
  width: ${({ isOpen }) => !isOpen && '48px'};
`;

const DefaultLogo = styled(LogoIknitoSf)`
  ${svgStyle}
`;
