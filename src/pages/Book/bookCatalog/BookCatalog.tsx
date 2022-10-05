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
import { config } from '../../../config';

const BookCatalog: FC = () => {
  const books = useAppSelector((state) => state.book);
  const userId = useAppSelector((state) => state.user.user.id);
  const [searchQuery, setSearchQuery] = useSearchParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userId) {
      dispatch(getUserCart(userId));
      dispatch(getUserFavorite(userId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const search = searchQuery.get('search') || '';
    const genere = searchQuery.get('genere') || '';
    const priceMin = searchQuery.get('priceMin') || '';
    const priceMax = searchQuery.get('priceMax') || '';
    const sortBy = searchQuery.get('sortBy') || '';
    const page = searchQuery.get('page') || '';

    const query: QueryBookType = {
      sortBy,
      genere,
      perPage: config.perPage,
      page,
      search,
      sortDirection: 'ASC',
      priceMin,
      priceMax,
    };
    dispatch(getBooks(query));
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
