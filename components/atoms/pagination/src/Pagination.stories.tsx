import { useState } from 'react';

import { Pagination } from './Pagination';

export default {
  title: 'Atoms / Pagination',
  component: Pagination,
};

export const PaginationCmp = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      pageSize={5}
      totalCount={60}
    />
  );
};
