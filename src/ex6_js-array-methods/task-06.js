function reduceAnalog(array, callback, initialValue) {
  let initialFunctionValue = initialValue;

  for (let i = 0; i < array.length; i++) {
    if (initialFunctionValue !== undefined) {
      initialFunctionValue = callback(initialFunctionValue, array[i], i, array);
    } else {
      initialFunctionValue = array[i];
    }
  }

  return initialFunctionValue;
}

module.exports = reduceAnalog;
