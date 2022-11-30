import styled from 'styled-components'

export const InputDiv = styled.div`
   color: #f1f5f9;

   display: flex;
   flex-direction: column;
   gap: 1rem;

   align-items: center;
`

export const InputTitle = styled.span`
   @media (max-width: 840px) {
      font-size: 1.5rem
   } 

   @media (max-width: 600px) {
      font-size: 1rem
   }

   font-size: 2rem
`

export const Input = styled.input`
   @media (max-width: 840px) {
      width: 7rem;
      height: 7rem;
      font-size: 5rem
   } 

   @media (max-width: 600px) {
      width: 5rem;
      height: 5rem;
      font-size: 3rem
   }

   ::-webkit-inner-spin-button{
      -webkit-appearance: none; 
      margin: 0; 
   };
   ::-webkit-outer-spin-button{
      -webkit-appearance: none; 
      margin: 0; 
   };

   width: 10rem;
   height: 10rem;
   background-color: transparent;
   border: none;

   color: #f1f5f9;
   text-align: center;
   font-size: 7rem
`