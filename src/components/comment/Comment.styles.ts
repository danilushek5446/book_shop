import styled from 'styled-components';

export const StyledCommentContainer = styled.div`
  display: flex;
  max-width: 738px;
  width: 100%;
  margin-bottom: 10px;
  background: #F0F4EF;

  .avatar-container{
    padding-left: 30px;
    padding-top: 30px;
  }

  .avatar{
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  .info-container{
    display: flex;
    flex-direction: column;
    padding-top: 35px;
    padding-left: 20px;
  }

  .name{
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.75px;
    color: #0D1821;
  }

  .dateOfPost{
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.75px;
    color: #B9BAC4;
    padding-top: 4px;
  }

  .comment{
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.75px;
    color: #344966;
    padding-top: 9px;
    max-width: 598px;
    width: 100%;
    padding-bottom: 10px;
    padding-right: 10px;
    box-sizing: border-box;
  }

`;
