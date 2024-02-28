import { useState } from 'react'
import './App.css'
import HandComponent from './components/HandComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HandComponent idPlayer={1}/>
    <HandComponent idPlayer={2}/>
    </>
  )
}

export default App
