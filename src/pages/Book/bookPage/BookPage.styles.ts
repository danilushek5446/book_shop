import styled from 'styled-components';

export const StyledBookContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  width: 100%;
  padding-top: 20px;

  .book-container{
    display: flex;
    max-width: 1280px;
    width: 100%;
    justify-content: space-between;
    padding-top: 20px;
    .book-name{
      font-weight: 700;
      font-size: 40px;
      line-height: 60px;
      color: #0D1821;
    }
    
    .book-author{
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
      color: #0D1821;
    }

    .price{
        max-width: 305px;
        width: 100%;
    }

    .book-rating{
        padding-bottom: 30px;
    }

    .book-description{
      max-width: 630px;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #344966;
      white-space: pre-wrap;
    }

    .contenet-container{
      display: flex;
      flex-direction: column;
    }

    .book-picture{
      max-width: 522px;
      max-height: 779px;
      height: 100%;
      width: 100%;
    }

    .book-description-title{
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
      color: #0D1821;
    }

    .contenet-container{
      button{
        max-width: 216px;
        width: 100%;
      }
    }

    .hardcover-title{
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #344966;
      padding-top: 74px;
      padding-bottom: 14px;
    }
  }

  .book-rating{
    padding-left: 14px;
    padding-right: 40px;
    padding-top: 4px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #B9BAC4;
  }

  .rating-container{
    display: flex;
  }

  .empty-icons{
    >svg:last-child{
        padding: 0;
    }
  }

  svg{
    padding-right: 32px;
    >svg:last-child{
        padding-left: 0;
    }
    path{
        stroke: #BFCC94;
        stroke-width: 1;
    }
  }

  .rate-star{
    max-width: 27.5px;
    width: 100%;
    max-height: 27.5px;
    height: 100%;
  }

  .in-cart{
    height: 44px;
   background: white;
   color: #0D1821;
   border: 1px solid #0D1821;
   cursor: default;
 }

 .book-image-container{
   position: relative;
   .book-favorite{
      position: absolute;
      opacity: 0.6;
      width: 59px;
      height: 59px;
      top: 20px;
      left: 20px;
      cursor: pointer;
   }
   .in-favorite{
      opacity: 1;
   }
 }

  .comments-container{
    padding-top: 110px;

    .comments-title{
      font-weight: 700;
      font-size: 40px;
      line-height: 60px;
      color: #0D1821;
      padding-bottom: 50px;
    }

    .add-comment-container{
      max-width: 738px;
      width: 100%;
      height: 200px;
      padding-top: 55px;
      padding-bottom: 30px;
    }

    .textarea-container{
      max-height: 128px;
      height: 100%;
    }

    .add-comment{
      width: 100%;
      height: 100%;
      background: #F0F4EF;
      border-radius: 16px;
      border: none;
      resize: none;
      padding: 20px;
      box-sizing: border-box;
      :focus{
        outline: none;
      }
      ::placeholder{
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        letter-spacing: 0.75px;
        color: #B9BAC4;
        padding-left: 4px;
      }
    }

    .add-button-container{
      padding-top: 40px;
    }
  }

  @media(max-width: 1280px){
    .book-container{
      box-sizing: border-box;
      padding: 15px;
      justify-content: space-around;

      .book-picture{
        max-width: 391px;
        max-height: 584px;
        height: 100%;
      }

      .contenet-container{
        padding-left: 15px;
        max-width: 390px;
      }

      .book-name{
        font-weight: 700;
        font-size: 32px;
        line-height: 48px;
      }

      .book-author{
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
      }

      .rating-container{
        flex-direction: column;
      }

      .book-description-title{
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        padding-top: 25px;
        padding-bottom: 25px;
      }
      
      .book-description{
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        max-width: 392px;
      }

      .current-rating{
        display: flex;
        align-items: center;
        padding-top: 20px;
        padding-bottom: 20px;
      }
      
      .book-rating{
        padding-bottom: 0;
      }

      .hardcover-title{
        padding-top: 30px;
      }
    }
  }
`;
