import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  padding-top: 80px;
  padding-bottom: 30px;
  .circle{
    border: 2px solid #0D1821;
    border-radius: 50%;
    width: 13.33px;
    height: 13.33px;
    margin-left: 18px;
    margin-right: 18px;
    cursor: pointer;
  }

  .pagination-container{
    display: flex;
    justify-content: center;
    max-width: 1280px;
    width: 100%;
  }

  .pagination-button{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7px;
    height: 14px;
    cursor: pointer;
  }

  .back-button{
    padding-right: 45px;
  }

  .forward-button{
    padding-left: 45px;
  }

  .active{
    background: #0D1821;
  }
`;
