import styled from 'styled-components';

export const StyledHeaderContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  .container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 128px;
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
    max-width: 200px;
    width: 100%;
    justify-content: space-between;
  }


  .input-label-container{
    position: relative;
    max-width: 630px;
    width: 100%;

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
`;
