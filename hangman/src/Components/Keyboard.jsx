import React from 'react';
import './Keyboard.css'
import arr_ru from '../assets/data.js';
import Key from './Key.jsx';

function Keyboard({onClick}) {
  return (
    <ul className="keyboard">
      {arr_ru.map(key => {
        return <Key onClick={onClick} key={key} id={key}>{key}</Key>
      })}
    </ul>
  );
}

export default Keyboard;
