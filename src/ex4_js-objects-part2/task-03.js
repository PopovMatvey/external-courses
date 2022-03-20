function deleteFirstAndLastSpace(string) {
  if ((string[0] === ' ') && (string[string.length - 1] === ' ')) {
    return string.substr(1, string.length - 2);
  }

  if ((string[0] === ' ')) {
    return string.substr(1);
  }

  if ((string[string.length - 1] === ' ')) {
    return string.substr(0, string.length - 1);
  }

  return string;
}

module.exports = deleteFirstAndLastSpace;
