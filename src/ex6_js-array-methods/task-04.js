function filterAnalog(array, callback) {
  const returnedArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      returnedArray.push(array[i]);
    }
  }

  return returnedArray;
}

module.exports = filterAnalog;
