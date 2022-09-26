import styled from 'styled-components';

export const StyledBookContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  width: 100%;
  padding-top: 20px;

 .book-container{
  display: flex;
  max-width: 1280px;
  width: 100%;
  justify-content: space-between;
  padding-top: 20px;
  .book-name{
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: #0D1821;
  }
  
  .book-author{
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: #0D1821;
  }

 .price{
    max-width: 305px;
    width: 100%;
 }

 .book-rating{
    padding-bottom: 30px;
 }

 .book-description{
  max-width: 630px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #344966;
  white-space: pre-wrap;
 }

 .contenet-container{
  display: flex;
  flex-direction: column;
 }

 img{
  max-width: 522px;
  max-height: 779px;
  height: 100%;
  width: 100%;
 }

 .book-description-title{
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #0D1821;
 }

 .contenet-container{
  button{
    max-width: 216px;
    width: 100%;
  }
 }

 .hardcover-title{
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #344966;
  padding-top: 74px;
  padding-bottom: 14px;
 }
 }
`;
