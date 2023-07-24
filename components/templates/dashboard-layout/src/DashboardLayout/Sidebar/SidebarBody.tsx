import { FC } from 'react';

import clsx from 'classnames';
import styled from 'styled-components';

import { ServiceConfig, SidebarProps } from '../Sidebar';

import { Button } from './SidebarBody/Button';

type Props = Pick<
  SidebarProps,
  | 'separatorColor'
  | 'separatorTextColor'
  | 'indicatorStyle'
  | 'anchorElement'
  | 'setConfig'
> & {
  isOpen: boolean;
  sections: Record<string, ServiceConfig[]>;
  currentPage: string;
  notifications?: number;
  className?: string;
};

export const SidebarBody: FC<Props> = ({
  sections,
  isOpen,
  currentPage,
  notifications,
  className,
  separatorColor,
  separatorTextColor,
  indicatorStyle,
  anchorElement,
  setConfig,
}) => {
  let sidebarElements: JSX.Element[] = [];

  for (const [group, buttons] of Object.entries(sections)) {
    const ButtonElements = buttons.map((page, index) => {
      const childrenHref = page.child?.map((child) => child.href);
      const isMainPage = /^\/\w+$/.test(page.href);

      return (
        <Button
          anchorElement={anchorElement}
          key={page.label}
          isPrimary
          isActive={
            page.href === currentPage ||
            childrenHref?.includes(currentPage) ||
            (!isMainPage && currentPage?.includes(page.href))
          }
          withLabel={isOpen}
          notifications={notifications}
          indicatorStyle={indicatorStyle}
          setConfig={setConfig}
          child={page.child}
          {...page}
        />
      );
    });

    const separatorElement = (
      <SeparatorContainer key={`${group}-separator`} isOpen={isOpen}>
        {isOpen ? (
          <SeparatorText color={separatorTextColor}>{group}</SeparatorText>
        ) : (
          <Separator color={separatorColor} />
        )}
      </SeparatorContainer>
    );

    sidebarElements = sidebarElements.concat(
      group !== 'Main' ? [separatorElement, ...ButtonElements] : ButtonElements,
    );
  }

  return (
    <Container className={clsx('sidebarBody', className)}>{sidebarElements}</Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
`;

interface SeparatorContainerProps {
  isOpen: boolean;
}

const SeparatorContainer = styled.div<SeparatorContainerProps>`
  padding: ${({ isOpen }) => (isOpen ? '12px' : '14px 36px 15px 12px')};
`;

const SeparatorText = styled.div<SeparatorProps>`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: ${({ color, theme }) => (color ? color : theme.palette.grey[400])};
`;

interface SeparatorProps {
  color?: string;
}

const Separator = styled.hr<SeparatorProps>`
  border: 1px solid ${({ color, theme }) => (color ? color : theme.palette.grey[600])};
`;
