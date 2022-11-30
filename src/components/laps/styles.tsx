import styled from 'styled-components'

export const Wrapper = styled.div`
   @media (max-width: 840px) {
      width: 30rem
   }

   @media (max-width: 495px) {
      width: 20rem
   }

   width: 40rem;
`

export const Header = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;

   padding: .5rem;
   border-bottom: 2px solid #595959;
   margin-bottom: 1rem
`

export const Title = styled.span`
   @media (max-width: 495px) {
      font-size: 1rem;
   }

   display: table;
   margin: auto;

   font-size: 1.2rem;
   color: #c0c4c8
`

export const Elements = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
`

export const Lap = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr
`

export const Info = styled.span`
   @media (max-width: 495px) {
      font-size: .8rem;
   }

   display: table;
   margin: auto;

   font-size: 1.2rem;
   font-weight: 900;
   color: #f1f5f9
`