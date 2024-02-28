import { useState } from 'react'
import './App.css'
import CardComponent from './components/CardComponent'
import Board from './components/Board'

function App() {
  const player1Cards = ['Carte 1', 'Carte 2', 'Carte 3'];
  const player2Cards = ['Carte A', 'Carte B', 'Carte C'];
  const player1Points = 10;
  const player2Points = 15;
  return (
    <>
      <Board player1Points={player1Points} player2Points={player2Points} player1Cards={player1Cards} player2Cards={player2Cards}/>
      {/* <CardComponent /> */}
    </>
  )
}

export default App
