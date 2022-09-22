import type { FC } from 'react';
import { useEffect } from 'react';
import { getBooks } from '../../store/book/bookThunk';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import type { QueryType } from '../../types/types';

import BookItem from '../BookItem/BookItem';
import { StyledBookContainer } from './BookCatalog.styles';

const BookCatalog: FC = () => {
  const books = useAppSelector((state) => state.book);
  const filter = useAppSelector((state) => state.filter);

  const dispacth = useAppDispatch();
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

      // eslint-disable-next-line no-console
      console.log(genere);

      const query: QueryType = {
        sortBy: filter.sortDirection[index].sortBy.toLowerCase(),
        genere,
        perPage: '10',
        page: '0',
        search: '',
        sortDirection: 'ASC',
        priceMin: filter.price.minPrice,
        priceMax: filter.price.maxPrice,
      };
      await dispacth(getBooks(query));
    })();
  }, [dispacth, filter]);
  return (
    <StyledBookContainer className="book-content">
      <div className="container">
        {books.booksArray.map((item) => {
          return (
            <BookItem
              key={item.id}
              image={item.image}
              name={item.name}
              author={item.author}
              rating={item.rating || 0}
              price={item.price}
            />
          );
        })}
      </div>
    </StyledBookContainer>
  );
};

export default BookCatalog;
