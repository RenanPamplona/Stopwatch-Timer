import { Fragment } from 'react'
import * as S from './styles.tsx'

const Laps = (props) => {
   const display = (element) => {
      return element < 10 ? `0${element}` : `${element}`
   }

   return (
      <S.Wrapper>
         <S.Header>
            <S.Title>Lap</S.Title>
            <S.Title>Lap Time</S.Title>
            <S.Title>General Time</S.Title>
         </S.Header>

         <S.Elements>
            {props.laps?.map(lap => 
               <S.Lap>
                  <S.Info>{lap?.lapNumber}</S.Info>
                  <S.Info>
                     {`${display(lap?.timeDiff.hours)} : ${display(lap?.timeDiff.minutes)} : ${display(lap?.timeDiff.seconds)} : ${display(lap?.timeDiff.milisseconds)}`}
                  </S.Info>
                  <S.Info>
                     {`${display(lap?.genTime.hours)} : ${display(lap?.genTime.minutes)} : ${display(lap?.genTime.seconds)} : ${display(lap?.genTime.milisseconds)}`}
                  </S.Info>
               </S.Lap>   
            )}
         </S.Elements>
      </S.Wrapper>
   )
}

export default Laps