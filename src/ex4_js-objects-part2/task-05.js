function hasSubstring(string, substring) {
  if ((string.indexOf(substring)) !== -1) {
    return true;
  }

  return false;
}

module.exports = hasSubstring;
