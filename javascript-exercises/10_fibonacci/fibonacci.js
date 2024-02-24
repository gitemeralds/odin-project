const fibonacci = function (someInteger) {
  someInteger = Number(someInteger);
  if (someInteger === 0) {
    return 0;
  }
  if ((someInteger === 1) | (someInteger === 0)) {
    return 1;
  } else {
    let sequence = [1, 1];
    while (sequence.length < someInteger) {
      sequence.push(
        sequence[sequence.length - 2] + sequence[sequence.length - 1]
      );
    }
    return sequence[sequence.length - 1];
  }
};

// Do not edit below this line
module.exports = fibonacci;
