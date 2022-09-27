import type { FC } from 'react';
import { StyledDiv } from './Authad.styles';
import authAdPicture from '../../assets/images/2011.i305.006. 1.png';
import background from '../../assets/images/atz1.png';

const Ad: FC = () => {
  return (
    <StyledDiv className="ad">
      <img className="ad-image" src={authAdPicture} alt="cannot upload picture" />
      <img className="ad-image-fairy" src={background} alt="cannot upload picture" />
      <div className="container">
        <h2 className="ad__title">Authorize now</h2>
        <div className="sub-title-background">
          <span className="sub-title">Authorize now and discover the fabulous world of books</span>
          {/* <StyleButton text="Choose a book" /> */}
        </div>
      </div>
    </StyledDiv>
  );
};

export default Ad;
