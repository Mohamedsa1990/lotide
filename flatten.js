
const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(array) {
  const newArray = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      for (let element2 of element) {
        newArray.push(element2);
      }
    } else {
      newArray.push(element);
    }
  }
  return newArray;
};


module.exports = flatten;

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [ 1, 2, 3, 4, 5, 6 ]);