import styled from 'styled-components';

export const StyledBookContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  padding-top: 50px;
  .container{
    display: grid;
    grid-template: 1fr 1fr 1fr/1fr 1fr 1fr 1fr;
    grid-gap: 60px 20px;
    img{
      width: 305px;
      height: 448px;
      object-fit: contain;
    }
  }
`;
