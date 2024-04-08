import React from 'react';
import { createPortal} from 'react-dom';
import './Modal.css'

function Modal({ open, isWinner, isLooser, word }) {
  const modal_class = "modal h-1/2 w-1/2 p-4 text-left bg-white rounded shadow-xl md:max-w-xl md:p-6 lg:p-8 md:mx-0 "
  return createPortal(
    <dialog className={isWinner || isLooser ? modal_class : modal_class + 'hidden'} open={open}>
      { <p className="flex items-center text-5xl font-extrabold dark:text-white">{isWinner ? "You won!" : <small class=" flex-auto items-center ms-2 font-semibold text-gray-500 dark:text-gray-400">You lost! The word was: {word}</small>}</p>}
    </dialog>, document.getElementById('modal')
  );
}

export default Modal;
