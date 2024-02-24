const removeFromArray = function (array, ...intsToRemove) {
  for (i = 0; i < intsToRemove.length; i++) {
    while (array.indexOf(intsToRemove[i]) !== -1) {
      array.splice(array.indexOf(intsToRemove[i]), 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
