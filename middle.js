const assertEqual = function(actual, expected) {
  const fail = "🔴";
  const pass = "✅";
  if (actual !== expected) {
    console.log(`${fail}${fail}${fail} Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`${pass}${pass}${pass} Assertion Passed: ${actual} === ${expected}`);
  }
};

const eqArrays = function(array1,array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1,array2) {
  assertEqual(eqArrays(array1,array2),true);
};

const middle = function(inputArray) {
  if (inputArray.length === 1 || inputArray.length === 2) {
    return [];
  } else if (inputArray.length % 2 === 0) {
    return [inputArray[inputArray.length / 2 - 1], inputArray[inputArray.length / 2]];
  } else {
    return [inputArray[inputArray.length / 2 - 0.5]];
  }
};

// test cases

assertArraysEqual(middle([1]),[]); // => []
assertArraysEqual(middle([1, 2]), []); // => []

assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);// => [3, 4]

assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 7, 9, 30, 56, 4, 55]), [7]); // => [7]