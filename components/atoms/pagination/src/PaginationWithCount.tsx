import { Button, Typography } from '@mui/material';
import styled, { css, useTheme } from 'styled-components';
import { FC, ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from '@avidkit/icons';

export interface IPaginationWithCount {
  nextPageHandler: () => void;
  prevPageHandler: () => void;
  hasNextPage?: boolean;
  hasPrevPage?: boolean;
  nextButtonText: string;
  prevButtonText: string;
  children: ReactNode;
}

export const PaginationWithCount: FC<IPaginationWithCount> = ({ children, ...props }) => {
  const {
    nextButtonText,
    prevButtonText,
    nextPageHandler,
    prevPageHandler,
    hasNextPage,
    hasPrevPage,
  } = props;
  const theme = useTheme();
  const rtl = theme.direction === 'rtl';

  return (
    <Container>
      <StyledButton onClick={prevPageHandler} disabled={!hasPrevPage}>
        {!rtl ? <ChevronLeft /> : <ChevronRight />}
        <Typography variant="body2">{prevButtonText}</Typography>
      </StyledButton>
      <ChildrenContainer>{children}</ChildrenContainer>
      <StyledButton onClick={nextPageHandler} disabled={!hasNextPage}>
        <Typography variant="body2">{nextButtonText}</Typography>
        {rtl ? <ChevronLeft /> : <ChevronRight />}
      </StyledButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  padding: 6px;
  background-color: ${({ theme }) => theme.palette.grey[200]};
  border-radius: ${({ theme }) => theme.spacing()};
`;

const StyledButton = styled(Button)`
  ${({ theme }) => css`
    &.MuiButton-root {
      text-transform: capitalize;
      padding: 12px;
      border-radius: ${theme.spacing()};
      & > p {
        transition: 'all 0.1s linear';
        color: ${theme.palette.grey[700]};
      }
      & > svg path,
      & > svg {
        fill: ${theme.palette.grey[700]};
      }
      &:hover {
        background-color: ${`${theme.palette.grey[400]}`};
        & > p {
          color: ${theme.palette.grey[700]};
        }
      }
    }
    &.Mui-disabled {
      & > p {
        color: ${theme.palette.grey[600]};
      }
      & > svg path,
      & > svg {
        fill: ${theme.palette.grey[600]};
      }
    }
  `}
`;

const ChildrenContainer = styled.div`
  & > p {
    color: ${({ theme }) => theme.palette.grey[600]};
  }
`;
