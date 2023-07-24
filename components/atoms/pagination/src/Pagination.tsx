import styled from 'styled-components';

import { first, last } from 'lodash';
import { PaginationWithCount } from './PaginationWithCount';
import { PageCountBox } from './PageCountBox';

export interface PaginationProps {
  totalCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  pageSize: number;
  className?: string;
}

export const Pagination = ({
  totalCount,
  currentPage,
  onPageChange,
  pageSize,
  className,
}: PaginationProps) => {
  const pages = Array.from({ length: Math.ceil(totalCount / pageSize) }, (_, i) => i + 1);

  const nextPageHandler = () => {
    if (currentPage < pages.length) {
      onPageChange(currentPage + 1);
    }
  };

  const prevPageHandler = () => {
    if (currentPage > pages[0]) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <Container className={className}>
      <PaginationWithCount
        nextPageHandler={nextPageHandler}
        prevPageHandler={prevPageHandler}
        hasNextPage={currentPage !== last(pages)}
        hasPrevPage={currentPage !== first(pages)}
        nextButtonText="Next"
        prevButtonText="Prev"
      >
        <PageCountBox
          pages={pages}
          currentPage={currentPage}
          clickOnPageCount={onPageChange}
        />
      </PaginationWithCount>
    </Container>
  );
};

const Container = styled.div`
  & > div {
    background-color: unset;
  }

  & .MuiButton-root.Mui-disabled {
    span {
      p {
        color: ${({ theme }) => theme.palette.grey[700]};
      }
      svg {
        fill: ${({ theme }) => theme.palette.grey[700]};
      }
    }
  }

  & .PubActivePage p {
    color: #000;
  }

  & button:hover p {
    color: ${({ theme }) => theme.palette.grey[700]};
  }
`;
