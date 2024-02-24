const palindromes = function (string) {
  string = removePunctuationAndNumbers(string);
  console.log(string);
  string = string.toLowerCase();
  console.log(string);
  let reversedString = string.split("").reverse().join("");
  console.log(reversedString);
  return string === reversedString ? true : false;
};

const removePunctuationAndNumbers = (string) => {
  const punctuationAndNumbers = /[ !@#$%^&*(){}\-_=+\[\]\\<>?\/.,'"`|]/g;
  return string.replace(punctuationAndNumbers, "");
};

// Do not edit below this line
module.exports = palindromes;
