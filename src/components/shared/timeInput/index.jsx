import * as S from './styles.tsx'

const TimeInput = (props) => {
   

   return (
      <S.InputDiv>
         <S.InputTitle>{props.title}</S.InputTitle>
         <S.Input
            type='number'
            value={props.value >= props.max ? props.max : props.value}
            onChange={(e) => props.stateMethod(e.target.value)}
            max={props.max}
            disabled={props.disabled ? true : false}
         />
      </S.InputDiv>
   )
}

export default TimeInput