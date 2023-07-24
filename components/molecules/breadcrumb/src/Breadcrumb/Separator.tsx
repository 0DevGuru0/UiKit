import { FC } from 'react';
import { ChevronRight } from '@avidkit/icons';
import styled from 'styled-components';

export type TextVariants = 'head' | 'normal' | 'small';
export type SeparatorVariants = '>' | '<' | '/' | '|' | '\\';

export interface SeparatorProps {
  variant: TextVariants;
  separator: SeparatorVariants;
}

export const Separator: FC<SeparatorProps> = ({ variant, separator }) => {
  return (
    <Container $variant={variant}>
      {separator === '>' ? <ChevronRight /> : <TextSeparator>{separator}</TextSeparator>}
    </Container>
  );
};

interface ContainerProps {
  $variant: TextVariants;
}

const Container = styled.div<ContainerProps>`
  margin: 0 1px;
  display: flex;
  line-height: 0.9;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.grey[700]};
  font-size: ${({ $variant }) => {
    if ($variant === 'head') {
      return '20px';
    } else if ($variant === 'small') {
      return '12px';
    } else {
      return '16px';
    }
  }};
  transform: ${({ theme }) => (theme.direction === 'rtl' ? 'rotateY(180deg)' : 'unset')};
  & > svg {
    align-self: center;
    width: ${({ $variant }) => ($variant === 'small' ? '15px' : '18px')};
    height: ${({ $variant }) => ($variant === 'small' ? '15px' : '18px')};
    path,
    use {
      fill: ${({ theme }) => theme.palette.grey[500]};
    }
  }
`;

const TextSeparator = styled.span`
  margin: 0 3px;
`;
