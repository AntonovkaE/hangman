import { useEffect, useState } from 'react';
import './App.css';
import Gallows from './Gallows.jsx';
import Keyboard from './Components/Keyboard.jsx';
import Word from './Components/Word.jsx';

function App() {
  const words = ['дочь', 'сон', 'банан'];

  const [word, setWord] = useState('счастье');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [checkedLetters, setCheckedLetters] = useState([])
  const word_arr = word.split('');
  const [mistakes, setMistakes] = useState(0);
  const [isWinner, setIsWinner] = useState(false)
  const [isLooser, setIsLooser] = useState(false)
  const keyClick = (letter) => {

    if (!checkedLetters.includes(letter)) {
      setCheckedLetters([... checkedLetters, letter]);
      if (word.includes(letter)) {
        setGuessedLetters([... guessedLetters, letter]);
      } else {
        console.log(mistakes)
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


  const resetGame = () => {
    setWord(chooseRandomWord());
    setGuessedLetters([]);
    setMistakes(0);
  };

  return (
    <>
      <Word word={word_arr} guessedLetter={guessedLetters}/>
      <Keyboard isGameEnded={isLooser || isWinner} onClick={keyClick} guessedLetters={guessedLetters} checkedLetters={checkedLetters}></Keyboard>
      <Gallows/>
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
