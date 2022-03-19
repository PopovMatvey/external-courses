function deleteFirstAndLastSpace(string) {
  if ((string[0] === ' ') && (string[string.length - 1] === ' ')) {
    return string.substr(1, string.length - 2);
  }

  return string;
}

module.exports = deleteFirstAndLastSpace;
