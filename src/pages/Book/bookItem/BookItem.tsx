import { Rating } from 'react-simple-star-rating';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { addToCart, getUserCart } from '../../../store/cart/cartThunk';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import StyleButton from '../../../components/Button/StyledButton';
import { StyledBookContainer } from './BookItem.styles';
import heart from '../../../assets/icons/Heart.png';
import filledHeart from '../../../assets/icons/filledHeart.png';
import PageIcons from '../../../components/pageIcons/PageIcons';
import { addToFavorite, deleteFromFavorite, getUserFavorite } from '../../../store/favorite/favoriteThunk';

type PropType = {
  id: number;
  image: string;
  name: string;
  author: string;
  rating: number;
  price: number;
};

const BookItem: FC<PropType> = ({ image, name, author, rating, price, id }) => {
  const user = useAppSelector((state) => state.user.user);
  const cart = useAppSelector((state) => state.cart.cart);
  const favorite = useAppSelector((state) => state.favorite.favorite);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isInCart, setIsInCart] = useState(false);
  const [isInFavorite, setIsInFavorite] = useState(false);

  useEffect(() => {
    if (cart) {
      if (cart.some((item) => item.bookId === id)) {
        setIsInCart(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  useEffect(() => {
    if (favorite) {
      if (favorite.some((item) => item.bookId === id)) {
        setIsInFavorite(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorite]);

  const onClick = () => {
    navigate(`/bookPage/${id}`);
  };

  const onAddToCart = async () => {
    if (!user.email) {
      navigate('/login');
    }
    await dispatch(addToCart(id));
    await dispatch(getUserCart(user.id));
  };

  const onAddFavorite = async () => {
    if (!user.email) {
      navigate('/login');
    }

    if (isInFavorite) {
      await dispatch(deleteFromFavorite({ userId: user.id, bookId: id }));
      await dispatch(getUserFavorite(user.id));
      setIsInFavorite(false);
      return;
    }

    await dispatch(addToFavorite(id));
    await dispatch(getUserFavorite(user.id));
  };

  return (
    <StyledBookContainer className="book-content">
      <div className="book-image-container">
        <img src={`${process.env.REACT_APP_API_URL}${image}`}
          className="book-picture"
          alt="cannot load picture"
          onClick={onClick}
        />
        <PageIcons
          className={`book-favorite ${isInFavorite ? 'in-favorite' : ''}`}
          picture={isInFavorite ? filledHeart : heart}
          onClick={onAddFavorite}
        />
      </div>
      <span className="book-name">{name}</span>
      <span className="book-author">{author}</span>
      <div className="rating-container">
        <Rating
          ratingValue={rating * 20}
          readonly
          emptyColor="#fff"
          fillColor="#BFCC94"
          size={23}
        />
        <span className="book-rating">{rating.toFixed(1)}</span>
      </div>
      <StyleButton
        text={`${isInCart ? 'Added to cart' : `$${price} USD`}`}
        type="button"
        onClick={onAddToCart}
        className={`price ${isInCart ? 'in-cart' : ''}`}
        disabled={isInCart}
      />
    </StyledBookContainer>
  );
};

export default BookItem;
