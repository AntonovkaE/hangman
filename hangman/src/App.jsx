import { useEffect, useState } from 'react';
import './App.css';
import Gallows from './Gallows.jsx';
import Keyboard from './Components/Keyboard.jsx';
import Word from './Components/Word.jsx';

function App() {
  const words = ['letter', 'phone', 'dust'];

  const [word, setWord] = useState('react');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [checkedLetters, setCheckedLetters] = useState([])
  const word_arr = word.split('');
  const [mistakes, setMistakes] = useState(0);
  const [isWinner, setIsWinner] = useState(false)
  const [isLooser, setIsLooser] = useState(false)

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
      <h1 className="text-3xl font-bold underline my-5">Hangman</h1>
      <Word word={word_arr} guessedLetter={guessedLetters}/>
      <Keyboard isGameEnded={isLooser || isWinner} onClick={keyClick} guessedLetters={guessedLetters} checkedLetters={checkedLetters}></Keyboard>
      <Gallows mistakes={mistakes}/>
      {isWinner && <p className="result-message">You won!</p>}
      {isLooser && (
        <p className="result-message">You lost! The word was: {word}</p>
      )}
      <button className="new-game-button" onClick={resetGame}>
        New Game
      </button>
    </>
  );
}

export default App;
