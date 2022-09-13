import type { FC } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import logo from '../../images/logo.png';
import cart from '../../images/Cart.png';
import profile from '../../images/User profile.png';
import heart from '../../images/Heart.png';
import searchPciture from '../../images/Search.png';
import { useAppSelector } from '../../store/hooks';
import StyleButton from '../Button/StyledButton';
import AuthInput from '../Input/AuthInput';
import PageIcons from '../pageIcons/PageIcons';
import { StyledHeaderContainer } from './header.styles';

const Header: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useAppSelector((state) => state.user.user);

  const [search, setSearch] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const homePage = () => {
    navigate('/');
  };

  const profilePage = () => {
    navigate('/profile');
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
        <img onClick={homePage} className="header-logo" src={logo} alt="sdtfsdt" />
        <div className="input-container">
          <span className="header__title">Catalog</span>
          <AuthInput
            icon={searchPciture}
            name="header-input"
            type="text"
            labelText="Search"
            className="search"
            />
        </div>
        {user.email
          ? (<div className="auth-container">
            <PageIcons picture={cart} onClick={function (): void {
              throw new Error('Function not implemented.');
            }}
            />
            <PageIcons picture={heart} onClick={function (): void {
              throw new Error('Function not implemented.');
            }}
            />
            <PageIcons picture={profile} onClick={profilePage} />
             </div>)

          : <StyleButton className="header-auth" type="button" onClick={onClick} text="Log In/ Sing Up" />}

      </div>
    </StyledHeaderContainer>
  );
};

export default Header;
