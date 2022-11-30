import {Fragment} from 'react'
import * as S from './styles.tsx'

const Tab = (props) => {
   let tab

   if(props.active) {
      tab = <S.ActiveTab onClick={() => props.stateMethod(props.value)}>{props.title}</S.ActiveTab>
   } else {
      tab = <S.Tab onClick={() => props.stateMethod(props.value)}>{props.title}</S.Tab>
   }

   return(
      <Fragment>
         {tab}
      </Fragment>
   )
}

export default Tab