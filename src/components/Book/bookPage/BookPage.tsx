import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';

import { getBookById } from '../../../store/book/bookThunk';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import Authad from '../../AuthAd/Authad';
import StyleButton from '../../Button/StyledButton';
import { StyledBookContainer } from './BookPage.styles';
import star from '../../../assets/icons/Star.png';
import { setRating } from '../../../http/ratingApi';
import { changeCurrentRate } from '../../../store/book/bookSlice';
// import { StyledBookContainer } from './BookItem.styles';

const BookPage: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const book = useAppSelector((state) => state.book.currentBook);
  const user = useAppSelector((state) => state.user.user);
  const [stateRating, setStateRating] = useState(0);

  useEffect(() => {
    setStateRating((state) => {
      return ((book?.rating || 0) * 20);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRating = async (rate: number) => {
    try {
      if (book) {
        setStateRating(rate);

        const newRating = await setRating({ bookId: book.id, rate: (rate / 20) });
        dispatch(changeCurrentRate(newRating.rating));
      }
    } catch (error) {
      alert(error);
    }
  };

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
          <div className="rating-container">
            <img src={star} alt="cannot load picture" className="rate-star" />
            <span className="book-rating">{(book?.rating || 0).toFixed(1)}</span>
            <Rating
              ratingValue={stateRating}
              onClick={handleRating}
              emptyColor="#fff"
              fillColor="#BFCC94"
              size={28}
            />
          </div>
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
