import { Fragment, useState, useEffect } from 'react'
import * as S from './styles.tsx'
import Button from '../shared/button'
import TimeInput from '../shared/timeInput'
import Laps from './../laps/index';

const Stopwatch = () => {
   const [milisseconds, setMilisseconds] = useState(0)
   const [seconds, setSeconds] = useState(0)
   const [minutes, setMinutes] = useState(0)
   const [hours, setHours] = useState(0)

   const [started, setStarted] = useState(0)
   const [intervalId, setIntervalId] = useState('')

   const [lapCount, setLapCount] = useState(1)
   const [laps, setLaps] = useState([])
   const [lastLap, setLastLap] = useState({
      milisseconds: 0,
      seconds: 0,
      minutes: 0,
      hours: 0
   })

   const checkMinutes = () => {
      if (minutes === 60) {
         setMinutes(0)
         setHours(hours => hours + 1)
      }
   }

   const checkSeconds = () => {
      if (seconds === 60) {
         setSeconds(0)
         setMinutes(minutes => minutes + 1)
      }
   }

   const checkMilisseconds = () => {
      if (milisseconds === 100) {
         setSeconds(seconds => seconds + 1)
         setMilisseconds(0)
      }
   }

   useEffect(() => {
      checkSeconds()
   }, [seconds])

   useEffect(() => {
      checkMinutes()
   }, [minutes])

   useEffect(() => {
      checkMilisseconds()
   }, [milisseconds])

   const handleStartStop = () => {
      if (started === 0) {
         let interval = setInterval(() => {
            setMilisseconds(milisseconds => milisseconds + 1)
         }, 10)

         setIntervalId(interval)
         setStarted(1)
      } else {
         clearInterval(intervalId)
         setStarted(0)
      }
   }

   const handleLap = () => {
      setLapCount(lapCount => lapCount + 1)

      // Get the current instant time
      let current = {
         milisseconds,
         seconds,
         minutes,
         hours
      }

      // Get the last lap Time in ms
      let lastLapInMs = 0
      lastLapInMs += Number(lastLap.milisseconds * 10)
      lastLapInMs += Number(lastLap.seconds * 1000)
      lastLapInMs += Number(lastLap.minutes * 1000 * 60)
      lastLapInMs += Number(lastLap.minutes * 1000 * 60)

      // Get the current instant time in ms
      let currentTimeInMs = 0
      currentTimeInMs += Number(milisseconds * 10)
      currentTimeInMs += Number(seconds * 1000)
      currentTimeInMs += Number(minutes * 1000 * 60)
      currentTimeInMs += Number(hours * 1000 * 60 * 60)

      const differenceInMs = currentTimeInMs - lastLapInMs

      // Get the differences in hours, minutes, seconds and milisseconds
      let diffMilisseconds = (differenceInMs % 1000) / 10
      let diffSeconds = Math.floor((differenceInMs % (60 * 1000)) / 1000)
      let diffMinutes = Math.floor(differenceInMs / (60 * 1000))
      let diffHours = Math.floor(differenceInMs / (60 * 60 * 1000))

      let timeDifference = {
         milisseconds: diffMilisseconds,
         seconds: diffSeconds,
         minutes: diffMinutes,
         hours: diffHours
      }

      setLastLap(current)
      setLaps([...laps, {
         lapNumber: lapCount,
         timeDiff: timeDifference,
         genTime: current
      }])

      console.log(laps)
   }

   const handleReset = () => {
      setStarted(0)
      setMilisseconds(0)
      setSeconds(0)
      setMinutes(0)
      setHours(0)
      clearInterval(intervalId)
      setLapCount(1)
      setLaps([])
      setLastLap({
         milisseconds: 0,
         seconds: 0,
         minutes: 0,
         hours: 0
      })
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

   const lapResetObject = {
      0: <Button
         title={'Reset'}
         color={'#333333'}
         darkerColor={'#232323'}
         handleClick={handleReset} />,
      1: <Button
         title={'Lap'}
         color={'#3751d4'}
         darkerColor={'#1a2f99'}
         handleClick={handleLap} />
   }

   return (
      <S.MainWrapper>

         <S.InputsWrapper>
            <TimeInput
               title={'Hours'}
               value={hours}
               stateMethod={setHours}
               max={99}
               disabled={true}
            />
            <S.Dots>:</S.Dots>
            <TimeInput
               title={'Minutes'}
               value={minutes}
               stateMethod={setMinutes}
               max={60}
               disabled={true}
            />
            <S.Dots>:</S.Dots>
            <TimeInput
               title={'Seconds'}
               value={seconds}
               stateMethod={setSeconds}
               max={60}
               disabled={true}
            />
            <S.Dots>:</S.Dots>
            <TimeInput
               title={'Ms'}
               value={milisseconds}
               stateMethod={setMilisseconds}
               max={100}
               disabled={true}
            />
         </S.InputsWrapper>

         <S.ButtonsWrapper>
            {startStopObject[started]}
            {lapResetObject[started]}
         </S.ButtonsWrapper>

         <Laps laps={laps} />
      </S.MainWrapper>
   )
}

export default Stopwatch