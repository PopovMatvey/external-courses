// ## Задание 4

// Написать функцию, которая проверяет одинаковые
// ли элементы в массиве и возвращает `true` или `false`.
// Речь идет не о двух рядом стоящих одинаковых элементах, а обо всех.

const INPUT_ARRAY = [1, 1, '1', 1, 1, 1];

checkOnEqualArray(INPUT_ARRAY);// eslint-disable-line no-use-before-define

module.exports = checkOnEqualArray;// eslint-disable-line no-use-before-define

function checkOnEqualArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      continue;// eslint-disable-line  no-continue
    }

    if (array[i] === array[i - 1]) {
      continue;// eslint-disable-line  no-continue
    } else {
      return false;
    }
  }

  return true;
}
