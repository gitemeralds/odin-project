const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (someArray) {
  return someArray.reduce((total, currentValue) => total + currentValue, 0);
};

const multiply = function (someArray) {
  return someArray.reduce((total, currentValue) => total * currentValue, 1);
};

const power = function (number, exponent) {
  return number ** exponent;
};

const factorial = function (passedNumber) {
  if (passedNumber === 0 || passedNumber === 1) {
    return 1;
  } else {
    let currentNumber = passedNumber - 1;
    let result = passedNumber * currentNumber;
    while (currentNumber > 2) {
      currentNumber -= 1;
      result = currentNumber * result;
    }
    return result;
  }
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
