import styled, { css } from 'styled-components';
import { Fragment, ReactElement } from 'react';

export interface IconsAndLabelsSummaryProps {
  items: {
    icon: ReactElement;
    label: string | ReactElement;
    description: string | number;
  }[];
  size?: 'sm' | 'md';
  isIconLarge?: boolean;
  isDescriptionBold?: boolean;
  className?: string;
}

export const IconsAndLabelsSummary = (props: IconsAndLabelsSummaryProps) => {
  const { items, size = 'md', isIconLarge, isDescriptionBold, className } = props;
  return (
    <Container $size={size} className={className}>
      {items.map((item, index) => {
        const isDividerRequired = items.length > 1 && index < items.length - 1;
        return (
          <Fragment key={`icon-label-${index}${item.label}`}>
            <Column>
              <Icon $isIconLarge={isIconLarge}>{item.icon}</Icon>
              <Content>
                <Label>{item.label}</Label>
                <Description $isDescriptionBold={isDescriptionBold}>
                  {item.description}
                </Description>
              </Content>
            </Column>
            {isDividerRequired && <Divider key={`divider-${index}${item.label}`} />}
          </Fragment>
        );
      })}
    </Container>
  );
};

const fontSize = {
  sm: '12px',
  md: '16px',
};

interface ContainerProps {
  $size: 'sm' | 'md';
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: ${({ $size }) => fontSize[$size]};
  padding: 0 12px;
`;

const Column = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 6px;
`;

const Label = styled.div`
  margin-top: 2px;
  font-size: 12px;
  font-weight: 400;
`;

interface DescriptionProps {
  $isDescriptionBold?: boolean;
}

const Description = styled.div<DescriptionProps>`
  margin-top: 6px;
  color: ${({ theme }) => theme.palette.grey[800]};
  font-size: 12px;
  font-weight: ${({ $isDescriptionBold }) => ($isDescriptionBold ? 'bold' : 'unset')};
`;

const Divider = styled.div`
  width: 1px;
  height: 40px;
  background-color: ${({ theme }) => theme.palette.grey[300]};
  margin: 0 24px;
`;

interface IconProps {
  $isIconLarge?: boolean;
}

const Icon = styled.div<IconProps>`
  align-self: flex-start;
  ${({ $isIconLarge }) =>
    $isIconLarge
      ? css`
          height: 40px;
          width: 40px;
          & > svg {
            height: 40px;
            width: 40px;
          }
        `
      : css`
          height: 20px;
          width: 20px;
          & > svg {
            height: 20px;
            width: 20px;
          }
        `}
`;
