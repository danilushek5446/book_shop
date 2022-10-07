import styled from 'styled-components';
import fairy from '../../assets/images/atz3.png';

export const StyledDiv = styled.div`
  height: 400px;
  max-width: 1280px;
  width: 100%;
  background: #F0F4EF;
  border-radius: 16px;
  position: relative;
  display: flex;
  margin-top: 100px;
  justify-content: end;
  position: relative;
  .ad__title{
    margin: 0;
    margin-left: 19%;
    margin-top: 75px;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
  }

  .container{
    max-width: 640px;
    width: 100%;
  }

  .sub-title-background{
    max-width: 550px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .sub-title{
      margin-top: 10px;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      max-width: 415px;
      width: 100%;
      color: #344966;
      margin-left: 107px;
    }
    button{
      margin-right: 12%;
      margin-top: 50px;
    }
  }

  .ad-image{
    position: absolute;
    bottom: 0px;
    left: 108px;
  }
  .ad-image-fairy{
    position: absolute;
    bottom: 0px;
  }

  @media(max-width: 1280px){
    .ad-image{
      width: 389px;
      left: 0;
    }

    .ad-image-fairy{
      content: url(${fairy});
    }

    .ad__title{
      font-weight: 700;
      font-size: 32px;
      line-height: 48px;
    }
    
    .container{
      max-width: 500px;
    }
    
    .sub-title-background{
      padding-left: 40px;
      .sub-title{
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
      }
      max-width: 392px;
    }
  }

  @media(max-width: 820px){
    margin: 15px;
    height: 501px;
    display: flex;
    justify-content: center;
    max-width: 520px;
    .ad-image{
      left: 25%;
      width: 282px;
      height: 250px;
    }

    .ad-image-fairy{
      width: 246px;
      height: 391px;
      bottom: 170px;
      right: 0;
    }

    .ad__title{
      font-weight: 700;
      font-size: 32px;
      line-height: 48px;
      margin: 0;
      padding-top: 20px;
      padding-bottom: 20px;
    }
    
    .container{
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    
    .sub-title-background{
      max-width: 249px;
      padding-left: 15px;
      .sub-title{
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        margin: 0;
      }
    }
  }

  @media(max-width: 820px){
    margin: 0;
    .ad-image{
      left: 20%;
      width: 282px;
      height: 250px;    
    }
  }

  @media(max-width: 390px){
    .ad-image{
      left: 7%;
    }
  }
`;
