import styled from 'styled-components'

export const Tab = styled.button`
   @media (max-width: 840px) {
      font-size: 2rem;
      color: #585858
   } 

   padding: 1rem;

   background-color: #333333;
   border: none;

   font-size: 3rem;
   font-weight: 900;
   color: #f1f5f9;

   :hover {
      background-color: #272727
   }
`

export const ActiveTab = styled.button`
   @media (max-width: 840px) {
     font-size: 2.5rem;
     border: none;
   }

   padding: 1rem;

   background-color: #393939;
   border: none;
   border-bottom: 5px solid #FFF;

   font-size: 3rem;
   font-weight: 900;
   color: #f1f5f9;

   :hover {
      background-color: #272727
   }
`