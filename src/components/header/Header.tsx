import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import cart from '../../assets/icons/Cart.png';
import profile from '../../assets/icons/User profile.png';
import heart from '../../assets/icons/Heart.png';
import searchPciture from '../../assets/icons/Search.png';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import StyleButton from '../Button/StyledButton';
import PageIcons from '../pageIcons/PageIcons';
import { StyledHeaderContainer } from './header.styles';
import { setSearch } from '../../store/filter/filterSlice';

const Header: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    dispatch(setSearch(event.target.value));
  };

  const onDelete = () => {
    setSearchValue('');
    dispatch(setSearch(searchValue));
  };

  const homePage = () => {
    navigate('/');
  };

  const profilePage = () => {
    navigate('/profile');
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
              onChange={(e) => onChange(e)}
              required
            />
            <img src={searchPciture} alt="cannot load icon" />
            <label htmlFor="search-input">search</label>
            <button className="clear" onMouseUp={onDelete}>x</button>
          </div>
        </div>
        {user.email
          ? (<div className="auth-container">
            <PageIcons picture={cart} onClick={cartPage}
            />
            <PageIcons picture={heart} onClick={function (): void {
              throw new Error('Function not implemented.');
            }}
            />
            <PageIcons picture={profile} onClick={profilePage} />
             </div>)

          : (<StyleButton
            className="header-auth"
            type="button"
            onClick={onClick}
            text="Log In/ Sing Up"
          />)}

      </div>
    </StyledHeaderContainer>
  );
};

export default Header;
