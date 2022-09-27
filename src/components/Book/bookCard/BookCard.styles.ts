import styled from 'styled-components';

export const StyledBookContainer = styled.div`
  display: flex;
  width: 100%;
  color: #0D1821;
  border-bottom: 1px solid #D6D8E7;
  padding-bottom: 40px;
  padding-top: 40px;

  .book-name{
   font-weight: 700;
   font-size: 40px;
   line-height: 60px;
  }

  .book-price{
   font-weight: 500;
   font-size: 36px;
   line-height: 54px;
  }

  .book-author{
   font-weight: 500;
   font-size: 24px;
   line-height: 36px;
  }

  .book-picture{
   max-width: 197px;
   width: 100%;
   max-height: 289px;
   height: 100%;
  }

 .decrease-button{
   border: none;
   border-radius: 50%;
   width: 32px;
   height: 32px;
 }

 .increase-button{
   border: none;
   border-radius: 50%;
   width: 32px;
   height: 32px;
 }

 .count-container{
   display: flex;
   align-items: center;
 }

 .titles-container{
   display: flex;
   flex-direction: column;
 }

 .count-container{
   padding-top: 40px;
   padding-bottom: 40px;
   img{
      padding-left: 60px;
   }
 }

 .container{
   padding-left: 20px;
 }

 .book-count{
   padding-left: 15px;
   padding-right: 15px;
 }
`;
