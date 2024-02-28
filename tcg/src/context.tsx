import React, { createContext, useReducer, Dispatch} from 'react';

import reducer from './store/reducer';


const initialState: GameState = {
    game : {
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
    }

  const AppContext = createContext<{
    state: GameState;
    dispatch: Dispatch<GameAction>;
  }>({
    state: initialState,
    dispatch: () => null
  });

  const AppProvider: React.FC<{children: any}> = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    )
  }

  export { AppProvider, AppContext}