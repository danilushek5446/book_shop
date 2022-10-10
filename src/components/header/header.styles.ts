import styled from 'styled-components';

export const StyledHeaderContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  padding-top: 24px;
  padding-bottom: 40px;
  .container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .header-logo{
      height: 46px;
      cursor: pointer;
    }
    button{
      height: 50px;
    }
    .header__title{
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #000000;
    }
    align-items: center;
    }
  .input-container{
    display: flex;
    max-width: 739px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .auth-container{
    display: flex;
    max-width: 220px;
    width: 100%;
    justify-content: space-between;
  }


  .input-label-container{
    position: relative;
    width: 100%;
    max-width: 600px;

    .search-input{
      box-sizing: border-box;
      background: #F0F4EF;
      border-radius: 16px;
      width: 100%;
      height: 64px;
      border: none;
      padding-left: 62px;
      padding-top: 18px;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;

      :valid{
        background: #F3FDFA;
        border: 2px solid #00BA88;
        ~label{
          ~button{
          }
          top: 6px;
          font-weight: 500;
          font-size: 14px;
          line-height: 24px;
        }
      }
    }

    img{
      position: absolute;
      top: 20px;
      left: 24px;
    }
    label{
      position: absolute;
      top: 20px;
      left: 64px;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #B9BAC4;
      :hover{
        cursor: text;
      }
    }
    button {
      position: absolute;
      top: 5px;
      right: 20px;
      border: none;
      font-weight: 500;
      font-size: 22px;
      background: none;
      display: none;
      cursor: pointer;
    }
    :hover button{
      display: block;
    }
  }

  @media (max-width: 1300px) {
    .padding-container{
      padding: 10px;
    }
    .header__title{
      padding-left: 50px;
      padding-right: 50px;
    }

    .auth-container{
      justify-content: unset;
      max-width: 240px;
      margin-left: 18%;
      z-index: 999;
      div{
        margin-left: 24px;
      }
    }
  }

  @media (max-width: 900px) {
    .auth-container{
      margin-left: 14%;
    }
  }

  @media (max-width: 825px) {
    
    position: relative;
    height: 120px;
    .input-label-container {
      position: absolute;
      max-width: unset;    
      box-sizing: border-box;
      padding-left: 10px;
      padding-right: 10px;
      top: 100px;
      left: 0;
      img{
        top: 13px;
      }
      label{
        top: 13px;
      }
      .search-input {
        height: 48px;
      }
    }
    .input-container{
      max-width: 60px;
    }

    .auth-container{
      max-width: 189px;
      margin-left: 0;
      button{
        font-size: 12px;
        padding: 10px 23px;
        height: 38px;
      }
      div{
        margin-left: 13px;
      }
    }
    .header__title{
      padding-left: 0;
    }
  }

  @media (max-width: 450px) {
    .container{
      .header-logo{
        width: 62px;
        height: 31px;
      }
    }

    .auth-container{
      max-width: 150px;
      div{
        margin-left: 18px;
      }
      div{
        width: 35px;
        height: 35px;
      }
    }
  }
`;
