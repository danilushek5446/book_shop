import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { StyledBookContainer } from './BookCard.styles';
import trash from '../../../assets/icons/Delete.png';
import { deleteOneBook } from '../../../store/cart/cartThunk';

type PropType = {
  id: number;
  image: string;
  name: string;
  author: string;
  rating: number;
  price: number;
  countPrice?(price: number): void;
  userId: number;
  isInCart: boolean;
};

const BookCard: FC<PropType> = ({
  image,
  name,
  author,
  rating,
  price,
  id,
  countPrice,
  userId,
  isInCart }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);
  const [count, setCount] = useState(1);

  const onClick = () => {
    navigate(`/bookPage/${id}`);
  };

  const onDecreaseClick = async () => {
    setCount(count - 1);
    if (countPrice) {
      countPrice(-price);
    }
    if ((count - 1) === 0) {
      dispatch(deleteOneBook({ userId, bookId: id }));
    }
  };

  const onIncreaseClick = () => {
    setCount(count + 1);
    if (countPrice) {
      countPrice(+price);
    }
  };

  const onDeleteOne = () => {
    if (countPrice) {
      countPrice(-(price * count));
    }
    dispatch(deleteOneBook({ userId, bookId: id }));
  };

  useEffect(() => {
    if (cart?.length) {
      const index = cart.findIndex((item) => item.bookId === id);

      if (index !== -1) {
        setCount(cart[index].count);
        if (countPrice) {
          countPrice(cart[index].count * price);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledBookContainer count={count} className="book-content">
      <img src={`${process.env.REACT_APP_API_URL}${image}`}
        className="book-picture"
        alt="cannot load picture"
        onClick={onClick}
      />
      <div className="container">
        <div className="titles-container">
          <span className="book-name">{name}</span>
          <span className="book-author">{author}</span>
        </div>
        <div className={`${isInCart ? 'count-container' : 'in-favorite'}`}>
          <button className="decrease-button" onClick={onDecreaseClick}>-</button>
          <span className="book-count">{count}</span>
          <button className="increase-button" onClick={onIncreaseClick}>+</button>
          <img src={trash} onClick={onDeleteOne} alt="cannot load picture" />
        </div>
        <span className="book-price">{`$${price} USD`}</span>
      </div>
    </StyledBookContainer>
  );
};

export default BookCard;
