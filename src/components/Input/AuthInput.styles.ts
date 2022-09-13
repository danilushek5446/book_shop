import styled from 'styled-components';

export const AuthStyledInput = styled.input`
  box-sizing: border-box;
  background: #F0F4EF;
  border-radius: 16px;
  width: 100%;
  height: 64px;
  border: none;
  padding-left: 62px;
  padding-top: 18px;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;

  :valid{
    background: #F3FDFA;
    border: 2px solid #00BA88;
    &.is-invalid{
      background: #FFF2F7;
      border: 2px solid #ED2E7E;
      ~button{
        color: #ED2E7E; 
      }
    }
    ~label{
      .form-control{
        color: #00BA88;
      }
      ~button{
        color: #00BA88; 
      }
      color: #00BA88;
      top: 6px;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      &.is-invalid{
        color: #ED2E7E;
        top: 6px;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
      }
    }
  }
`;

export const AuthStyledInputLabelsContainer = styled.div`
  position: relative;
  max-width: 630px;
  width: 100%;

  img{
    position: absolute;
    top: 20px;
    left: 24px;
  }
  label{
    position: absolute;
    top: 20px;
    left: 64px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #B9BAC4;
    :hover{
      cursor: text;
    }
  }
  button {
    position: absolute;
    top: 18px;
    right: 20px;
    border: none;
    font-weight: 500;
    font-size: 22px;
    background: none;
    display: none;
    cursor: pointer;
  }
  :hover button{
    display: block;
  }

  .search{
    ~button {
      top: 5px;
    }
    :valid{
      background: white;
      color: black;
      border: 2px solid black;
      ~label{
        color: #B9BAC3;
      }
    }
  }
`;
