import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { setPage } from '../../store/filter/filterSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { StyledContainer } from './Pagination.styles';

type PropType = {
  countPages: number;
};

const Pagination: FC<PropType> = ({ countPages }) => {
  const dispacth = useAppDispatch();
  const [paginationArray, setPagginationArray] = useState<number[]>([]);
  const filter = useAppSelector((state) => state.filter);

  let countPaginationPages = Math.ceil(countPages / +process.env.REACT_APP_PER_PAGE!);
  if (!countPaginationPages) {
    countPaginationPages = 1;
  }

  const onPageClick = (page: number) => {
    dispacth(setPage(page));
  };

  const onForwardClick = () => {
    if (filter.page === countPaginationPages - 1) {
      return;
    }
    dispacth(setPage(filter.page + 1));
  };

  const onBackClick = () => {
    if (filter.page === 0) {
      return;
    }
    dispacth(setPage(filter.page - 1));
  };

  useEffect(() => {
    (() => {
      const tempPagination: number[] = [];

      for (let i = 0; i < countPaginationPages; i++) {
        tempPagination.push(i);
      }
      if (filter.page > tempPagination.length - 1) {
        dispacth(setPage(0));
      }
      setPagginationArray([...tempPagination]);
    })();
  }, [countPaginationPages, dispacth, filter.page]);

  return (
    <StyledContainer className="pagination">
      <div className="pagination-container">
        <div className="pagination-button back-button" onClick={onBackClick}>❮</div>
        {paginationArray.map((item) => {
          return (
            <div
              key={item}
              onClick={() => onPageClick(item)}
              className={`circle ${filter.page === item && 'active'}`}
            />
          );
        })}
        <div className="pagination-button  forward-button" onClick={onForwardClick}>❯</div>
      </div>
    </StyledContainer>
  );
};

export default Pagination;
