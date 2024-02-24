const sumAll = function (num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "ERROR";
  } else if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }
  let total = 0;
  if (num1 < num2) {
    let min = num1;
    let max = num2;
    while (min <= max) {
      total += min;
      min++;
    }
    return total;
  } else {
    let min = num2;
    let max = num1;
    while (min <= max) {
      total += min;
      min++;
    }
    return total;
  }
};

// Do not edit below this line
module.exports = sumAll;
