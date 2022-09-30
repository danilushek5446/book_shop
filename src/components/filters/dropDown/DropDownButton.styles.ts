import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 195px;
  width: 100%;
  position: relative;

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
    cursor: pointer;
  }

  .open{
    transform: rotate(90deg);
  }

  .sort-direction{
      background: white;
  }
`;
