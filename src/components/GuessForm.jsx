function GuessForm(props) {
  let guess = "";

  const handleGuess = (event) => {
    event.currentTarget.disabled = true;
    props.clickFunction(event.currentTarget.textContent.toLowerCase());
  };

  const createButton = (text) => {
    let btnID = `button-${text}`;

    if (props.gameStatus === "playing") {
      return (
        <div className="btn-group">
          <button
            className="btn btn-primary"
            type="button"
            id={btnID}
            onClick={handleGuess}
          >
            {text}
          </button>
        </div>
      );
    } else {
      return (
        <div className="btn-group">
          <button
            className="btn btn-primary"
            type="button"
            id={btnID}
            onClick={handleGuess}
            disabled
          >
            {text}
          </button>
        </div>
      );
    }
  };

  return (
    <div className="container">
      {/* Letters Row 1 */}
      <div className="btn-group btn-group-justified" role="group">
        {createButton("A")}
        {createButton("B")}
        {createButton("C")}
        {createButton("D")}
        {createButton("E")}
        {createButton("F")}
        {createButton("G")}
        {createButton("H")}
        {createButton("I")}
        {createButton("J")}
        {createButton("K")}
        {createButton("L")}
        {createButton("M")}
      </div>
      <br />
      {/* Letters Row 2 */}
      <div className="btn-group btn-group-justified" role="group">
        {createButton("N")}
        {createButton("O")}
        {createButton("P")}
        {createButton("Q")}
        {createButton("R")}
        {createButton("S")}
        {createButton("T")}
        {createButton("U")}
        {createButton("V")}
        {createButton("W")}
        {createButton("X")}
        {createButton("Y")}
        {createButton("Z")}
      </div>
    </div>
  );
}

export default GuessForm;
