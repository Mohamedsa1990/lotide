const assertEqual = require('./assertEqual');
const countOnly = require('./countOnly');

const countLetters = function(sentence) {
  const result = {};
  for (let letter of sentence) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

module.exports = countLetters;
// test cases
console.log(countLetters("countLetters"));
console.log(countLetters("lighthouse in the house"));
