interface Card {
    id : number,
    name : string,
    attack : number,
    pv : number,
    cost : number,
    point : number
}

interface Deck {
    id : string,
    list : Card[]
}

interface Player {
    id : string,
    name : string,
    vp : number
}

interface Game {
    player1 : Player,
    player2 : Player,
    deckPlayer1 : Deck,
    deckPlayer2 : Deck
}

type GameState = {
    game: Game
}
  
type GameAction = {
    type: string
    game: Game
}
  
type DispatchType = (args: GameAction) => GameAction;