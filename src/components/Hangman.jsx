import hangman_0 from "../assets/hangman_0.png";

function Hangman() {
  let currentImage = hangman_0;

  return (
    <div className="hangingman mx-auto">
      <img src={currentImage} width="256px" height="256px" alt="" />
    </div>
  );
}

export default Hangman;
