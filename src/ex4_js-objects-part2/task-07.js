function geySubDetermLengthString(string, lengthString) {
  if (string.length > lengthString) {
    return `${string.substring(0, lengthString - 1)}…`;
  }

  return string;
}

module.exports = geySubDetermLengthString;
