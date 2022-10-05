import type { FC } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { StyledDiv } from './Favorite.styles';
import booksImage from '../../assets/images/books.png';
import StyleButton from '../../components/Button/StyledButton';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import BookCard from '../Book/bookCard/BookCard';
import { getAllBooksByIds } from '../../store/book/bookThunk';
import { getUserFavorite } from '../../store/favorite/favoriteThunk';

const Favorite: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const favorite = useAppSelector((state) => state.favorite.favorite);
  const books = useAppSelector((state) => state.book.booksArray);

  const onCatalogClick = () => {
    navigate('/');
  };

  useEffect(() => {
    dispatch(getUserFavorite(user.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!favorite?.length) {
      return;
    }
    const booksId = favorite.map((item) => {
      return (item.bookId);
    });

    dispatch(getAllBooksByIds(booksId.toString()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorite]);

  return (
    <StyledDiv className="cart">
      {!favorite?.length ? (
        <div className="empty-cart">
          <img className="empty-cart-image" src={booksImage} alt="cannot upload picture" />
          <div className="container">
            <span className="empty-cart-title">Your cart is empty</span>
            <span className="empty-cart-subtitle">Add items to cart to make a purchase. Go to the catalogue no.</span>
            <StyleButton
              text="Go to catalog"
              type="button"
              onClick={onCatalogClick}
              className="emty-cart"
            />
          </div>
        </div>
      ) : (
        <div className="not-empty-cart">
          <div className="cart-items-container">
            {
              books.map((item) => {
                return (
                  <BookCard
                    key={item.id}
                    bookId={item.id}
                    image={item.image}
                    name={item.name}
                    author={item.author}
                    rating={item.rating || 0}
                    price={item.price}
                    userId={user.id}
                    isInCart={false}
                  />
                );
              })
            }
          </div>
          <div className="buttons-container">
            <div className="continue-shopping-container">
              <StyleButton
                text="Continue shopping"
                type="button"
                onClick={onCatalogClick}
                className="continue-shopping"
              />
            </div>
          </div>
        </div>
      )}
    </StyledDiv >
  );
};

export default Favorite;
