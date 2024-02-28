import React, { useState, useEffect } from 'react';
import data from "../assets/ListCard.json";

const DeckComposant = () => {
    const [selectedCards, setSelectedCards] = useState<Card[]>([]);
    const [remainingCards, setRemainingCards] = useState<number>(0);
  
    useEffect(() => {
      const selectRandomCards = () => {
        const selected: Card[] = [];
        const totalCards = data.length;
        while (selected.length < 60) {
          const randomIndex = Math.floor(Math.random() * totalCards);
          const randomCard = data[randomIndex];
          if (!selected.some(card => card.id === randomCard.id)) {
            selected.push(randomCard);
          }
        }
        setSelectedCards(selected);
        setRemainingCards(selected.length);
      };
  
      selectRandomCards();
    }, []);
  
    const drawCard = () => {
      if (remainingCards > 0) {
        setSelectedCards(prevState => {
          const updatedCards = [...prevState];
          const drawnCard = updatedCards.pop(); // Enlève la dernière carte du deck
          setRemainingCards(updatedCards.length);
          console.log("Carte piochée :", drawnCard); // Affiche la carte piochée dans la console
          return updatedCards;
        });
      } else {
        alert("Plus de cartes !");
      }
    };
  
    return (
      <div>
        <h1>Deck de cartes aléatoires</h1>
        <button onClick={drawCard}>Piocher ({remainingCards} restantes)</button>
        <ul>
          {selectedCards.map(card => (
            <li key={card.id}>
              {card.name} - Attaque: {card.attack}, PV: {card.pv}, Coût: {card.cost}, Points: {card.point}
            </li>
          ))}
        </ul>
      </div>
    );
};

export default DeckComposant;
