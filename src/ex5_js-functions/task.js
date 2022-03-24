const createCalculator = () => {
  let result = 0;
  return {

    add: (value) => {
            function functionRecurs(value) {// eslint-disable-line
        if ((typeof value !== 'number') || (Number.isNaN(value)) || (typeof value === 'undefined')) {
                    value = 0;// eslint-disable-line
        }
        result += value;

        return functionRecurs;
      }

      if ((typeof value !== 'number') || (Number.isNaN(value)) || (typeof value === 'undefined')) {
                value = 0;// eslint-disable-line
      }

      result += value;

      return functionRecurs;
    },

    subtract: ((value) => {
      function functionRecurs(value) {// eslint-disable-line
        if ((typeof value !== 'number') || (Number.isNaN(value)) || (typeof value === 'undefined')) {
                    value = 0;// eslint-disable-line
        }

        result -= value;

        return functionRecurs;
      }

      if ((typeof value !== 'number') || (Number.isNaN(value)) || (typeof value === 'undefined')) {
                value = 0;// eslint-disable-line
      }

      result -= value;

      return functionRecurs;
    }),

    divide: ((value) => {
      function functionRecurs(value) {// eslint-disable-line
        if ((typeof value !== 'number') || (Number.isNaN(value)) || (typeof value === 'undefined')) {
          value = 1;// eslint-disable-line
        }

        result /= value;

        return functionRecurs;
      }

      if ((typeof value !== 'number') || (Number.isNaN(value)) || (typeof value === 'undefined')) {
        value = 1;// eslint-disable-line
      }

      result /= value;

      return functionRecurs;
    }),

    multiply: ((value) => {
      function functionRecurs(value) {// eslint-disable-line
        if ((typeof value !== 'number') || (Number.isNaN(value)) || (typeof value === 'undefined')) {
          value = 1;// eslint-disable-line
        }

        result *= value;

        return functionRecurs;
      }

      if ((typeof value !== 'number') || (Number.isNaN(value)) || (typeof value === 'undefined')) {
        value = 1;// eslint-disable-line
      }

      result *= value;

      return functionRecurs;
    }),

    getResult: (() => result),

    reset: (() => result = 0),// eslint-disable-line

  };
};

const calculator = createCalculator();

calculator.add = calculator.add();

calculator.subtract = calculator.subtract();

calculator.multiply = calculator.multiply();

calculator.divide = calculator.divide();

module.exports = calculator;
