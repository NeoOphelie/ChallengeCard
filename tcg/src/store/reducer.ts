import * as actionTypes from "./actionTypes"

const initialState: GameState = {
  game: {}
}

const reducer = (
    state: GameState = initialState,
    action: GameAction
  ): GameState => {
    switch (action.type) {
      case actionTypes.ADD_GAME:
        const newGame: Game ; //todo
        return {
          ...state,
          game: newGame,
        }
      case actionTypes.REMOVE_GAME:
        const removeGame: Game ; //todo
        return {
          ...state,
          game: removeGame,
        }
        case actionTypes.EDIT_GAME:
            const editGame: Game ; //todo
            return {
              ...state,
              games: editGame,
            }
    }
    return state
  }
  
  export default reducer