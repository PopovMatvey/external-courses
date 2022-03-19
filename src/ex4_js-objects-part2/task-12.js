function getAroundSumm(firstValue, secondValue) {
  return Math.round((firstValue + secondValue) * 1000) / 1000;
}

module.exports = getAroundSumm;
