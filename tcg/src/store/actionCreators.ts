import * as actionTypes from "./actionTypes"

const initGame: Game = {
  player1 :  {
    id : "p1",
    name : "p1",
    vp : 0
},
  player2 : {
    id : "p2",
    name : "p2",
    vp : 0
},
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

export const editVp: GameAction = {
    type: actionTypes.EDIT_VP,
    game: initGame
}

export const editDeck: GameAction = {
    type: actionTypes.EDIT_DECK,
    game: initGame
}
