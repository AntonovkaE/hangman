import React, { useEffect, useState } from 'react';
import './Key.css'
function Key({id, disabled, onClick, guessedLetters, checkedLetters}) {
  const key_common = " w-5 py-2 px-4 m-1 border border-gray-400 rounded shadow text-center flex justify-center transition "
  const key_class = " bg-white hover:bg-gray-100 text-gray-800 font-semibold "
  const key_success = " bg-green-200 font-bold text-black-800 cursor-none touch-none "
  const key_error = " bg-red-400 font-semibold text-gray-200 appearance-none cursor-none touch-none disable"
  function handleClick() {
    onClick(id)
  }

  return (<li>
      <button disabled={checkedLetters.includes(id) || disabled} className={(guessedLetters.includes(id) && !disabled) ? key_common + key_success: (checkedLetters.includes(id) || disabled) ? key_common + key_error : key_common + key_class} onClick={handleClick}>{id}</button>
    </li>

  );
}

export default Key;
