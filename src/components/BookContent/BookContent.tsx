import type { FC } from 'react';

import BookItem from '../BookItem/BookItem';

const BookContent: FC = () => {
  return (
    <div className="book-content">
      <BookItem />
    </div>
  );
};

export default BookContent;
