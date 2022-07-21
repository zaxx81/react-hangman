function IncorrectLetters(props) {
  let incorrect = props.guessLetters.filter((letter) => {
    return !props.word.includes(letter);
  });

  return (
    <div>
      <h1>Incorrect Letters Here</h1>
      <h2>{incorrect.join(" ")}</h2>
    </div>
  );
}

export default IncorrectLetters;
