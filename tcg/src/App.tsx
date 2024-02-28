import { useState } from 'react'
import './App.css'
import HandComponent from './components/HandComponent'
import Board from './components/Board'

function App() {
  const player1Cards = ['Carte 1', 'Carte 2', 'Carte 3'];
  const player2Cards = ['Carte A', 'Carte B', 'Carte C'];
  const player1Points = 10;
  const player2Points = 15;
  return (
    <>
      <HandComponent idPlayer={1}/>
      <Board player1Points={player1Points} player2Points={player2Points} player1Cards={player1Cards} player2Cards={player2Cards}/>
      <HandComponent idPlayer={2}/>
      {/* <CardComponent /> */}
    </>
  )
}

export default App
