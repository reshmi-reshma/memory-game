// src/Card.js
import React from 'react';
import './Card.css';

const Card = ({ index, symbol, isFlipped, onClick }) => (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={() => onClick(index)}>
        {isFlipped ? <span>{symbol}</span> : <span>?</span>}
    </div>
);

export default Card;
