import styled from 'styled-components';

export const AuthStyledInput = styled.input`
  box-sizing: border-box;
  background: #F0F4EF;
  border-radius: 16px;
  width: 100%;
  height: 64px;
  border: none;
  padding-left: 60px;
  :focus{
   background-color: white;
   color: transparent;
    text-shadow: 0 0 0 black;
  }
  :valid{
    background: #F3FDFA;
    border: 2px solid #00BA88;
  }
  :valid.is-invalid{
    background: #FFF2F7;
    border: 2px solid #ED2E7E;
  }

  :valid~label.form-control{
    color: #00BA88;
  }

  :valid~label{
    color: black;
    top: 6px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  }
  :valid~label.is-invalid{
    color: #ED2E7E;
    top: 6px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  }
  .is-invalid{
    background: #FFF2F7;
    border: 2px solid #ED2E7E;
  }
`;

export const AuthStyledInputLabelsContainer = styled.div`
  position: relative;
  max-width: 630px;
  width: 100%;
  margin-top: 30px;
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
`;
