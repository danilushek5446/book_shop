import StyleButton from '../Button/StyledButton';
import { StyledBookBackground, StyledContainer, StyledDiv, StyledImage } from './Ad.styles';
import adPicture from '../../images/2009.i305 1.png';

function Ad() {
  return (
    <StyledDiv className="ad">
      <StyledContainer className="container">
      <h2 className="ad__title">Build your library with us</h2>
      <StyledBookBackground className="book-background">
        <span className="sub-title">Buy two books and get one for free</span>
        <StyleButton content="Choose a book" />
      </StyledBookBackground>
      </StyledContainer>
      <StyledImage src={adPicture} alt="cannot upload picture" />
    </StyledDiv>
  );
}

export default Ad;
