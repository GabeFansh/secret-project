import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Buttons'

function App() {

  return (
    <>
      <div>
        <h1 className='header'>Will you be my valentine?</h1>
        <img className="meme" src="./thingy-blank.png"/>
        <Button />
      </div>
    </>
  )
}

export default App
