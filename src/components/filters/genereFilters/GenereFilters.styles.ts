import styled from 'styled-components';
import uncheked from '../../../assets/icons/Uncheked.png';
import cheked from '../../../assets/icons/Cheked.png';

export const StyledContainer = styled.div`
  z-index: 999;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #F0F4EF;
  border-radius: 16px;
  top: 50px;
  width: 305px;

  .drop-down-items-container{
    padding-bottom: 15px;
  }
  
  .drop-down-item{
    position: relative;
    padding-top: 15px;
    label{
      background-image: url(${uncheked});
      width: 25px;
      height: 25px;
      background-repeat: no-repeat;
      background-position: center left;
      position: absolute;
      left: 15px;
    }
    span{
      padding-left: 20px;
    }
    input{
     margin-left: 15px;
     opacity: 0;
     :checked{
      ~label{
        background-image: url(${cheked})
      }
     }
    }
  }

`;
