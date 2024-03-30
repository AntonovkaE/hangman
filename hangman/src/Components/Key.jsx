import React from 'react';

function Key({id, onClick}) {
  function handleClick(id) {
    onClick(id)

  }

  return (<li>
      <button onClick={() => handleClick(id)}>{id}</button>
    </li>

  );
}

export default Key;
