const createCalculator = () => {
  let result = 0;

  function add(value) {
    if (typeof value === 'undefined') {
      value = 0; // eslint-disable-line no-param-reassign
    }

    result += value;

    return add;
  }

  function subtract(value) {
    if (typeof value === 'undefined') {
      value = 0;// eslint-disable-line no-param-reassign
    }

    result -= value;

    return subtract;
  }

  function multiply(value) {
    if (typeof value === 'undefined') {
      value = 1;// eslint-disable-line no-param-reassign
    }

    result *= value;

    return multiply;
  }

  function divide(value) {
    if (typeof value === 'undefined') {
      value = 1;// eslint-disable-line no-param-reassign
    }

    result /= value;

    return divide;
  }

  function reset() {
    result = 0;
  }

  function getResult() {
    return result;
  }

  return {
    add,
    subtract,
    multiply,
    divide,
    getResult,
    reset,
  };
  
};

const calculator = createCalculator();

module.exports = calculator;
