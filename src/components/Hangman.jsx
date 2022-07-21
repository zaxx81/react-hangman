import hangman_0 from "../assets/hangman_0.png";
import hangman_1 from "../assets/hangman_1.png";
import hangman_2 from "../assets/hangman_2.png";
import hangman_3 from "../assets/hangman_3.png";
import hangman_4 from "../assets/hangman_4.png";
import hangman_5 from "../assets/hangman_5.png";
import hangman_6 from "../assets/hangman_6.png";

function Hangman() {
  let currentImage = hangman_0;

  return (
    <div className="hangingman mx-auto">
      <img src={currentImage} width="256px" height="256px" alt="" />
    </div>
  );
}

export default Hangman;
