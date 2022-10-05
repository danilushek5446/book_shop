import type { FC } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { config } from '../../config';

import { StyledContainer } from './Pagination.styles';

type PropType = {
  countPages: number;
};

const Pagination: FC<PropType> = ({ countPages }) => {
  const [searchQuery, setSearchQuery] = useSearchParams();
  const [page, setPage] = useState(+(searchQuery.get('page') || 0));

  const countPaginationPages = useMemo(() => {
    let countPaginationPages = Math.ceil(countPages / +config.perPage!);

    if (!countPaginationPages) {
      countPaginationPages = 1;
    }

    return countPaginationPages;
  }, [countPages]);

  const paginationArray: number[] = useMemo(() => {
    const tempPagination: number[] = [];

    for (let i = 0; i < countPaginationPages; i++) {
      tempPagination.push(i);
    }

    if (page > tempPagination.length - 1) {
      setPage(0);

      searchQuery.set('page', '0');
    }

    return [...tempPagination];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countPaginationPages]);

  const onPageClick = (pageNumber: number) => {
    setPage(pageNumber);

    searchQuery.set('page', pageNumber.toString());
  };

  const onForwardClick = () => {
    if (page === countPaginationPages - 1) {
      return;
    }

    searchQuery.set('page', (page + 1).toString());

    setPage((state) => {
      return state + 1;
    });
  };

  const onBackClick = () => {
    if (page === 0) {
      return;
    }

    searchQuery.set('page', (page - 1).toString());

    setPage((state) => {
      return state - 1;
    });
  };

  useEffect(() => {
    setSearchQuery(searchQuery);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

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
