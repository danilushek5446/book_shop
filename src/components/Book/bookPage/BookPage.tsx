import type { FC } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBookById } from '../../../store/book/bookThunk';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import Authad from '../../AuthAd/Authad';
import StyleButton from '../../Button/StyledButton';
import { StyledBookContainer } from './BookPage.styles';
// import { StyledBookContainer } from './BookItem.styles';

const BookPage: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const book = useAppSelector((state) => state.book.currentBook);
  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    if (!id) {
      return;
    }
    (async () => {
      try {
        await dispatch(getBookById(+id));
      } catch (error) {
        alert(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledBookContainer className="book-content">
      <div className="book-container">
        <img src={book?.image && `${process.env.REACT_APP_API_URL}${book?.image}`}
          className="book-picture"
          alt="cannot load picture"
        />
        <div className="contenet-container">
          <span className="book-name">{book?.name}</span>
          <span className="book-author">{book?.author}</span>
          <span className="book-rating">{book?.rating || 0}</span>
          <span className="book-description-title">Descrition</span>
          <span className="book-description">{book?.description}</span>
          <div>
            <div className="hardcover-title">Hardcover</div>
            <StyleButton
              text={`$${book?.price} USD`}
              type="button"
              onClick={() => ''}
              className="price"
            />
          </div>
        </div>
      </div>
      {!user.email && <Authad />}
    </StyledBookContainer>
  );
};

export default BookPage;
