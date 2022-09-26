import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/bookPage/${id}`);
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
      <span className="book-rating">{rating}</span>
      <StyleButton
        text={`$${price} USD`}
        type="button"
        onClick={() => ''}
        className="price"
      />
    </StyledBookContainer>
  );
};

export default BookItem;
