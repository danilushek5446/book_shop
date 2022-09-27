import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { StyledDiv } from './Cart.styles';
import booksImage from '../../assets/images/books.png';
import StyleButton from '../../components/Button/StyledButton';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getUserCart } from '../../store/cart/cartThunk';
import BookCard from '../../components/Book/bookCard/BookCard';
import { getBooksForCart } from '../../store/book/bookThunk';

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

  const summ = async (price: number) => {
    setTotalPrice((state) => {
      return (+(state + price).toFixed(2));
    });
  };

  useEffect(() => {
    (async () => {
      await dispatch(getUserCart(user.id));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    (async () => {
      if (!cart) {
        return;
      }
      const booksId = cart.map((item) => {
        return (item.bookId);
      });

      await dispatch(getBooksForCart(booksId.toString()));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);
  return (
    <StyledDiv className="cart">
      {!cart ? (
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
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    author={item.author}
                    rating={item.rating || 0}
                    price={item.price}
                    countPrice={summ}
                  />
                );
              })
            }
          </div>
          <span>{`Total: ${totalPrice}`}</span>
          <StyleButton
            text="Continue shopping"
            type="button"
            onClick={onCatalogClick}
            className="emty-cart"
          />
        </div>
      )}
    </StyledDiv >
  );
};

export default Cart;
