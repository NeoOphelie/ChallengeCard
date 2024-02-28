import { useState } from 'react'
import './App.css'
import HandComponent from './components/HandComponent'
import Board from './components/Board'
import CardComponent from './components/CardComponent'
import DeckComposant from './components/DeckComponent'

function App() {
  const player1Cards = [];
  const player2Cards = [];
  const player1Points = 10;
  const player2Points = 15;
  return (
    <>
      <HandComponent idPlayer={1}/>
      <Board player1Points={player1Points} player2Points={player2Points} player1Cards={player1Cards} player2Cards={player2Cards}/>
      <HandComponent idPlayer={2}/>
      {/* <CardComponent /> */}
      <CardComponent />
      <DeckComposant />
    </>
  )
}

export default App
