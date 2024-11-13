// src/GameBoard.js
import React, { useState, useEffect } from 'react';
import './GameBoard.css';
import Card from './Card'; // Import the Card component here

const symbols = ['🍎', '🍌', '🍒', '🍇', '🍉', '🍑', '🥭', '🍍'];

const GameBoard = () => {
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const [moves, setMoves] = useState(0);

    useEffect(() => {
        startGame();
    }, []);

    const startGame = () => {
        const shuffledCards = [...symbols, ...symbols]
            .sort(() => Math.random() - 0.5)
            .map((symbol, index) => ({ id: index, symbol, isFlipped: false }));
        setCards(shuffledCards);
        setFlippedCards([]);
        setMatchedPairs([]);
        setMoves(0);
    };

    const handleCardClick = (index) => {
        if (flippedCards.length === 2 || flippedCards.includes(index)) return;

        const newFlippedCards = [...flippedCards, index];
        setFlippedCards(newFlippedCards);

        if (newFlippedCards.length === 2) {
            checkForMatch(newFlippedCards);
        }
    };

    const checkForMatch = (flippedCards) => {
        const [firstIndex, secondIndex] = flippedCards;
        setMoves((prev) => prev + 1);

        if (cards[firstIndex].symbol === cards[secondIndex].symbol) {
            setMatchedPairs((prev) => [...prev, cards[firstIndex].symbol]);
            setFlippedCards([]);
        } else {
            setTimeout(() => setFlippedCards([]), 1000); // Flip back after delay
        }
    };

    return (
        <div className="game-container">
            <div className="grid">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        index={index}
                        symbol={card.symbol}
                        isFlipped={flippedCards.includes(index) || matchedPairs.includes(card.symbol)}
                        onClick={handleCardClick}
                    />
                ))}
            </div>
            <br/><br/>
            <button onClick={startGame}>Restart</button><br/><br/>
            <div>Moves: {moves}</div><br/>
            <div>Matches: {matchedPairs.length}</div>
        </div>
    );
};

export default GameBoard;
