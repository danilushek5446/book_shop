import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
  z-index: 999;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #F0F4EF;
  border-radius: 16px;
  top: 50px;
  max-width: 195px;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;

  @media(max-width: 1280px){
    max-width: 255px;
  }
`;

export const StyledItemContainer = styled.div<{ isChecked: boolean }>`
  span{
    color: #B9BAC3;
    cursor: pointer;
  }
  ${({ isChecked }) => {
    if (isChecked) {
      return css`
        span {
          color: #344966;
        }
      `;
    }
  }}
`;
