import styled from 'styled-components'

export const MainWrapper = styled.div`
   @media (max-width: 840px) {
      gap: 2rem
   }    

   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 7rem;

   padding: 4rem;
`

export const InputsWrapper = styled.div`
   @media (max-width: 495px) {
      gap: .5rem;
   }

   display: flex;
   flex-direction: row;
   align-items: center;

   gap: 1rem;
`

export const Dots = styled.span`
   @media (max-width: 600px) {
      font-size: 3rem;
      transform: translateY(1rem)
   }

   color: #f1f5f9;
   font-size: 4rem;
   transform: translateY(1.5rem)
`

export const ButtonsWrapper = styled.div`
   @media (max-width: 495px) {
      gap: 1rem;
   }

   display: flex; 
   flex-direction: row;
   gap: 2rem;

   position: relative;
`