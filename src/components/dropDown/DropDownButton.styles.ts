import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 405px;
  width: 100%;
  position: relative;
  cursor: pointer;

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

  .drop-down-list{
    display: none;
    background-color: #F0F4EF;
    border-radius: 16px;
    position: absolute;
    top: 50px;
  }

  .open{
    display: block;
  }

  .drop-down-item{
    .drop-down-items-container{
      padding-left: 15px;
      padding: 15px 15px 15px 0;
    }

    span{
      padding-left: 10px;
    }
    input{
     margin-left: 15px;
    }
  }

  .drop-down-list.genere{
    width: 305px;
  }

  .drop-down-list.price{
    width: 413px;
  }

  .drop-down-list.sort-direction{
    width: 197px;
  }
`;
