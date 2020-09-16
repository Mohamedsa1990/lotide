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
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(array1,array2) {
  assertEqual(eqArrays(array1,array2),true);
}

assertArraysEqual([1, 2, 3, 4],[1, 2, 3, 4]);
assertArraysEqual([1, 2, 3, 4],[1, 2, 2, 4]);