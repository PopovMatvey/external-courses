function createGuessedString(guessWord) {
  return guessWord.replace(/./g, '_');
}

function checkString(guessWord, inputChart) {
  return guessWord.indexOf(inputChart) > -1;
}

function changeString(guessWord, guessedString, inputChart) {
  const splitGuessedString = guessedString.split('');
  const splitGuessWord = guessWord.split('');

  for (let i = 0; i < splitGuessWord.length; i++) { // eslint-disable-line no-plusplus
    if (splitGuessWord[i] === inputChart) {
      splitGuessedString[i] = inputChart;
    }
  }

  return splitGuessedString.join('');
}

function Hangman(guessWord) {
  this.guessWord = guessWord;
  this.guessedString = createGuessedString(guessWord);
}

const hangman = {

  guessWord: '',
  guessedString: '',
  errorsLeft: 6,
  wrongSymbols: [],

  guess(inputChart) {
    if (checkString(this.guessWord, inputChart)) {
      this.guessedString = changeString(// eslint-disable-line no-return-assign
        this.guessWord, this.guessedString, inputChart,
      );
      console.log(this.guessedString);
    } else {
      this.errorsLeft--;// eslint-disable-line no-plusplus

      if (this.wrongSymbols.indexOf(inputChart) === -1) {
        this.wrongSymbols.push(inputChart);
      }

      console.log(`wrong letter, errors left ${this.errorsLeft} | ${this.wrongSymbols}`);
    }

    return this;
  },

  getGuessedString() {
    return this.guessedString;
  },

  getErrorsLeft() {
    return this.errorsLeft;
  },

  getWrongSymbols() {
    return this.wrongSymbols;
  },

  getStatus() {
    return `${this.guessedString} | errors left ${this.errorsLeft}`;
  },

  startAgain(guessWord) {
    this.guessWord = guessWord;
    this.guessedString = createGuessedString(guessWord);
    this.errorsLeft = 6;
  },
};

Hangman.prototype = hangman;

const game = new Hangman('aboba');

console.log(game.guess('b').guess('a'));

console.log(game.getStatus());

module.exports = Hangman.prototype;
