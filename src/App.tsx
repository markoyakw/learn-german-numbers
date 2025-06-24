import './assets/styles/reset.css'
import './assets/styles/global-variables.css'
import './assets/styles/fonts.css'
import StartScreen from '@/src/components/StartScreen/StartScreen'
import classes from "./App.module.css"
import { useState } from 'react'
import type { TGameMode } from './components/types'
import HearAndTypeScreen from './components/GameScreen/HearAndTypeScreen'
import SeeAndTypeScreen from './components/GameScreen/SeeAndTypeScreen'

function App() {

  const [activeGameMode, setActiveGameMode] = useState<TGameMode | null>(null)

  const changeActiveGameMode = (newGameMode: TGameMode) => {
    setActiveGameMode(newGameMode)
  }

  const closeGameWindow = () => {
    setActiveGameMode(null)
  }

  return (
    <div className={classes["app-background"]}>
      <div className={classes["container"]}>
        {activeGameMode || < StartScreen />}
        {activeGameMode === "hearAndType" && <HearAndTypeScreen />}
        {activeGameMode === "seeAndType" && <SeeAndTypeScreen />}
      </div>
    </div>
  )
}

export default App
