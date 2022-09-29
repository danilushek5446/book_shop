import styled from 'styled-components';
import backgroundBooks from '../../assets/images/unsplash_DgQf1dUKUTM.png';

export const StyledDiv = styled.div`
  height: 400px;
  max-width: 1280px;
  width: 100%;
  background: #F0F4EF;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
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
`;
