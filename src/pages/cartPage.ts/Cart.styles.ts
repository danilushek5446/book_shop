import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  max-width: 1280px;
  width: 100%;
  .empty-cart{
    padding-top: 80px;
    padding-bottom: 140px;
    display: flex;
    max-width: 1000px;
    width: 100%;
    justify-content: space-between;
    img{
      max-width: 433px;
      width: 100%;
      max-height: 261px;
      height: 100%;
    }
  }
  .container{
    display: flex;
    flex-direction: column;
    .empty-cart-subtitle{
      max-width: 465px;
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
      color: #344966;
      padding-bottom: 60px;
    }
    .empty-cart-title{
      font-weight: 700;
      font-size: 40px;
      line-height: 60px;
      color: #0D1821;
      padding-bottom: 20px;
    }
  }
  .cart-items-container{
    display: flex;
    flex-direction: column;
    >div:last-child {
      border: none;
    }
  }
  .cart-items-container{
    width: 100%;
    :last-child{
      border: none;
    }
  }

  .not-empty-cart{
    width: 100%;
  }
`;
