import React, { useEffect, useState } from 'react';
import './Key.css'
function Key({id, onClick, disabled, guessedLetters, checkedLetters}) {
  function handleClick() {
    onClick(id)
  }

  return (<li>
      <button disabled={disabled} className={guessedLetters.includes(id) ? 'key key_right' : checkedLetters.includes(id) ? 'key key_error' : 'key'} onClick={handleClick}>{id}</button>
    </li>

  );
}

export default Key;
