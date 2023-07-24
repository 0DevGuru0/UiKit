/* eslint-disable sonarjs/cognitive-complexity */
import { rgba } from 'polished';
import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

export interface StatusProps {
  /**
   * default: grey
   */
  type?: 'grey' | 'warning' | 'error' | 'success';
  /**
   * default: filled
   */
  variant?: 'filled' | 'outlined';
  children?: ReactNode;
  className?: string;
}

export const Status = (props: StatusProps) => {
  const { type = 'grey', variant = 'filled', children, className } = props;

  return (
    <Container className={className}>
      <StatusContainer
        type={type}
        variant={variant}
        className={` ${variant === 'outlined' ? 'AK-OutlinedStatus' : 'AK-FilledStatus'}`}
      >
        <ChildrenContainer>{children}</ChildrenContainer>
      </StatusContainer>
    </Container>
  );
};

// This container is required to change the colors and backgrounds using styled-components
const Container = styled.div`
  width: fit-content;
  height: 20px;
`;

const StatusContainer = styled.div<Omit<StatusProps, 'children'>>`
  width: fit-content;
  height: 20px;
  padding: 0 6px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ type, variant, theme }) => {
    switch (type) {
      case 'success':
        return css`
          color: ${variant === 'outlined'
            ? theme.palette.success[500]
            : theme.palette.grey[100]};
          background-color: ${variant === 'outlined'
            ? rgba(theme.palette.success[100], 0.5)
            : theme.palette.success[500]};
          border: ${variant === 'outlined'
            ? `1px solid ${theme.palette.success[500]}}`
            : 'unset'};
        `;
      case 'warning':
        return css`
          color: ${variant === 'outlined'
            ? theme.palette.warning[600]
            : theme.palette.grey[900]};
          background-color: ${variant === 'outlined'
            ? rgba(theme.palette.warning[100], 0.5)
            : theme.palette.warning[500]};
          border: ${variant === 'outlined'
            ? `1px solid ${theme.palette.warning[600]}`
            : 'unset'};
        `;
      case 'error':
        return css`
          color: ${variant === 'outlined'
            ? theme.palette.error[500]
            : theme.palette.grey[100]};
          background-color: ${variant === 'outlined'
            ? rgba(theme.palette.error[100], 0.5)
            : theme.palette.error[500]};
          border: ${variant === 'outlined'
            ? `1px solid ${theme.palette.error[500]}`
            : 'unset'};
        `;
      default:
        return css`
          color: ${variant === 'outlined'
            ? theme.palette.grey[700]
            : theme.palette.grey[100]};
          background-color: ${variant === 'outlined'
            ? theme.palette.grey[200]
            : theme.palette.grey[700]};
          border: ${variant === 'outlined'
            ? `1px solid ${theme.palette.grey[700]}`
            : 'unset'};
        `;
    }
  }}
`;

const ChildrenContainer = styled.div`
  height: 16px;
  line-height: 16px;
`;
