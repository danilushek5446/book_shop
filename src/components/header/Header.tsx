import type { FC } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import cart from '../../assets/icons/Cart.png';
import profile from '../../assets/icons/User profile.png';
import heart from '../../assets/icons/Heart.png';
import searchPciture from '../../assets/icons/Search.png';
import { useAppSelector } from '../../store/hooks';
import StyleButton from '../Button/StyledButton';
import PageIcons from '../pageIcons/PageIcons';
import { StyledHeaderContainer } from './header.styles';

const Header: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const user = useAppSelector((state) => state.user.user);
  const userCart = useAppSelector((state) => state.cart.cart);
  const userFavorite = useAppSelector((state) => state.favorite.favorite);

  const [searchValue, setSearchValue] = useState('');
  const [searchQuery, setSearchQuery] = useSearchParams();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);

    searchQuery.set('search', event.target.value);

    setSearchQuery({ search: event.target.value });
  };

  const onDelete = () => {
    setSearchValue('');

    searchQuery.delete('search');

    setSearchQuery({ search: '' });
  };

  const homePage = () => {
    navigate('/');
  };

  const profilePage = () => {
    navigate('/profile');
  };

  const favoritePage = () => {
    navigate('/favorite');
  };

  const cartPage = () => {
    navigate('/cart');
  };

  const onClick = () => {
    let state;

    const path = location.pathname;

    if (path !== '/signUp' && path !== '/login') {
      state = path;
    } else {
      state = location.state;
    }

    if (path === '/login') {
      navigate('/signUp', { state });
    } else {
      navigate('/login', { state });
    }
  };

  return (
    <StyledHeaderContainer className="header">
      <div className="container">
        <img
          onClick={homePage}
          className="header-logo"
          src={logo}
          alt="sdtfsdt"
        />
        <div className="input-container">
          <span className="header__title">Catalog</span>
          <div className="input-label-container">
            <input
              id="search-input"
              value={searchValue}
              className="search-input"
              onChange={onChange}
              required
            />
            <img src={searchPciture} alt="cannot load icon" />
            <label htmlFor="search-input">search</label>
            <button className="clear" onMouseUp={onDelete}>x</button>
          </div>
        </div>
        {user.email
          ? (
            <div className="auth-container">
              <PageIcons
                className="cart-icon"
                picture={cart}
                onClick={cartPage}
                count={userCart?.length}
              />
              <PageIcons
                className="favorite-icon"
                picture={heart}
                onClick={favoritePage}
                count={userFavorite?.length}
              />
              <PageIcons
                className="profile-icon"
                picture={profile}
                onClick={profilePage}
              />
            </div>
          )
          : (
            <div className="auth-container">
              <StyleButton
                className="header-auth"
                type="button"
                onClick={onClick}
                text="Log In/ Sing Up"
              />
            </div>
          )}

      </div>
    </StyledHeaderContainer>
  );
};

export default Header;
