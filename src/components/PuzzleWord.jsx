function PuzzleWord(props) {
  let wordLen = props.word.length;
  let puzzleText = [];
  console.log(props.word);

  for (let i = 0; i < wordLen; i++) {
    if (props.guessedLetters.includes(props.word[i])) {
      puzzleText.push(props.word[i]);
    } else puzzleText.push("_");
  }

  if (props.word.toLowerCase() === puzzleText.join("")) {
    props.gameStatusUpdate("win");
  }

  return (
    <div>
      <h1>{puzzleText.join(" ")}</h1>
    </div>
  );
}

export default PuzzleWord;
