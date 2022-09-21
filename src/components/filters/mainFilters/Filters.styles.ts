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
`;
