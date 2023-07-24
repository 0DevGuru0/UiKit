import styled, { useTheme } from 'styled-components';
import { FC } from 'react';

import { Breadcrumb } from '@avidkit/breadcrumb';

export interface LabelWithBreadcrumbProps {
  className?: string;
  label: string;
  items: string[];
}

export const LabelWithBreadcrumb: FC<LabelWithBreadcrumbProps> = (
  props: LabelWithBreadcrumbProps,
) => {
  const { className, label, items } = props;
  const breadCrumbItems = items.map((item) => ({
    title: item,
  }));

  const theme = useTheme();
  const rtl = theme.direction === 'rtl';

  return (
    <Container className={className}>
      <Label>{label}</Label>
      <Breadcrumb
        items={breadCrumbItems}
        variant="normal"
        boldLastItem={false}
        separator={rtl ? '/' : '\\'}
        threshold={3}
      />
    </Container>
  );
};

const Label = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.grey[800]};
`;
const Container = styled.div`
  width: 100%;
  height: 96px;
  border-radius: 8px;
  padding: 24px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #f7fafe;
  justify-content: space-between;
`;
