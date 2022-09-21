import styled, { css } from 'styled-components';
import uncheked from '../../../assets/icons/Uncheked.png';
import cheked from '../../../assets/icons/Cheked.png';

export const StyledContainer = styled.div`
  z-index: 999;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #F0F4EF;
  border-radius: 16px;
  top: 50px;
  width: 195px;
  padding: 15px;
  box-sizing: border-box;
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
