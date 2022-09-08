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
    left: 64px;
    color: black;
    top: 6px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  }

  div{
    background: #F0F4EF;
  border-radius: 16px;
  width: 100%;
  height: 64px;
  border: none;
  padding-left: 60px;
  }
`;
