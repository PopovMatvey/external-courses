function getRandomValueInDetermRange(minValue, maxValue) {
  return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}

module.exports = getRandomValueInDetermRange;
