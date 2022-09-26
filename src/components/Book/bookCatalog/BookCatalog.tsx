import type { FC } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getBooks } from '../../../store/book/bookThunk';
import { setPage, setPrice, setSearch, toggleCheckedGenere, toggleCheckedSortDirection } from '../../../store/filter/filterSlice';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import type { QueryType } from '../../../types/types';
import Pagination from '../../pagination/Pagination';
import BookItem from '../bookItem/BookItem';

import { StyledBookContainer } from './BookCatalog.styles';

const BookCatalog: FC = () => {
  const books = useAppSelector((state) => state.book);
  const filter = useAppSelector((state) => state.filter);
  const [searchQuery, setSearchQuery] = useSearchParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    (() => {
      const searchParam = searchQuery.get('search');
      if (searchParam) {
        dispatch(setSearch(searchParam));
      }

      const sortBy = searchQuery.get('sortBy');
      if (sortBy) {
        dispatch(toggleCheckedSortDirection(sortBy));
      }

      const genere = searchQuery.get('genere');
      if (genere) {
        genere.split(',').forEach((item) => {
          dispatch(toggleCheckedGenere(+item));
        });
      }

      const page = searchQuery.get('page');
      if (page) {
        dispatch(setPage(+page));
      }

      const priceMin = Number(searchQuery.get('priceMin'));
      const priceMax = Number(searchQuery.get('priceMax'));
      dispatch(setPrice(
        {
          minPrice: priceMin || 0,
          maxPrice: priceMax || 100,
        },
      ));
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    (async () => {
      const index = filter.sortDirection.findIndex((item) => {
        if (item.checked) {
          return true;
        }
        return false;
      });

      const genere: number[] = [];
      (filter.genere.forEach((item) => {
        if (item.checked) {
          genere.push(item.id);
        }
      }));

      setSearchQuery({
        sortBy: filter.sortDirection[index].sortBy,
        page: filter.page.toString(),
        perPage: process.env.REACT_APP_PER_PAGE!,
        search: filter.search,
        sortDirection: 'ASC',
        priceMin: filter.price.minPrice.toString(),
        priceMax: filter.price.maxPrice.toString(),
        genere: genere.toString(),
      });
      const query: QueryType = {
        sortBy: searchQuery.get('sortBy') || '',
        genere: searchQuery.get('genere') || '',
        perPage: searchQuery.get('perPage') || '',
        page: searchQuery.get('page') || '',
        search: searchQuery.get('search') || '',
        sortDirection: 'ASC',
        priceMin: searchQuery.get('priceMin') || '',
        priceMax: searchQuery.get('priceMax') || '',
      };
      await dispatch(getBooks(query));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, filter, searchQuery]);

  return (
    <StyledBookContainer className="book-content">
      <div className="container">
        {books.booksArray.map((item) => {
          return (
            <BookItem
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              author={item.author}
              rating={item.rating || 0}
              price={item.price}
            />
          );
        })}
      </div>
      {(books.count > 0) && <Pagination countPages={books.count} />}
    </StyledBookContainer>
  );
};

export default BookCatalog;
