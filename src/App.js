// src/App.js
import React from 'react';
import GameBoard from './GameBoard'; // Make sure the path is correct based on your file structure
import './App.css'; // Optional: Create App.css for general styling

function App() {
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <GameBoard />
    </div>
  );
}

export default App;

