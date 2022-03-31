function sliceAnalog(array, begin, end) {
  const returnedArray = [];

  if ((end === undefined) && (begin === undefined)) {
    return array;
  }

  if (end === undefined) {
    if ((begin < 0)) {
      begin = (begin * -1) - 1;   // eslint-disable-line 
      begin = checkOnLengthArray(begin, array);// eslint-disable-line 
      array.reverse();

      for (let i = begin - 1; i > -1; i--) {
        returnedArray.push(array[i]);
      }
      // разворачиваю снова,для того, чтобы при следущих вызовах мы работали с прежним массивом
      array.reverse();// eslint-disable-line 

      return returnedArray;
    }

    for (let i = begin; i < array.length; i++) {
      returnedArray.push(array[i]);
    }

    return returnedArray;
  }

  if ((end < 0) && (begin < 0)) {
    end = (end * -1) - 1;// eslint-disable-line 
    begin = (begin * -1) - 1;// eslint-disable-line 
    array.reverse();

    for (let i = begin; i > end; i--) {
      returnedArray.push(array[i]);
    }
    // разворачиваю снова,для того, чтобы при следущих вызовах мы работали с прежним массивом
    array.reverse(); // eslint-disable-line 

    return returnedArray;
  }

  if (begin < 0) {
    begin = (begin * -1) - 1;// eslint-disable-line 
    begin = checkOnLengthArray(begin, array);// eslint-disable-line 
    array.reverse();

    for (let i = begin - 1; i > end; i--) {
      returnedArray.push(array[i]);
    }
    // разворачиваю снова,для того, чтобы при следущих вызовах мы работали с прежним массивом
    array.reverse(); // eslint-disable-line 

    return returnedArray;
  }

  if ((begin > 0) && (end > 0)) {
    begin = checkOnLengthArray(begin, array);// eslint-disable-line 
    end = checkOnLengthArray(end, array);// eslint-disable-line 

    for (let i = begin; i < end; i++) {
      returnedArray.push(array[i]);
    }

    return returnedArray;
  }

  return undefined;
}

function checkOnLengthArray(value, array) {
  if (value > array.length) {
    return array.length;
  }

  return value;
}

module.exports = sliceAnalog;
