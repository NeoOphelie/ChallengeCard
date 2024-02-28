import React from 'react';
import CardComponent from './CardComponent'; // Assurez-vous d'avoir le chemin correct vers le composant CardComponent
import './Board.css'; // Importez le fichier CSS pour styliser le composant Board
interface Props {
  player1Points: number,
  player2Points: number,
  player1Cards: Array<string>,
  player2Cards: Array<string>
}

const Board: React.FC<Props> = ({player1Points, player2Points, player1Cards, player2Cards}) => {
    // const { player1Points, player2Points, player1Cards, player2Cards } = this.props;

    return (
      <div className="board">
        <div className="player">
          <h2>Joueur 1</h2>
          <div className="cards">
            {player1Cards.map((index) => (
              <CardComponent key={index} />
            ))}
          </div>
          <p>Points : {player1Points}</p>
        </div>
        <div className="player">
          <h2>Joueur 2</h2>
          <div className="cards">
            {player2Cards.map((index) => (
              <CardComponent key={index}/>
            ))}
          </div>
          <p>Points : {player2Points}</p>
        </div>
      </div>
    );
  }


export default Board;
