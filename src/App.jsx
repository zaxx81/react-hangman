import { useState } from "react";
import "./App.css";
import Hangman from "./components/Hangman";
import PuzzleWord from "./components/PuzzleWord";
import GuessForm from "./components/GuessForm";
import IncorrectLetters from "./components/IncorrectLetters";
import words from "./data/words.json";

function App() {
  // states
  const [puzzle, setPuzzle] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);

  // event handlers
  const handleGuess = (guess) => {
    if (guess.match(/[a-z]/i)) {
      const updatedGuessedLetters = [...guessedLetters, guess];
      setGuessedLetters(updatedGuessedLetters);
    } else {
      alert("Only letters, please!");
    }
  };

  // other functions
  function getPuzzle() {
    const wordsLen = words.length;
    let randomWord = words[Math.floor(Math.random() * wordsLen)];
    setPuzzle(randomWord);
  }

  if (puzzle == "") {
    getPuzzle();
  }

  return (
    <div className="App">
      <Hangman />
      <PuzzleWord word={puzzle} guessLetters={guessedLetters} />
      <br />
      <GuessForm clickFunction={handleGuess} />
      <IncorrectLetters word={puzzle} guessLetters={guessedLetters} />
    </div>
  );
}

export default App;
