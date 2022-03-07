function getMaxValueArray(array) {
  let maxValue = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] < array[i]) {
      maxValue = array[i];
    }
  }

  return maxValue;
}

module.exports = getMaxValueArray;
