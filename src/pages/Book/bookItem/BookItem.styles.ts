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
   padding-top: 2px;
   padding-left: 25px;
   font-weight: 500;
   font-size: 16px;
   line-height: 24px;
   color: #B9BAC4;
 }

 .rating-container{
   display: flex;
 }

 .empty-icons{
   >svg:last-child{
      padding: 0;
   }
 }

 svg{
   padding-right: 32px;
   >svg:last-child{
      padding-left: 0;
   }
   path{
      stroke: #BFCC94;
      stroke-width: 1;
   }
 }

 .in-cart{
   background: white;
   color: #0D1821;
   border: 1px solid #0D1821;
   cursor: default;
 }

 .book-image-container{
   position: relative;
   .book-favorite{
      position: absolute;
      opacity: 0.6;
      width: 48px;
      height: 48px;
      top: 20px;
      left: 20px;
      cursor: pointer;
   }
   .in-favorite{
      opacity: 1;
   }
 }
`;
