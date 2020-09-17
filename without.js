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
  const fail = "🔴";
  const pass = "✅";
  if (eqArrays(array1,array2)) {
    console.log(`${pass}${pass}${pass} Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`${fail}${fail}${fail} Assertion Failed: ${array1} !== ${array2}`);
  }
};

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




// test cases
without([1, 2, 3], [1, 2]); // => [2, 3]
without(["1", "2", "3"], [1, "2", "3"]); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);