import styled from 'styled-components';

export const StyledProfile = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 1280px;
  width: 100%;
  padding-top: 50px;
  margin-bottom: 124px;

  .container{
    max-width: 956px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .info-container{
    width: 100%;
    max-width: 522px;
  }

  .profile-info{
    margin-top: 20px;
  }

  .change-info-container{
    display: flex;
    justify-content: space-between;
  }

  .change-info{
    text-decoration: underline;
    color: #8D9F4F;
    cursor: pointer;
  }
`;
