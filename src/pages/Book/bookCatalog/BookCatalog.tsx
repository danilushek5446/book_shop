import type { FC } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getBooks } from '../../../store/book/bookThunk';
import { getUserCart } from '../../../store/cart/cartThunk';
import { getUserFavorite } from '../../../store/favorite/favoriteThunk';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import type { QueryBookType } from '../../../types/bookType';
import Pagination from '../../../components/pagination/Pagination';
import BookItem from '../bookItem/BookItem';

import { StyledBookContainer } from './BookCatalog.styles';

const BookCatalog: FC = () => {
  const books = useAppSelector((state) => state.book);
  const userId = useAppSelector((state) => state.user.user.id);
  const [searchQuery, setSearchQuery] = useSearchParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      dispatch(getUserCart(userId));
      dispatch(getUserFavorite(userId));

      const searchParam = searchQuery.get('search');

      const sortBy = searchQuery.get('sortBy');

      const genere = searchQuery.get('genere');

      const page = searchQuery.get('page');

      const priceMin = Number(searchQuery.get('priceMin'));
      const priceMax = Number(searchQuery.get('priceMax'));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    (async () => {
      const genere = searchQuery.get('genere');
      const priceMin = searchQuery.get('priceMin') || '';
      const priceMax = searchQuery.get('priceMax') || '';
      const sortBy = searchQuery.get('sortBy') || '';
      const page = searchQuery.get('page') || '';

      setSearchQuery({
        sortBy,
        page,
        search: '',
        sortDirection: 'ASC',
        priceMin,
        priceMax,
        genere: genere || '',
      });

      const query: QueryBookType = {
        sortBy,
        genere: searchQuery.get('genere') || '',
        perPage: process.env.REACT_APP_PER_PAGE!,
        page,
        search: searchQuery.get('search') || '',
        sortDirection: 'ASC',
        priceMin: searchQuery.get('priceMin') || '',
        priceMax: searchQuery.get('priceMax') || '',
      };
      await dispatch(getBooks(query));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

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
