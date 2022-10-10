import styled from 'styled-components';

export const StyledBookContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  padding-top: 50px;
  .container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 60px 20px;
    .book-picture{
      max-width: 305px;
      max-height: 448px;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  @media (max-width: 1300px) {
    .book-image-container{
      width: 100%;
    }
    .container{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px 20px;

      .book-picture{
        object-fit: contain;
      }
    }

    .book-content{
      overflow: hidden;
    }
  }

  @media (max-width: 825px) {
    .container{
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px 20px;
    }
  }

  @media(max-width: 550px){
    display: flex;
    flex-direction: column;
    align-items: center;
    .price{
      font-weight: 500;
      font-size: 14px;
      line-height: 28px;
      max-height: 34px;
    }
    .book-image-container{
      .book-favorite{
        width: 25px;
        height: 25px;
        img{
          width: 17px;
          height: 17px;
        }
      }
    }

    .container{

      .book-name{
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        max-width: 173px;
      }

      .book-author{
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        max-width: 173px;
      }
    }
  }
`;
