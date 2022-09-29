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

`;
