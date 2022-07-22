function IncorrectLetters(props) {
  let incorrect = props.guessedLetters.filter((letter) => {
    return !props.word.includes(letter);
  });

  return (
    <div>
      <h2>Incorrect Letters Guesses</h2>
      <h3>{incorrect.join(" ")}</h3>
    </div>
  );
}

export default IncorrectLetters;
