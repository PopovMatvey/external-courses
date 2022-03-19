function geySubDetermLengthString(string, lengthString) {
  let returnedString = '';

  for (let i = 0; i < string.length; i++) {
    if (i >= lengthString - 1) {
      returnedString += '…';
      break;
    }
    returnedString += string[i];
  }

  return returnedString;
}

module.exports = geySubDetermLengthString;
