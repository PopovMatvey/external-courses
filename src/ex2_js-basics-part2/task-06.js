// ## Задание 6 💪

// Написать функцию, которая принимает на входе любое число,
// но не больше 1000 и определяет является ли оно простым и выводит
// простое число или нет. Если введено больше 1000, то выводится сообщение,
//  что данные неверны.  Обратите внимание на числа 0 и 1.

// Пример работы функции:

// ```js
// f(13);
// // Число 13 - простое число

// f(14);
// // Число 14 - составное число

// f(0);
// // Не причисляется ни к простым, ни к составным числам

// f(1);
// // Не причисляется ни к простым, ни к составным числам
// ```

const INPUT_VALUE = 2;
const MAX_VALUE = 1000;

checkTypeNumber(INPUT_VALUE);// eslint-disable-line no-use-before-define

module.exports = checkTypeNumber;// eslint-disable-line no-use-before-define

function checkTypeNumber(value) {
  let amountDivide = 0;
  let returnedSting = '';

  if ((value > MAX_VALUE) || (value < 0)) {
    return 'Данные неверны';
  } if ((value === 1) || (value === 0)) {
    return 'Не причисляется ни к простым, ни к составным числам';
  }

  for (let i = 0; i < value + 1; i++) {
    if (value % i === 0) {
      amountDivide++;
    }
  }

  if (amountDivide === 2) {
    returnedSting = `Число ${value} - простое число`;

    return returnedSting;
  } if (amountDivide > 2) {
    returnedSting = `Число ${value} - составное число`;

    return returnedSting;
  }

  return '';
}
