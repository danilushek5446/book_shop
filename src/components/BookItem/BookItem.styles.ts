import styled from 'styled-components';

export const StyledBookContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-overflow: clip;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  white-space: nowrap;
 .book-name{
    padding-top: 30px;
    color: #344966;
    max-width: 305px;
    overflow: hidden;
    white-space: nowrap;
 }
  
 .book-author{
    color: #B9BAC4;
    padding-bottom: 20px;
    max-width: 305px;
    overflow: hidden;
    white-space: nowrap;
 }

 .price{
    max-width: 305px;
    width: 100%;
 }

 .book-rating{
    padding-bottom: 30px;
 }
`;
