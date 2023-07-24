import { FC } from 'react';

import styled, { FlattenSimpleInterpolation } from 'styled-components';

import { Pagination as MasterPagination } from '@avidkit/pagination';

export interface PaginationProps {
  totalCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  pageSize: number;
  customStyle?: FlattenSimpleInterpolation;
}

export const Pagination: FC<PaginationProps> = ({
  totalCount,
  currentPage,
  onPageChange,
  pageSize,
  customStyle,
}) => {
  return (
    <Wrapper customStyle={customStyle}>
      <MasterPagination
        currentPage={currentPage}
        onPageChange={onPageChange}
        pageSize={pageSize}
        totalCount={totalCount}
      />
    </Wrapper>
  );
};

interface IWrapper {
  customStyle?: FlattenSimpleInterpolation;
}

const Wrapper = styled.div<IWrapper>`
  & > div {
    background-color: unset;
  }

  .MuiButton-root.Mui-disabled {
    span {
      p {
        color: ${({ theme }) => theme.palette.grey[300]};
      }
      svg {
        fill: ${({ theme }) => theme.palette.grey[300]};
      }
    }
  }

  .PubActivePage p {
    color: #000;
  }

  button:hover p {
    color: ${({ theme }) => theme.palette.grey[300]};
  }

  ${({ customStyle }) => customStyle}
`;
