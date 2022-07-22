import hangman_0 from "../assets/hangman_0.png";
import hangman_1 from "../assets/hangman_1.png";
import hangman_2 from "../assets/hangman_2.png";
import hangman_3 from "../assets/hangman_3.png";
import hangman_4 from "../assets/hangman_4.png";
import hangman_5 from "../assets/hangman_5.png";
import hangman_6 from "../assets/hangman_6.png";

function Hangman(props) {
  let hangmanNum = 0;
  const incorrect = props.guessedLetters.filter((letter) => {
    if (!props.word.includes(letter)) {
      hangmanNum++;
    }
  });

  let currentHangman = [
    hangman_0,
    hangman_1,
    hangman_2,
    hangman_3,
    hangman_4,
    hangman_5,
    hangman_6,
  ];

  if (hangmanNum < 6) {
    return (
      <div>
        <h3>Hangman</h3>
        <div className="hangingman mx-auto">
          <img
            src={currentHangman[hangmanNum]}
            width="256px"
            height="256px"
            alt=""
          />
        </div>
      </div>
    );
  } else {
    props.gameStatusUpdate("lose");

    return (
      <div>
        <h3>Game Over. You lose!</h3>
        <div className="hangingman lose mx-auto">
          <img
            src={currentHangman[hangmanNum]}
            width="256px"
            height="256px"
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default Hangman;
