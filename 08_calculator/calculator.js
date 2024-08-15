const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((sum, curr) => sum + curr, 0);
};

const multiply = function (arr) {
  return arr.reduce((sum, curr) => sum * curr, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  fact = 1;
  for (let i = n; i > 0; i--) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
