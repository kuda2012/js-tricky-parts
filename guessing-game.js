function guessingGame() {
  let targetNumber = Math.ceil(Math.random() * 100);
  let numGuesses = 0;
  let playGame = true;
  return function game(guessedNum) {
    if (playGame) {
      numGuesses++;
      if (guessedNum < targetNumber) {
        return `${guessedNum} is too low!`;
      } else if (guessedNum > targetNumber) {
        return `${guessedNum} is too high!`;
      } else {
        playGame = false;
        return `You win! You found ${targetNumber} in ${numGuesses} guesses.`;
      }
    } else {
      return "The game is over, you already won!";
    }
  };
}

module.exports = { guessingGame };
