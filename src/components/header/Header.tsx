import type { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import logo from '../../images/logo.png';
import searchPciture from '../../images/Search.png';
import StyleButton from '../Button/StyledButton';
import AuthInput from '../Input/AuthInput';
import {
  StyledHeaderContainer,
} from './header.styles';

const Header: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const onClick = () => {
    if (location.pathname === '/login') {
      navigate('/signUp');
    } else {
      navigate('/login');
    }
  };

  return (
    <StyledHeaderContainer className="header">
      <div className="container">
        <img className="header-logo" src={logo} alt="sdtfsdt" />
        <div className="input-container">
          <span className="header__title">Catalog</span>
          {/* <AuthInput icon={searchPciture} name="header-input"
          type="text" labelText="Search" /> */}
        </div>
        <StyleButton onClick={onClick} text="Log In/ Sing Up" />
      </div>
    </StyledHeaderContainer>
  );
};

export default Header;
