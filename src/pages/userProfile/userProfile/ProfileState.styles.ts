import styled from 'styled-components';

export const StyledProfile = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 1280px;
  width: 100%;
  padding-top: 50px;
  margin-bottom: 182px;

  .title{
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
  }

  .container{
    max-width: 956px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    .avatar{
      max-width: 305px;
      width: 100%;
      max-height: 305px;
      height: 100%;
      object-fit: contain; 
    }
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
  
  .change-password{
    padding-top: 40px;
  }

  .change-info-title{
    text-decoration: underline;
    color: #8D9F4F;
    cursor: pointer;
  }

  .image-container{
    position: relative;
  }

  .upload-container{
    position: absolute;
    left: 230px;
    top: 230px;
    input{
      display: none;
    }
    ~div{
      position: absolute;
    }
  }

  @media(max-width: 1280px){
    .container{
      max-width: 834px;
      padding: 5px;
    }
    .image-container{
      .avatar{
        max-width: 255px;
      }
    }

    .upload-container{
      .add-avater-button{
        width: 40px;
        height: 40px;
        bottom: 10px;
        right: 35px;
      }
    }
  }

  @media(max-width: 820px){
    .container{
      flex-direction: column;
      align-items: center;
    }

    .upload-container{
      top: 200px;
    }

    .change-info-container{
      flex-direction: column;
    }
  }
`;
