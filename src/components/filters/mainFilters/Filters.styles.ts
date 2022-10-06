import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .container{
    display: flex;
    max-width: 628px;
    width: 100%;
    justify-content: space-between;
  }

  .drop-down-list{
    top: 60px
  }

  .dropdown-img-container{
    img{
      position: absolute;
      left: 10px;
    }
  }

  @media(max-width: 1280px){
    flex-direction: column;
    align-items: flex-start;

    h2{
      font-weight: 700;
      font-size: 32px;
      line-height: 48px;
    }

    .container{
      max-width: 804px;
    }

    .dropdown{
      max-width: 255px;
      .dropdown-container{
        max-width: 255px;
      }
    }
  }

  @media(max-width: 825px){
    align-items: center;
    h2{
      font-weight: 700;
      font-size: 32px;
      line-height: 48px;
    }

    .container{
      flex-direction: column;
      align-items: center;
      height: 190px;
    }

    .dropdown{
      max-width: 290px;
      .dropdown-container{
        max-width: 290px;
      }
    }

    .drop-down-list{
      max-width: 290px;
    }
  }
`;
