import styled from 'styled-components';

export const AuthStyledInputLabelsContainer = styled.div<{ name: string }>`
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
`;

export const AuthStyledInput = styled.input`
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
  :valid~label{
    top: 6px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  }
`;
