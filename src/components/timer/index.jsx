import { Fragment, useState, useEffect } from 'react'
import * as S from './styles.tsx'
import TimeInput from './../shared/timeInput/index';
import Button from './../shared/button/index';

const Timer = () => {
   const [seconds, setSeconds] = useState(0)
   const [minutes, setMinutes] = useState(0)
   const [hours, setHours] = useState(0)
   const [started, setStarted] = useState(0)
   const [intervalId, setIntervalId] = useState('')

   const handleReset = () => {
      setStarted(0)
      setSeconds(0)
      setMinutes(0)
      setHours(0)
      clearInterval(intervalId)

      alert("It's over")
   }

   const checkMinutes = () => {
      if(hours === 0) {
         handleReset()
      } else {
         setMinutes(59)
         setSeconds(59)
         setHours(hours => hours - 1)
      }
   }

   const checkSeconds = () => {
      if(seconds === -1) {
         if(minutes === 0) {
            checkMinutes()
         } else {
            setSeconds(59)
            setMinutes(minutes => minutes - 1)
         }
      }
   }

   useEffect(() => {
      checkSeconds()
   }, [seconds])

   useEffect(() => {
   }, [minutes])

   const handleStartStop = () => {
      if(started === 0) {
         let interval = setInterval(() => {
            setSeconds(seconds => seconds - 1)
         }, 1000)

         setIntervalId(interval)
         setStarted(1)
      } else {
         clearInterval(intervalId)
         setStarted(0)
      }
   }

   const startStopObject = {
      0: <Button
         title={'Start'}
         color={'#36ba22'}
         darkerColor={'#208c0f'}
         handleClick={handleStartStop} />,
      1: <Button
         title={'Stop'}
         color={'#c71a23'}
         darkerColor={'#960e14'}
         handleClick={handleStartStop} />
   }

   return (
      <S.MainWrapper>

         <S.InputsWrapper>
            <TimeInput
               title={'Hours'}
               value={hours}
               stateMethod={setHours}
               max={99}
            />
            <S.Dots>:</S.Dots>
            <TimeInput
               title={'Minutes'}
               value={minutes}
               stateMethod={setMinutes}
               max={59}
            />
            <S.Dots>:</S.Dots>
            <TimeInput
               title={'Seconds'}
               value={seconds}
               stateMethod={setSeconds}
               max={59}
            />
         </S.InputsWrapper>

         <S.ButtonsWrapper>
            {startStopObject[started]}
            <Button
               title={'Reset'}
               color={'#333333'}
               darkerColor={'#232323'}
               handleClick={handleReset}
            />
         </S.ButtonsWrapper>

      </S.MainWrapper>
   )
}

export default Timer