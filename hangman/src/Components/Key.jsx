import React, { useEffect, useState } from 'react';
import './Key.css'
function Key({id, onClick, disabled, isRight}) {
  const [isChecked, setIsChecked] = useState(false)
  function handleClick(e) {
    onClick(id, e)
  }
  useEffect(() => {
    setIsChecked(isRight.includes(id))
    // console.log(isRight, id, isRight.includes(id))
  },[isRight])

  return (<li>
      <button disabled={disabled} className="key" onClick={handleClick}>{id}</button>
    </li>

  );
}

export default Key;
