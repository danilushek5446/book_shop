import styled from 'styled-components';

export const StyledDiv = styled.div`
  height: 400px;
  max-width: 1280px;
  width: 100%;
  background: #F0F4EF;
  border-radius: 16px;
  position: relative;
  display: flex;
  margin-top: 100px;
  justify-content: end;
  .ad__title{
    margin: 0;
    margin-left: 19%;
    margin-top: 75px;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
  }

  .container{
    max-width: 640px;
    width: 100%;
  }

  .sub-title-background{
    max-width: 550px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .sub-title{
      margin-top: 10px;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      max-width: 415px;
      width: 100%;
      color: #344966;
      margin-left: 107px;
    }
    button{
      margin-right: 12%;
      margin-top: 50px;
    }
  }

  .ad-image{
    position: absolute;
    bottom: 0px;
    left: 108px;
  }
  .ad-image-fairy{
    position: absolute;
    bottom: 0px;
  }
`;
