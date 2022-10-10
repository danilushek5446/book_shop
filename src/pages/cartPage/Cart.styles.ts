import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  max-width: 1280px;
  width: 100%;
  .empty-cart{
    padding-top: 84px;
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
    .total-price{
      font-weight: 500;
      font-size: 36px;
      line-height: 54px;
      color: #0D1821;
      padding-bottom: 30px;
    }

    .continue-shopping-container{
      max-width: 268px;
      width: 100%;
      max-height: 48px;
      height: 100%;
      padding-bottom: 114px;
    }

    .continue-shopping{
      max-width: 268px;
      border: 1px solid #0D1821;
      background: white;
      color: #0D1821;
    }

    .buttons-container{
      display: flex;
      max-width: 460px;
      width: 100%;
      justify-content: space-between;
    }

    .chekout-container{
      max-width: 174px;
      width: 100%;
      max-height: 44px;
      height: 100%;
    }
  }

  @media(max-width: 1280px){
    justify-content: center;
    .not-empty-cart{
      padding: 15px;
      max-width: 800px;
    } 
  }

  @media(max-width: 825px){
    .not-empty-cart{
      padding: 15px;
      max-width: 520px;
    } 
  }

  @media(max-width: 600px){
    .book-content{
      display: flex;
      justify-content: center;

      .book-picture{
        width: 135px;
        height: 202px;
      }
    }
    .container{
      .book-name{
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;
        max-width: 140px;
      }

      .book-author{
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
      }

      .book-price{
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
      }

      .book-total-price{
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
      }

      .count-container img {
        padding-left: 15px;
      }
    }
    
    .not-empty-cart{
      padding: 0;

      .total-price{
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .continue-shopping-container{
        padding-bottom: 20px;
        max-width: 289px;
        padding-bottom: 20px;
        .continue-shopping{
          max-width: 289px;
        }
      }
      .buttons-container{
        flex-direction: column;
        align-items: center;
        max-width: 550px;
        margin: 0;
        padding-bottom: 100px;

        .continue-shopping-containe{
          padding-bottom: 20px;
          max-width: 289px;
          padding-bottom: 20px;

          button{
            max-width: 289px;
          }
        }

        .chekout-container{
          max-width: 289px;
          margin: 0;

          button{
            max-width: 289px;
          }
        }
      }
    }
    .container{
      button{
        max-width: 290px;
      }
      
      .empty-cart-subtitle{
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        max-width: 233px;
      }

      .empty-cart-title{
        font-weight: 700;
        font-size: 18px;
        line-height: 27px;
      }
    }
    
  }

  @media(max-width: 820px){
    .empty-cart{
      flex-direction: column-reverse;
      align-items: center;
    }

    .empty-cart img{
      max-height: 176px;
      max-width: 290px;
      padding-top: 40px;
    }
  }
`;
