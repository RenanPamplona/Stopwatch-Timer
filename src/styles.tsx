import styled from 'styled-components'

export const MainContainer = styled.div`
   min-height: 100vh;

   display: flex;
   flex-direction: column;

   background-color: #121212
`  

export const TabsWrapper = styled.div`
   @media (max-width: 840px) {
      grid-template-columns: 1fr
   }   

   display: grid;
      grid-template-columns: 1fr 1fr
`