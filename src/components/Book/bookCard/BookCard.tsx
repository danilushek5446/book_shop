import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getBookById, getBooks } from '../../../store/book/bookThunk';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import StyleButton from '../../Button/StyledButton';
import { StyledBookContainer } from './BookCard.styles';
import trash from '../../../assets/icons/Delete.png';

type PropType = {
  id: number;
  image: string;
  name: string;
  author: string;
  rating: number;
  price: number;
  countPrice(price: number): void;
};

const BookCard: FC<PropType> = ({ image, name, author, rating, price, id, countPrice }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);
  const [count, setCount] = useState(1);

  const onClick = () => {
    navigate(`/bookPage/${id}`);
  };

  const onDecreaseClick = () => {
    setCount(count - 1);
    countPrice(-price);
  };

  const onIncreaseClick = () => {
    setCount(count + 1);
    countPrice(+price);
  };

  useEffect(() => {
    (async () => {
      const index = cart?.findIndex((item) => {
        if (item.bookId === id) {
          return true;
        }
        return false;
      });
      if (cart) {
        setCount(cart[index || 0].count);
        countPrice(cart[index || 0].count * price);
      }
      // await dispatch(getBooks(id));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledBookContainer className="book-content">
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
        <div className="count-container">
          <button className="decrease-button" onClick={onDecreaseClick}>-</button>
          <span className="book-count">{count}</span>
          <button className="increase-button" onClick={onIncreaseClick}>+</button>
          <img src={trash} alt="cannot load picture" />
        </div>
        <span className="book-price">{`$${price} USD`}</span>
      </div>
    </StyledBookContainer>
  );
};

export default BookCard;
