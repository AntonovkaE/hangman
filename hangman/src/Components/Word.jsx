import React, { useState } from 'react';
import Letter from './Letter.jsx';

function Word({ word, guessedLetter }) {

  return (
    <ul style={{listStyle: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      {word.map((letter, index)=>{
        return <Letter key={index} letter={letter} isOpen={guessedLetter.includes(letter)}/>
      })}
    </ul>
  );
}

export default Word;
