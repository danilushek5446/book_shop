import logo from '../../images/darklogo.png';
import Map from '../../images/map.png';
import { StyledContactInfo, StyledContainer, StyledFooter, StyledLinks, StyledMapContainer } from './Footer.styles';

function Footer() {
  return (
    <StyledFooter className="footer">
      <StyledContainer className="container">
        <StyledContactInfo className="contact-info">
          <img src={logo} alt="sdtfsdt" />
          <span className="footer-email">tranthuy.nute@gmail.com</span>
          <span>(480) 555-0103</span>
        </StyledContactInfo>
        <StyledLinks className="links">
          <span>Home Page</span>
          <span>Catalog</span>
          <span>My Account</span>
          <span>Cart</span>
        </StyledLinks>
        <StyledMapContainer className="map-container">
          <span>6391 Elgin St. Celina, Delaware 10299</span>
          <img src={Map} alt="sdtfsdt" />
        </StyledMapContainer>
      </StyledContainer>
    </StyledFooter>
  );
}

export default Footer;
