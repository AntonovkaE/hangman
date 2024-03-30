import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallows from './Gallows.jsx';
import arr_ru from './assets/data.js'
import Keyboard from './Components/Keyboard.jsx';

function App() {
  const [count, setCount] = useState(0)
  function keyClick(letter) {
    console.log(letter)
  }
  return (
    <>
      <Keyboard onClick={keyClick}></Keyboard>
      <Gallows/>
    </>
  )
}

export default App
