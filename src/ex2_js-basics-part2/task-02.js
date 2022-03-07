function getDataArray(array) {
  for (let i = 0; i < array.length; i++) { // eslint-disable-line no-plusplus
    console.log(i + 1, '-й =', array[i]);
  }

  console.log(' Количество элементов ', array.length);
}

module.exports = getDataArray;
