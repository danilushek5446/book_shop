import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  .container{
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .auth{
    margin-top: 60px;
  }
  
  button{
    margin-bottom: 20px;
  }

  span{
    padding-top: 10px;
  }

  .button-container{
    max-width: 170px;
    width: 100%;
  }

  .input-container{
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100px;
  }
`;
