import styled from 'styled-components';

export const StyledFooter = styled.div`
  height: 341px;
  background-color: #0D1821;
  max-width: 2560px;
  width: 100%;
  color: #F0F4EF;
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #F0F4EF;

  .container{
    max-width: 1280px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .footer-email{
      margin-top: 40px;
    }
  }

  .contact-info{
    display: flex;
    flex-direction: column;
    img{
      height: 46px;
      width: 88px;
    }
  }

  .links{
    display: flex;
    flex-direction: column;
    height: 130px;
    justify-content: space-between;
    margin-right: 5%;
  }

  .map-container{
    display: flex;
    flex-direction: column;
  }
`;
