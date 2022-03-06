// ## Задание 3

// Написать функцию, которая посчитает и выведет в консоль
// количество четных и нечетных элементов в массиве. Если в
// массиве есть нулевой элемент, то он учитывается и выводится отдельно.
// Возвращаемое значение -- массив вида `[<кол-во четных>, <кол-во нечетных>, <кол-во нулей>]`.
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и,
// например, знаки, null и тд.

// ```js
// f([1, 2, 3, 4]);
// // четных: 2; нечетных: 2
// // [2, 2, 0]

// f([1, 2, 3, 0]);
// // четных: 1; нечетных: 2; нуль: 1
// // [1, 2, 1]
// ```

const INPUT_ARRAY = ['', 'sdds', '2', null, {}, [], NaN, 1, 2, 3, 0];

getCheckerArray(INPUT_ARRAY); // eslint-disable-line no-use-before-define

module.exports = getCheckerArray; // eslint-disable-line no-use-before-define

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
