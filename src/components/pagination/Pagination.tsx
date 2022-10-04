import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { StyledContainer } from './Pagination.styles';

type PropType = {
  countPages: number;
};

const Pagination: FC<PropType> = ({ countPages }) => {
  const [paginationArray, setPagginationArray] = useState<number[]>([]);
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useSearchParams();

  let countPaginationPages = Math.ceil(countPages / +process.env.REACT_APP_PER_PAGE!);
  if (!countPaginationPages) {
    countPaginationPages = 1;
  }

  const onPageClick = (pageNumber: number) => {
    setPage(pageNumber);
    searchQuery.set('page', pageNumber.toString());
    setSearchQuery({ page: pageNumber.toString() });
  };

  const onForwardClick = () => {
    if (page === countPaginationPages - 1) {
      return;
    }

    searchQuery.set('page', (page + 1).toString());
    setSearchQuery({ page: (page + 1).toString() });

    setPage((state) => {
      return state + 1;
    });
  };

  const onBackClick = () => {
    if (page === 0) {
      return;
    }

    searchQuery.set('page', (page - 1).toString());
    setSearchQuery({ page: (page - 1).toString() });

    setPage((state) => {
      return state - 1;
    });
  };

  useEffect(() => {
    (() => {
      const tempPagination: number[] = [];

      for (let i = 0; i < countPaginationPages; i++) {
        tempPagination.push(i);
      }
      if (page > tempPagination.length - 1) {
        setPage(0);
      }
      setPagginationArray([...tempPagination]);
    })();
  }, [countPaginationPages, page]);

  useEffect(() => {
    const currentPage = searchQuery.get('page') || 0;
    setPage(+currentPage);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledContainer className="pagination">
      <div className="pagination-container">
        <div className="pagination-button back-button" onClick={onBackClick}>❮</div>
        {paginationArray.map((item) => {
          return (
            <div
              key={item}
              onClick={() => onPageClick(item)}
              className={`circle ${page === item && 'active'}`}
            />
          );
        })}
        <div className="pagination-button  forward-button" onClick={onForwardClick}>❯</div>
      </div>
    </StyledContainer>
  );
};

export default Pagination;
