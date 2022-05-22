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

const hangman = {

  guessWord: '',
  guessedString: '',
  errorsLeft: 6,
  wrongSymbols: [],
  checkOnWin: false,

  guess(inputChart) {
    if (this.checkOnWin) {
      this.checkOnWin = true;
      console.log('You won!');
    } else if (checkString(this.guessWord, inputChart)) {
      this.guessedString = changeString(// eslint-disable-line no-return-assign
        this.guessWord, this.guessedString, inputChart,
      );
      console.log(this.guessedString);
      if (this.guessWord === this.guessedString) {
        this.checkOnWin = true;
        console.log('You won!');
      }
    } else if (this.errorsLeft !== 0) {
      this.errorsLeft--;// eslint-disable-line no-plusplus

      if (this.wrongSymbols.indexOf(inputChart) === -1) {
        this.wrongSymbols.push(inputChart);
      }

      console.log(`wrong letter, errors left ${this.errorsLeft} | ${this.wrongSymbols}`);
    } else {
      console.log('You lost, the number of mistakes exceeds the limit!');
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

  __proto__: this,
};

function Hangman(guessWord) { // eslint-disable-line no-unused-vars
  this.errorsLeft = 6;
  this.wrongSymbols = [];
  this.guessWord = guessWord;
  this.guessedString = createGuessedString(guessWord);
  this.__proto__ = hangman;
}

module.exports = hangman;
