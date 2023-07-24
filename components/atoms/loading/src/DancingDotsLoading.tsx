import { FC } from 'react';
import styled from 'styled-components';
import { DotsPlayer } from './DotsPlayer';
export interface DancingDotsLoadingProps {
  size: 'xsmall' | 'small' | 'medium' | 'large';
  loadingText?: string;
  title?: string;
  label?: string;
  className?: string;
}
export const DancingDotsLoading: FC<DancingDotsLoadingProps> = (props) => {
  const { size = 'large', title = 'loading', label = 'loading', className } = props;

  return (
    <LoadingContainer role="progressbar" title={title} className={className}>
      <Text size={size}>{label}</Text>
      <DotsPlayer size={size} />
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1.94;
`;

const getFontSize = (size: DancingDotsLoadingProps['size']) => {
  switch (size) {
    case 'small':
      return '14px';
    case 'medium':
      return '16px';
    case 'large':
      return '18px';
    default:
      return '18px';
  }
};
const getFontWeight = (size: DancingDotsLoadingProps['size']) => {
  switch (size) {
    case 'small':
      return '500';
    case 'medium':
      return '700';
    case 'large':
      return '700';
    default:
      return '700';
  }
};
const Text = styled.div<{ size: DancingDotsLoadingProps['size'] }>`
  font-size: ${({ size }) => getFontSize(size)};
  font-weight: ${({ size }) => getFontWeight(size)};
`;
