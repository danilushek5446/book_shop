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

  .dropdown-container{
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 8px 10px 15px;
    max-width: 196px;
    width: 100%;
    height: 48px;
    background: #F0F4EF;
    border-radius: 16px;
  }
`;
