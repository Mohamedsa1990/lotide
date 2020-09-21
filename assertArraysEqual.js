const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1,array2) {
  const fail = "🔴";
  const pass = "✅";
  if (eqArrays(array1,array2)) {
    console.log(`${pass}${pass}${pass} Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`${fail}${fail}${fail} Assertion Failed: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;
