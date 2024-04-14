import React from 'react';
import { createPortal} from 'react-dom';
import './Modal.css'

function Modal({ open, isWinner, isLooser, word, resetGame }) {
  const modal_class = "modal h-fit w-1/2 p-4 text-left bg-gray-200 rounded shadow-xl md:max-w-xl md:p-6 lg:p-8 md:mx-0 flex-auto text-center "
  return createPortal(
    <dialog overlay className={isWinner || isLooser ? modal_class : modal_class + 'hidden'} open={open}>
      { <p className="flex items-center text-5xl font-extrabold dark:text-white">{isWinner ? "You won!" : `You lost! The word was: ${word}`}</p>}
      <button className="new-game-button bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 my-10 rounded" onClick={resetGame}>
        New Game
      </button>
    </dialog>, document.getElementById('modal')
  );
}

export default Modal;
