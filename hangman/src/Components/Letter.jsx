import React, { useEffect } from 'react';
import './Letter.css'
import { useState } from 'react';

function Letter({letter, isOpen}) {

  return (
    <li className="letter">
      {isOpen ? letter : ''}
    </li>
  );
}

export default Letter;
