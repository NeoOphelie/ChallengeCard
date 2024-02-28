import * as actionTypes from "./actionTypes"

const initGame: Game = {
  id: 42,
  player1 :  Player,
  player2 : Player,
  deckPlayer1 : Deck,
  deckPlayer2 : Deck
}

export const addGame: GameAction = {
    type: actionTypes.ADD_GAME,
    game: initGame
}

export const editGame: GameAction = {
    type: actionTypes.EDIT_GAME,
    game: initGame
}


export const removeGame: GameAction = {
    type: actionTypes.REMOVE_GAME,
    game: initGame
}
