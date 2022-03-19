function getConcatenationString(string, insertString, indexSpace) {
  let concatenationString = '';
  let counterSpace = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      counterSpace++;
      if (counterSpace === indexSpace + 1) {
        concatenationString += ` ${insertString}`;
      }
    }
    concatenationString += string[i];
  }

  return concatenationString;
}

module.exports = getConcatenationString;
