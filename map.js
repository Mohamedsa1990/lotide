const assertArraysEqual = require('./assertArraysEqual');



const words = ["ground", "control", "to", "major", "tom"];

// function implementation
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


module.exports = map;


console.log(map(words, word => word.length));
console.log(map(words, word => word[0]));
console.log(map([1,2,3], num => num + 1));
console.log(map("lighthouse", word => word.toUpperCase()));



assertArraysEqual(map(words, word => word.length), [ 6, 7, 2, 5, 3 ]);
assertArraysEqual(map(words, word => word[0]), [ 2, 3]);
assertArraysEqual(map([1,2,3], num => num + 1), [ 2, 3, 4 ]);
assertArraysEqual(map("lighthouse", word => word.toUpperCase()), [ 'L', 'I', 'G', 'H', 'T', 'H', 'O', 'U', 'S', 'E' ]);