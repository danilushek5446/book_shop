/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 999;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #F0F4EF;
  border-radius: 16px;
  top: 50px;
  width: 413px;
  box-sizing: border-box;
  padding: 15px;

  .example-thumb{
    height: 25px;
    line-height: 25px;
    width: 25px;
    text-align: center;
    color: #fff;
    border-radius: 50%;
    cursor: grab;
    font-size: 0;
    background-color: white;
    border: solid 2px #BFCC94;
    :focus{
      border: solid 2px #BFCC94;
      outline: none;
    }
    :active{
      outline: 10px solid rgb(185, 186, 195, 0.5);
     
      :nth-child(2){
        background: #8D9F4F;
      }
    }
  }

  .example-track{
    top: 8px;
    height: 12px;
    border-radius: 999px;
  }

  .example-track-1{
    background: #BFCC94;
  }

  .example-track-0{
    background: #D6D8E7;
  }

  .example-track-2{
    background: #D6D8E7;
  }

  .text-container{
    display: flex;
    padding-top: 35px;
    justify-content: space-between;
    padding-bottom: 40px;
  }

`;
