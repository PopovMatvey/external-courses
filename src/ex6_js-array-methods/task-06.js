function reduceAnalog(array, callback, initialValue) {
  if (initialValue === undefined) {
    return array.slice(1, array.length).reduce(callback, array[0]);
  }

  return array.reduce(callback, initialValue);
}

module.exports = reduceAnalog;
