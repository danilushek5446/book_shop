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
      width: 305px;
      height: 448px;
      object-fit: contain;
    }
  }

  @media (max-width: 1280px) {
    .container{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px 20px;

      .book-picture{
        width: 254px;
        height: 372px;
        object-fit: contain;
      }
    }

    .book-content{
      max-width: 254px;
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
    .book-image-container{
      .book-favorite{
        width: 25px;
        height: 25px;
        img{
          width: 18px;
          height: 18px;
        }
      }
    }

    .container{

      .book-content{
        max-width: 135px;
      }

      .book-picture{
        width: 135px;
        height: 192px;
      }

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
