import Ad from '../ad/Ad';
import logo from '../../images/logo.png';
import searchPciture from '../../images/Search.png';
import StyleButton from '../Button/StyledButton';
import { StyledContainer, StyledHeaderContainer, StyledInput, StyledInputContainer, StyledInputLabelsContainer } from './header.styles';

function Header() {
  return (
    <StyledHeaderContainer className="header">
      <StyledContainer className="container">
        <img className="header-logo" src={logo} alt="sdtfsdt" />
        <StyledInputContainer className="input-container">
          <span className="header__title">Catalog</span>
          <StyledInputLabelsContainer>
            <StyledInput className="header-input" id="header-input" type="text" />
            <img src={searchPciture} alt="cannot upload picture" />
            <label className="text-label" htmlFor="header-input">Search</label>
          </StyledInputLabelsContainer>
        </StyledInputContainer>
        <StyleButton content="Log In/ Sing Up" />
      </StyledContainer>
      <Ad />
    </StyledHeaderContainer>
  );
}

export default Header;
