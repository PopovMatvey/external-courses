// ## Задание 1
// Написать функцию, которая принимает либо число, либо строку и в зависимости от
// типа переданного аргумента возвращает `'number'` или `'string'`.
// Если аргумент не число/строка функция возвращает `undefined`.
// Проверка на NaN обязательна! При NaN должен выводиться `undefined`

const PASSED_VALUE = '';

getSimpleTypeArgument(PASSED_VALUE);// eslint-disable-line no-use-before-define

module.exports = getSimpleTypeArgument;// eslint-disable-line no-use-before-define

function getSimpleTypeArgument(argumentValue) {
  if ((typeof argumentValue === 'number') && !(Number.isNaN(argumentValue))) {
    return 'number';
  } if (typeof argumentValue === 'string') {
    return 'string';
  } if ((typeof argumentValue !== 'number') && (Number.isNaN(argumentValue)) && (typeof argumentValue !== 'string')) {
    return 'undefined';
  }

  return undefined;
}
