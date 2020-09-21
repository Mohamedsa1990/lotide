const middle = function(inputArray) {
  if (inputArray.length === 1 || inputArray.length === 2) {
    return [];
  } else if (inputArray.length % 2 === 0) {
    return [inputArray[inputArray.length / 2 - 1], inputArray[inputArray.length / 2]];
  } else {
    return [inputArray[inputArray.length / 2 - 0.5]];
  }
};

module.exports = middle;

