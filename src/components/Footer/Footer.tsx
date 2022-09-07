import type { FC } from 'react';

import logo from '../../images/darklogo.png';
import Map from '../../images/map.png';
import { StyledFooter } from './Footer.styles';

const Footer: FC = () => {
  return (
    <StyledFooter className="footer">
      <div className="container">
        <div className="contact-info">
          <img src={logo} alt="sdtfsdt" />
          <span className="footer-email">tranthuy.nute@gmail.com</span>
          <span>(480) 555-0103</span>
        </div>
        <div className="links">
          <span>Home Page</span>
          <span>Catalog</span>
          <span>My Account</span>
          <span>Cart</span>
        </div>
        <div className="map-container">
          <span>6391 Elgin St. Celina, Delaware 10299</span>
          <img src={Map} alt="sdtfsdt" />
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
