function getReversString(string) {
  let reversString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reversString += string[i];
  }

  return reversString;
}

module.exports = getReversString;
