const Calculator = {
  result: 0,

  getResult() {
    return this.result;
  },

  setState(value) {
    if (typeof value !== 'undefined') {
      this.result = value;
    }

    return this;
  },

  reset() {
    this.result = 0;

    return this;
  },

  fetchData(callback) {
    setTimeout(callback, 1, 500);
  },

  add(value) {
    if (typeof value !== 'undefined') {
      this.result += value;
    }

    return this;
  },

  subtract(value) {
    if (typeof value !== 'undefined') {
      this.result -= value;
    }

    return this;
  },

  multiply(value) {
    if (typeof value !== 'undefined') {
      this.result *= value;
    }

    return this;
  },

  divide(value) {
    if (typeof value !== 'undefined') {
      this.result /= value;
    }

    return this;
  },
};

module.exports = Calculator;
