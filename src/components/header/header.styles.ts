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
`;

export const StyledInput = styled.input`
  background: #F0F4EF;
  border-radius: 16px;
  width: 100%;
  height: 64px;
  border: none;
  padding-left: 60px;
  :focus{
   background-color: white;
  }
  :focus label{
   top: 0;
  }
`;

export const StyledInputLabelsContainer = styled.div`
  position: relative;
  max-width: 630px;
  width: 100%;
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
  .header-input:focus~label{
    top: 6px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  }
`;
