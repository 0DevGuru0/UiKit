import { ReactNode } from 'react';
import styled, { useTheme, css } from 'styled-components';

export interface IconWrapperProps {
  disableRotationInRtl?: boolean;
  children?: ReactNode;
  className?: string;
}

export const IconWrapper = (props: IconWrapperProps) => {
  const { disableRotationInRtl, className } = props;

  const theme = useTheme();
  const isRtl = theme.direction === 'rtl';
  const shouldRotate = isRtl && !disableRotationInRtl;

  return (
    <Container $shouldRotate={shouldRotate} className={className}>
      {props.children}
    </Container>
  );
};

interface ContainerProps {
  $shouldRotate?: boolean;
}

const Container = styled.div<ContainerProps>`
  ${({ $shouldRotate }) =>
    $shouldRotate &&
    css`
      & > svg {
        transform: rotateY(180deg);
      }
    `}
`;
