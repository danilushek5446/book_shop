/* eslint-disable no-console */
import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { StyledBookContainer } from './BookCard.styles';
import trash from '../../../assets/icons/Delete.png';
import { changeCount, deleteOneBook } from '../../../store/cart/cartThunk';

type PropType = {
  bookId: number;
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
  price,
  bookId,
  countPrice,
  userId,
  isInCart }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);
  const [index, setIndex] = useState(0);

  const onClick = () => {
    navigate(`/bookPage/${bookId}`);
  };

  const onDecreaseClick = async () => {
    if (cart && (cart[index].count - 1) <= 0) {
      await dispatch(deleteOneBook({ userId, bookId }));
      return;
    }

    await dispatch(changeCount({ bookId, userId, count: -1 }));

    if (countPrice) {
      countPrice(-price);
    }
  };

  const onIncreaseClick = async () => {
    await dispatch(changeCount({ bookId, userId, count: +1 }));
    if (countPrice) {
      countPrice(+price);
    }
  };

  const onDeleteOne = async () => {
    if (countPrice && cart && cart[index]) {
      countPrice(-(price * cart[index].count));
    }
    await dispatch(deleteOneBook({ userId, bookId }));
  };

  useEffect(() => {
    if (cart?.length) {
      const cartIndex = cart.findIndex((item) => item.bookId === bookId);

      if (cartIndex !== -1) {
        setIndex(() => {
          return cartIndex;
        });

        if (countPrice) {
          countPrice(cart[index].count * price);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledBookContainer count={(cart && cart[index] && cart[index].count) || 0} className="book-content">
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
          <span className="book-count">{(cart && cart[index] && cart[index].count) || 0}</span>
          <button className="increase-button" onClick={onIncreaseClick}>+</button>
          <img src={trash} onClick={onDeleteOne} alt="cannot load picture" />
        </div>
        <span className="book-price">{`$${price} USD`}</span>
      </div>
    </StyledBookContainer>
  );
};

export default BookCard;
