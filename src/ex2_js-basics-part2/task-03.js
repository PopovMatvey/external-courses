function getCheckerArray(array) {
  let counterZeros = 0;
  let counterOdd = 0;
  let countEven = 0;
  const returedArray = [];

  for (let i = 0; i < array.length; i++) {
    if ((typeof array[i] !== 'number') || (Number.isNaN(array[i]))) {
      continue; // eslint-disable-line no-continue
    } else if (array[i] === 0) {
      counterZeros++;
    } else if (array[i] % 2 !== 0) {
      counterOdd++;
    } else if (array[i] % 2 === 0) {
      countEven++;
    }
  }

  returedArray.push(countEven);
  returedArray.push(counterOdd);
  returedArray.push(counterZeros);

  return returedArray;
}

module.exports = getCheckerArray;
