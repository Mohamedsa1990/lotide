const middle = require('../middle');


const assertArraysEqual = require('../assertArraysEqual');


// test cases

assertArraysEqual(middle([1]),[]); // => []
assertArraysEqual(middle([1, 2]), []); // => []

assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 6]);// => [3, 4]

assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 7, 9, 30, 56, 4, 55]), [7]); // => [7]