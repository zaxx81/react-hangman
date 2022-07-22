import { useState } from "react";
import "./App.css";
import Hangman from "./components/Hangman.jsx";
import PuzzleWord from "./components/PuzzleWord.jsx";
import GuessForm from "./components/GuessForm.jsx";
import IncorrectLetters from "./components/IncorrectLetters.jsx";
import words from "./data/words.json";

function App() {
  // states
  const [puzzle, setPuzzle] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [gameStatus, setGameStatus] = useState("playing");

  // event handlers
  const handleGuess = (guess) => {
    const updatedGuessedLetters = [...guessedLetters, guess];
    setGuessedLetters(updatedGuessedLetters);
    console.log("Guess letter count" + guessedLetters.length);
  };

  // other functions
  function getPuzzleWord() {
    const wordsLen = words.length;
    let randomWord = words[Math.floor(Math.random() * wordsLen)];
    setPuzzle(randomWord);

    // fetch("https://random-word-api.herokuapp.com/word")
    //   .then((res) => res.json())
    //   .then((json) => {
    //     setPuzzle(json[0]);
    //   });
  }

  if (puzzle === "") {
    getPuzzleWord();
  }

  const gameStatusUpdate = (update) => {
    if (update === "lose") {
      setGameStatus("lose");
    }

    if (update === "win") {
      setGameStatus("win");
    }
  };

  return (
    <div className="App">
      <Hangman
        word={puzzle}
        guessedLetters={guessedLetters}
        gameStatus={gameStatus}
        gameStatusUpdate={gameStatusUpdate}
      />
      <PuzzleWord
        word={puzzle}
        guessedLetters={guessedLetters}
        gameStatus={gameStatus}
        gameStatusUpdate={gameStatusUpdate}
      />
      <br />
      <GuessForm
        clickFunction={handleGuess}
        gameStatus={gameStatus}
        gameStatusUpdate={gameStatusUpdate}
      />
      <br />
      <IncorrectLetters word={puzzle} guessedLetters={guessedLetters} />
    </div>
  );
}

export default App;
