function getFlagTypeNumber(value) {
  let i = 2;
  const LIMIT_LOOP = Math.sqrt(value);

  while (i <= LIMIT_LOOP) {
    if (value % i === 0) {
      return true;
    }

    i += 1;
  }

  return false;
}

function checkTypeNumber(value) {
  const MAX_VALUE = 1000;

  if ((value > MAX_VALUE) || (value < 0)) {
    return 'Данные неверны';
  }

  if ((value === 1) || (value === 0)) {
    return 'Не причисляется ни к простым, ни к составным числам';
  }

  const flagNumber = getFlagTypeNumber(value);

  if (!flagNumber) {
    return `Число ${value} - простое число`;
  }

  if (flagNumber) {
    return `Число ${value} - составное число`;
  }

  return '';
}

module.exports = checkTypeNumber;
