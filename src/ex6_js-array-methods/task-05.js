function mapAnalog(array, callback) {
  const returnedArray = [];

  for (let i = 0; i < array.length; i++) {
    returnedArray.push(callback(array[i], i, array));
  }

  return returnedArray;
}

module.exports = mapAnalog;
