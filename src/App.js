import { useState, useEffect } from 'react'
import * as S from './styles.tsx'
import Tab from './components/shared/tab/index';
import Timer from './components/timer/index';
import Stopwatch from './components/stopwatch/index';

function App() {
   const [currentTab, setCurrentTab] = useState(0)

   const paginationObject = {
      0: <Timer/>,
      1: <Stopwatch/>
   }

   return (
      <S.MainContainer>

         <S.TabsWrapper>
            <Tab
               title={'TIMER'}
               active={currentTab === 0 ? true : false}
               value={0}
               stateMethod={setCurrentTab}
            />
            <Tab
               title={'STOPWATCH'}
               active={currentTab === 1 ? true : false}
               value={1}
               stateMethod={setCurrentTab}
            />
         </S.TabsWrapper>

         {paginationObject[currentTab]}
      </S.MainContainer>
   );
}

export default App;
