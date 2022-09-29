import styled, { css } from 'styled-components';

export const StyledDiv = styled.div<{ count: number }>`
  position: relative;
  cursor: pointer;
  background-color: #344966;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  stroke: #F0F4EF;
  stroke-width: 2px;

  label{
    display: none;
  }

  ${({ count }) => {
    if (count) {
      return css`
        label {
          display: block;
          background: #BFCC94;
          color: #344966;
          position: absolute;
          left: 68.75%;
          right: -16.67%;
          top: -12.5%;
          bottom: 64.58%;
          width: 23px;
          height: 23px;
          border-radius: 50%;
          text-align: center;
        }
      `;
    }
  }}
`;
