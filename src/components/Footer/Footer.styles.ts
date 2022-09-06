import styled from 'styled-components';

export const StyledFooter = styled.div`
  height: 341px;
  background-color: #0D1821;
  width: 2560px;
  color: #F0F4EF;
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #F0F4EF;
`;

export const StyledContainer = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .footer-email{
    margin-top: 40px;
  }
`;

export const StyledContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  img{
    height: 46px;
    width: 88px;
  }
`;

export const StyledLinks = styled.div`
  display: flex;
  flex-direction: column;
  height: 130px;
  justify-content: space-between;
  margin-right: 5%;
`;

export const StyledMapContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
