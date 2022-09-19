import styled from 'styled-components';

export const StyledAuthContainer = styled.div`
  display: flex;
  padding-top: 90px;
  padding-bottom: 154px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  .container {
    display: flex;
    flex-direction: column;
    max-width: 413px;
    width: 100%;

    h1 {
    font-weight: 700;
    font-size: 40px;
    }
    
    span {
      padding-top: 9px;
      &.is-invalid{
        color: #ED2E7E;
      }
    }
  }
  .auth{
    margin-top: 60px;
  }

  .button-container{
    max-width: 151px;
    width: 100%;
  }

  .input-container{
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100px;
  }

  img{
    align-self: start;
  }
`;
