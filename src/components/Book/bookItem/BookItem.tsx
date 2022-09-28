import { Rating } from 'react-simple-star-rating';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../../store/cart/cartThunk';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import StyleButton from '../../Button/StyledButton';
import { StyledBookContainer } from './BookItem.styles';

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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/bookPage/${id}`);
  };

  const onAddToCart = () => {
    if (!user.email) {
      navigate('/login');
    }
    dispatch(addToCart(id));
  };

  return (
    <StyledBookContainer className="book-content">
      <img src={`${process.env.REACT_APP_API_URL}${image}`}
        className="book-picture"
        alt="cannot load picture"
        onClick={onClick}
      />
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
        text={`$${price} USD`}
        type="button"
        onClick={onAddToCart}
        className="price"
      />
    </StyledBookContainer>
  );
};

export default BookItem;
