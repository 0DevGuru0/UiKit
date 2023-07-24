import { FC, ReactNode } from 'react';

import styled, { keyframes } from 'styled-components';

export interface CircleLoadingProps {
  loading: boolean;
  error?: string;
  customLoadingElement?: ReactNode;
  children: ReactNode;
}

export const CircleLoading: FC<CircleLoadingProps> = (props) => {
  const { loading, error, customLoadingElement, children } = props;
  if (loading) {
    return customLoadingElement ? (
      <>{customLoadingElement}</>
    ) : (
      <LoaderWrapper>
        <LoaderAnimation />
      </LoaderWrapper>
    );
  }
  if (error) {
    return <div>{error ?? 'We ran into a problem!'}</div>;
  }
  return <>{children}</>;
};

const Transition = keyframes`
 from {
   transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 40px;
  width: inherit;
  text-align: center;
  height: 200px;
`;

export const LoaderAnimation = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 auto;
  border-radius: 50%;
  animation-duration: 2s;
  animation-name: ${Transition};
  animation-iteration-count: infinite;
  border: 3px solid ${({ theme }) => theme.palette.grey[300]};
  border-top: 3px solid ${({ theme }) => theme.palette.primary.main};
`;
