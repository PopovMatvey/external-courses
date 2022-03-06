// ## Задание 5

// Написать функцию, которая возвращает максимальное
//  значение в массиве положительных чисел.

const INPUT_ARRAY = [200, 3, 9, 65, 1];

getMaxValueArray(INPUT_ARRAY);// eslint-disable-line no-use-before-define

module.exports = getMaxValueArray;// eslint-disable-line no-use-before-define

function getMaxValueArray(array) {
  let maxValue = -999999999;

  for (let i = 0; i < array.length; i++) {
    if (maxValue < array[i]) {
      maxValue = array[i];
    }
  }

  return maxValue;
}
