const assertArraysEqual = require('./assertArraysEqual')


const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      return results;
    }
  }
  return results;
};

module.exports = takeUntil;

// test case
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results2 , [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
assertArraysEqual(results1 , [ 1, 2, 5, 99, 2 ]);

// for (let i = 0; i < array.length; i++) {
//   if (callback(array[i])) {
//     return array.slice(0,i);
//   }

// }