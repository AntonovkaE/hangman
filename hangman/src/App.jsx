import { useEffect, useState } from 'react';
import './App.css';
import Gallows from './Gallows.jsx';
import Keyboard from './Components/Keyboard.jsx';
import Word from './Components/Word.jsx';
import Modal from './Components/Modal.jsx';

function App() {
  const words = ['letter', 'phone', 'dust'];

  const [word, setWord] = useState('react');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [checkedLetters, setCheckedLetters] = useState([])
  const word_arr = word.split('');
  const [mistakes, setMistakes] = useState(0);
  const [isWinner, setIsWinner] = useState(false)
  const [isLooser, setIsLooser] = useState(false)
  const [isModalOpened, setIsModalOpened] = useState(false)

  const keyClick = (letter) => {
    if (!checkedLetters.includes(letter)) {
      setCheckedLetters([...checkedLetters, letter]);
      if (word.includes(letter)) {
        console.log(guessedLetters, letter)
        setGuessedLetters([... guessedLetters, letter]);
      } else {
        setMistakes(mistakes + 1);
      }
    }
  };

 useEffect(() => {
   setIsModalOpened(true)
 },[isWinner, isLooser])

  const chooseRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex].toLowerCase();
  };

  useEffect(() => {
    if (mistakes >= 6) {
      setIsLooser(true)
      return
    }
    if (word
      .split('')
      .every((letter) => guessedLetters.includes(letter))) {
      setIsWinner(true)
    }

  }, [checkedLetters])

  // useEffect(() => {
  //   function handleKeyDown(e) {
  //     console.log(checkedLetters)
  //     keyClick(e.key);
  //   }
  //
  //   document.addEventListener('keydown', handleKeyDown);
  //
  //   return function cleanup() {
  //     document.removeEventListener('keydown', handleKeyDown);
  //   }
  // }, []);


  const resetGame = () => {
    setMistakes(0);
    setWord(chooseRandomWord());
    setGuessedLetters([]);
    setCheckedLetters([])
    setIsWinner(false)
    setIsLooser(false)
  };

  return (
    <>
      <button className="new-game-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-10 rounded" onClick={resetGame}>
        New Game
      </button>
      <h1 className="text-3xl font-bold underline my-5">Hangman</h1>
      <Word word={word_arr} guessedLetter={guessedLetters}/>
      <Keyboard isGameEnded={isLooser || isWinner} onClick={keyClick} guessedLetters={guessedLetters} checkedLetters={checkedLetters}></Keyboard>
      <Gallows mistakes={mistakes}/>
      <Modal isLooser={isLooser} isWinner={isWinner} word={word} open={isModalOpened} resetGame={resetGame}/>


    </>
  );
}

export default App;
