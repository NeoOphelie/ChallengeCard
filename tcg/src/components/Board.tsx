import React, { useState } from 'react';
import CardComponent from './CardComponent';
import './Board.css';

interface Props {
  player1Points: number;
  player2Points: number;
  player1Cards: string[];
  player2Cards: string[];
}

const Board: React.FC<Props> = ({ player1Points, player2Points, player1Cards, player2Cards }) => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  // Gérer le clic sur une carte du joueur 1
  const handleCardClick = (card: number) => {
    setSelectedCard(card);
  };

  return (
    <div className="board">
      {/* Player 2 */}
      <div className="player-zone">
        <div className="player-info">
          <p>Points : {player2Points}</p>
        </div>
        <div className="player-hand">
          <h2>Joueur 2</h2>
          <div className="cards">
            {player2Cards.map((card, index) => (
              <CardComponent key={index} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Neutral zone for player 1 */}
      {selectedCard && (
        <div className="selected-card">
          <CardComponent />
        </div>
      )}

      {/* Player 1 */}
      <div className="player-zone">
        <div className="player-hand">
          <h2>Joueur 1</h2>
          <div className="cards">
            {player1Cards.map((card, index) => (
              <CardComponent key={index} onClick={() => handleCardClick(index)} />
            ))}
          </div>
        </div>
        <div className="player-info">
          <p>Points : {player1Points}</p>
        </div>
      </div>
    </div>
  );
}

export default Board;
