
const assertArraysEqual = require('./assertArraysEqual');

const without = function(array1,array2) {
  const newArray = [...array1];
  for (let i = 0; i < newArray.length; i++) {
    for (let x = 0; x < array2.length; x++) {
      if (newArray[i] === array2[x]) {
        newArray.splice(i, 1);
      }
    }
  }
  console.log(newArray);
};


module.exports = without;

// test cases
without([1, 2, 3], [1, 2]); // => [2, 3]
without(["1", "2", "3"], [1, "2", "3"]); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);