import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';

import { getBookById } from '../../../store/book/bookThunk';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import Authad from '../../../components/AuthAd/Authad';
import StyleButton from '../../../components/Button/StyledButton';
import { StyledBookContainer } from './BookPage.styles';
import star from '../../../assets/icons/Star.png';
import heart from '../../../assets/icons/Heart.png';
import filledHeart from '../../../assets/icons/filledHeart.png';
import { setRating } from '../../../http/ratingApi';
import { changeCurrentRate } from '../../../store/book/bookSlice';
import { addToCart, getUserCart } from '../../../store/cart/cartThunk';
import PageIcons from '../../../components/pageIcons/PageIcons';
import { addToFavorite, deleteFromFavorite, getUserFavorite } from '../../../store/favorite/favoriteThunk';
// import { StyledBookContainer } from './BookItem.styles';

const BookPage: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const book = useAppSelector((state) => state.book.currentBook);
  const user = useAppSelector((state) => state.user.user);
  const cart = useAppSelector((state) => state.cart.cart);
  const favorite = useAppSelector((state) => state.favorite.favorite);
  const [stateRating, setStateRating] = useState(0);
  const [isInCart, setIsInCart] = useState(false);
  const [isInFavorite, setIsInFavorite] = useState(false);

  useEffect(() => {
    (async () => {
      await dispatch(getUserCart(user.id));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (favorite) {
      if (favorite.some((item) => item.bookId === +id!)) {
        setIsInFavorite(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorite]);

  useEffect(() => {
    if (cart) {
      if (cart.some((item) => item.bookId === +id!)) {
        setIsInCart(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  useEffect(() => {
    setStateRating(() => {
      return ((book?.rating || 0) * 20);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onAddFavorite = async () => {
    if (!user.email) {
      navigate('/login');
    }

    if (isInFavorite) {
      await dispatch(deleteFromFavorite({ userId: user.id, bookId: +id! }));
      await dispatch(getUserFavorite(user.id));
      setIsInFavorite(false);
      return;
    }

    await dispatch(addToFavorite(+id!));
    await dispatch(getUserFavorite(user.id));
  };

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

  const onAddToCart = () => {
    if (!user.email) {
      navigate('/login');
    }
    if (book) {
      dispatch(addToCart(book.id));
      setIsInCart(true);
    }
  };

  return (
    <StyledBookContainer className="book-content">
      <div className="book-container">
        <div className="book-image-container">
          <img src={book?.image && `${process.env.REACT_APP_API_URL}${book?.image}`}
            className="book-picture"
            alt="cannot load picture"
          />
          <PageIcons
            className={`book-favorite ${isInFavorite ? 'in-favorite' : ''}`}
            picture={isInFavorite ? filledHeart : heart}
            onClick={onAddFavorite}
          />
        </div>
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
              text={`${isInCart ? 'Added to cart' : `$${book?.price} USD`}`}
              type="button"
              onClick={onAddToCart}
              className={`price ${isInCart ? 'in-cart' : ''}`}
              disabled={isInCart}
            />
          </div>
        </div>
      </div>
      {!user.email && <Authad />}
    </StyledBookContainer>
  );
};

export default BookPage;
