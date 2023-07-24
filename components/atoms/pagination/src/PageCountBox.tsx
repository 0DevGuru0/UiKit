import { Typography } from '@mui/material';
import styled from 'styled-components';
import { FC } from 'react';
import { PageCount } from './PageCount';

export interface IPageCountBox {
  pages: number[];
  currentPage: number;
  clickOnPageCount: (page: number) => void;
}

const PaginationCmp = ({ pages, currentPage, clickOnPageCount }: IPageCountBox) => {
  switch (true) {
    case pages.length > 7 && currentPage <= 4:
      return (
        <>
          {pages.map(
            (page, index) =>
              page <= 5 && (
                <PageCount
                  pageNumber={page}
                  key={`page-count-${index}`}
                  onClick={() => clickOnPageCount(page)}
                  current={currentPage === page}
                />
              ),
          )}
          <Divider variant="body1">...</Divider>
          <PageCount
            pageNumber={pages[pages.length - 1]}
            onClick={() => clickOnPageCount(pages[pages.length - 1])}
            current={currentPage === pages[pages.length - 1]}
          />
        </>
      );
    case pages.length > 7 && currentPage < pages[pages.length - 1] - 3:
      return (
        <>
          <PageCount
            pageNumber={pages[0]}
            onClick={() => clickOnPageCount(pages[0])}
            current={currentPage === pages[0]}
          />
          <Divider variant="body1">...</Divider>
          <PageCount
            pageNumber={pages[currentPage - 2]}
            onClick={() => clickOnPageCount(pages[currentPage - 2])}
            current={currentPage === pages[currentPage - 2]}
          />
          <PageCount
            pageNumber={pages[currentPage - 1]}
            onClick={() => clickOnPageCount(pages[currentPage - 1])}
            current={currentPage === pages[currentPage - 1]}
          />
          <PageCount
            pageNumber={pages[currentPage]}
            onClick={() => clickOnPageCount(pages[currentPage])}
            current={currentPage === pages[currentPage]}
          />
          <Divider variant="body1">...</Divider>
          <PageCount
            pageNumber={pages[pages.length - 1]}
            onClick={() => clickOnPageCount(pages[pages.length - 1])}
            current={currentPage === pages[pages.length - 1]}
          />
        </>
      );
    case pages.length > 7 && currentPage > pages[pages.length - 1] - 4:
      return (
        <>
          <PageCount
            pageNumber={pages[0]}
            onClick={() => clickOnPageCount(pages[0])}
            current={currentPage === pages[0]}
          />
          <Divider variant="body1">...</Divider>
          {pages.map(
            (page, index) =>
              page >= pages[pages.length - 1] - 4 && (
                <PageCount
                  pageNumber={page}
                  key={`page-count-${index}`}
                  onClick={() => clickOnPageCount(page)}
                  current={currentPage === page}
                />
              ),
          )}
        </>
      );
    default:
      return (
        <>
          {pages.map((page, index) => (
            <PageCount
              pageNumber={page}
              key={`page-count-${index}`}
              onClick={() => clickOnPageCount(page)}
              current={currentPage === page}
            />
          ))}
        </>
      );
  }
};

export const PageCountBox: FC<IPageCountBox> = (props) => {
  return (
    <Container>
      <PaginationCmp {...props} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Divider = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  font-size: 16px;
  padding: 5px;
  color: ${({ theme }) => theme.palette.grey[600]};
`;
