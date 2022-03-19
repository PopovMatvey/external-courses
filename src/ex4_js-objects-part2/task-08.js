function getStringInLowerCamelCase(string) {
  let returnedString = '';

  string = string.split(/\s+/).map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase()).join(' ');// eslint-disable-line no-param-reassign

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      returnedString += string[i];
    }
  }

  return returnedString[0].toLowerCase() + returnedString.substring(1);
}

module.exports = getStringInLowerCamelCase;
