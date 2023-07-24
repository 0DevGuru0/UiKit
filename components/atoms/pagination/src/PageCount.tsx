import styled from 'styled-components';
import { Button, ButtonProps, Typography } from '@mui/material';

export interface IPageCount extends ButtonProps {
  pageNumber: number;
  current?: boolean;
}

export const PageCount = ({ children, ...props }: IPageCount) => {
  const { pageNumber, current = false, ...rest } = props;

  return (
    <StyledButton
      {...rest}
      className={current ? 'PubActivePage' : undefined}
      $current={current}
    >
      <Typography variant="body1">{pageNumber}</Typography>
    </StyledButton>
  );
};

const StyledButton = styled(Button)<{ $current: boolean }>`
  &.MuiButton-root {
    display: flex;
    position: relative;
    min-width: 0;
    padding: 5px;
    border-radius: ${({ theme }) => theme.spacing()};
    background-color: 'transparent';
    opacity: 1;
    transition: 'all 0.1s linear';
    & > p {
      min-width: 26px;
      font-weight: ${({ $current }) => ($current ? 'bold' : 'normal')};
      color: ${({ $current, theme }) =>
        $current ? theme.palette.grey[200] : theme.palette.grey[700]};
      transition: 'all 0.1s linear';
    }
    &:hover {
      background-color: ${({ theme }) => theme.palette.grey[800]};
      & > p {
        font-weight: 'bold';
        color: ${({ theme }) => theme.palette.grey[100]};
      }
    }
    &::after {
      content: '';
      position: absolute;
      width: 6px;
      height: 3px;
      background-color: ${({ $current, theme }) =>
        $current ? theme.palette.primary.main : 'transparent'};
      border-radius: 1px;
      bottom: 2px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
