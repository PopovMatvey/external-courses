function sliceAnalog(array, begin, end) {
  if (end === undefined) {
    return array.slice(begin);
  }

  if ((end === undefined) && (begin === undefined)) {
    return array.slice();
  }

  return array.slice(begin, end);
}

module.exports = sliceAnalog;
