import React from 'react';
import './Keyboard.css'
import arr from '../assets/data.js';
import Key from './Key.jsx';

function Keyboard({onClick, isGameEnded, guessedLetters, checkedLetters}) {
  return (
    <ul className="keyboard">
      {arr.map(key => {
        return <Key disabled={isGameEnded} onClick={onClick} key={key} id={key} guessedLetters={guessedLetters} checkedLetters={checkedLetters}>{key}</Key>
      })}
    </ul>
  );
}

export default Keyboard;
