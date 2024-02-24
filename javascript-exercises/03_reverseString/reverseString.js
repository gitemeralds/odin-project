const reverseString = function (string) {
  let newString = string.split("");
  newString = newString.reverse();
  newString = newString.join("");
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
