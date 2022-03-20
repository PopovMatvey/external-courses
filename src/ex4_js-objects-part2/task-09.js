function getConcatenationString(string, insertString, indexSpace) {
  const arrayWords = string.split(/\s+/);

  for (let i = 0; i < arrayWords.length; i++) {
    if (i === indexSpace) {
      arrayWords[i] += ` ${insertString}`;
    }
  }

  return arrayWords.join(' ');
}

module.exports = getConcatenationString;
