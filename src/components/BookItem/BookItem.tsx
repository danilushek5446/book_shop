import type { FC } from 'react';
import StyleButton from '../Button/StyledButton';

const BookItem: FC = () => {
  return (
    <div className="book-content">
      <button />
      <img />
      <h3>The Chronicles of Narnia</h3>
      <h4>C. S. Lewis</h4>
      <div className="rating">
        <div>*</div>
        <div>*</div>
        <div>*</div>
        <div>*</div>
        <div>*</div>
      </div>
    </div>
  );
};

export default BookItem;
