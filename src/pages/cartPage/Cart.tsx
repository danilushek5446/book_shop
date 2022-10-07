import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { StyledDiv } from './Cart.styles';
import booksImage from '../../assets/images/books.png';
import StyleButton from '../../components/Button/StyledButton';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { checkOut, getUserCart } from '../../store/cart/cartThunk';
import BookCard from '../Book/bookCard/BookCard';
import { getAllBooksByIds } from '../../store/book/bookThunk';
import { getUserFavorite } from '../../store/favorite/favoriteThunk';

const Cart: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.user);
  const cart = useAppSelector((state) => state.cart.cart);
  const books = useAppSelector((state) => state.book.booksArray);

  const [totalPrice, setTotalPrice] = useState(0);

  const onCatalogClick = () => {
    navigate('/');
  };

  const onCheckout = async () => {
    await dispatch(checkOut(user.id));
    await dispatch(getUserCart(user.id));
  };

  const summ = (price: number) => {
    setTotalPrice((state) => {
      return (+(state + price).toFixed(2));
    });
  };

  useEffect(() => {
    dispatch(getUserCart(user.id));
    dispatch(getUserFavorite(user.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!cart?.length) {
      return;
    }
    const booksId = cart.map((item) => {
      return (item.bookId);
    });

    dispatch(getAllBooksByIds(booksId.toString()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  return (
    <StyledDiv className="cart">
      {!cart?.length ? (
        <div className="empty-cart">
          <img className="empty-cart-image" src={booksImage} alt="cannot upload picture" />
          <div className="container">
            <span className="empty-cart-title">Your cart is empty</span>
            <span className="empty-cart-subtitle">Add items to cart to make a purchase. Go to the catalogue now.</span>
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
                    countPrice={summ}
                    userId={user.id}
                    isInCart
                  />
                );
              })
            }
          </div>
          <div className="total-price">{`Total: ${totalPrice}`}</div>
          <div className="buttons-container">
            <div className="continue-shopping-container">
              <StyleButton
                text="Continue shopping"
                type="button"
                onClick={onCatalogClick}
                className="continue-shopping"
              />
            </div>
            <div className="chekout-container">
              <StyleButton
                text="Chekout"
                type="button"
                onClick={onCheckout}
                className="chekout-button"
              />
            </div>
          </div>
        </div>
      )}
    </StyledDiv >
  );
};

export default Cart;
