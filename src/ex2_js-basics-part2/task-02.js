// ## Задание 2

// Написать функцию, которая будет пробегать по массиву и выводить в консоль
// каждый элемент массива и общее число элементов.
// Функция не должна ничего возвращать, но наличие `return` обязательно!

const PROCESSED_ARRAY = [2, 456, 67, 8, 'fssd', null, false];

getDataArray(PROCESSED_ARRAY);// eslint-disable-line no-use-before-define

module.exports = getDataArray;// eslint-disable-line no-use-before-define

function getDataArray(array) {
  for (let i = 0; i < array.length; i++) { // eslint-disable-line no-plusplus
    console.log(i + 1, '-й =', array[i]);
  }

  console.log(' Количество элементов ', array.length);
}
