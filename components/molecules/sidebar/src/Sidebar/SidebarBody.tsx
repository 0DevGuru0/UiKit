import { FC, ReactNode } from 'react';
import { isEmpty } from 'lodash';

import styled from 'styled-components';

import { Button } from './SidebarBody/Button';

export interface ServiceConfig {
  iconFilled?: ReactNode;
  href: string;
  label: string;
  icon: ReactNode;
}

interface Props {
  sections: Record<string, ServiceConfig[]>;
  currentPage: string;
  notifications?: number;
  className?: string;
}

export const SidebarBody: FC<Props> = ({
  sections,
  currentPage,
  notifications,
  className,
}) => {
  let sidebarElements: JSX.Element[] = [];

  for (const [group, buttons] of Object.entries(sections)) {
    const ButtonElements = buttons.map((page) => (
      <Button
        key={page.label}
        isPrimary
        isActive={page.href === currentPage}
        notifications={notifications}
        {...page}
      />
    ));

    const separatorElement = (
      <SeparatorContainer key={`${group}-separator`}>
        <SeparatorText>{group}</SeparatorText>
      </SeparatorContainer>
    );

    sidebarElements = sidebarElements.concat(
      !isEmpty(sidebarElements) ? [separatorElement, ...ButtonElements] : ButtonElements,
    );
  }

  return <div className={className}>{sidebarElements}</div>;
};

const SeparatorContainer = styled.div`
  padding: 12px;
`;

const SeparatorText = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: ${({ theme }) => theme.palette.grey[400]};
`;
