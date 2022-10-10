import styled from 'styled-components';
import backgroundBooks from '../../assets/images/unsplash_DgQf1dUKUTM.png';

export const StyledDiv = styled.div`
  height: 400px;
  max-width: 1280px;
  width: 100%;
  background: #F0F4EF;
  border-radius: 16px;
  display: flex;
  position: relative;
  overflow: hidden;
  position: relative;

  .ad__title{
    margin: 0;
    margin-left: 19%;
    margin-top: 90px;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
  }

  .container{
    max-width: 640px;
    width: 100%;
  }

  .book-background{
    background-image: url(${backgroundBooks});
    max-width: 542px;
    width: 100%;
    max-height: 326.92px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .sub-title{
      margin-right: 20%;
      margin-top: 10px;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      max-width: 191px;
      width: 100%;
      color: #344966;
    }
    button{
      margin-right: 12%;
      margin-top: 50px;
    }
  }

  .ad-image{
    margin-left: 10%;
  }

  @media (max-width: 1050px) {
    overflow: unset;
    height: 289px;
    .book-background{
      background-size: 361px 218px;
      max-width: 361px;
      width: 100%;
      max-height: 218px;
      height: 100%;
    }

    .ad__title{
      font-weight: 700;
      font-size: 32px;
      line-height: 48px;
      margin: 0;
      padding-top: 23px;
      padding-left: 45px;
    }

    .sub-title{
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
    }

    .ad-image{
      margin: 0;
      position: absolute;
      left: 51%;
      top: -93px;
      height: 380px;
      bottom: 29px;
    }
  }

  @media (max-width: 825px) {
    height: 520px;
    width: 100%;
    box-sizing: border-box;

   .ad-image {
      left: 20%;
      top: 240px;
      bottom: 29px;
      width: 253px;
      height: 280px;
    }

    .container{
    }

    .book-background{
      margin: auto; 
      max-width: 232px;
      max-height: 140px;
      background-size: 232px 140px;
      .sub-title{
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
      }
    }

    .ad__title{
      font-weight: 700;
      font-size: 18px;
      line-height: 27px;
      display: flex;
      justify-content: center;
      padding: 0;
      padding-top: 20px;
    }
  }

  @media(max-width: 450px){
    .ad-image{
      left: 10%;
    }
  }

  @media(max-width: 400px){
    .ad-image{
      left: 6%;
    }
  }
`;
