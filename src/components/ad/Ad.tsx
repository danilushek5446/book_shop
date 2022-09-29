/* eslint-disable @typescript-eslint/no-empty-function */
import type { FC } from 'react';

import StyleButton from '../Button/StyledButton';
import { StyledDiv } from './Ad.styles';
import adPicture from '../../assets/images/2009.i305 1.png';

const Ad: FC = () => {
  return (
    <StyledDiv className="ad">
      <div className="container">
        <h2 className="ad__title">Build your library with us</h2>
        <div className="book-background">
          <span className="sub-title">Buy two books and get one for free</span>
          <StyleButton text="Choose a book" type="button" onClick={() => {}} className="to-catalog" />
        </div>
      </div>
      <img className="ad-image" src={adPicture} alt="cannot upload picture" />
    </StyledDiv>
  );
};

export default Ad;
