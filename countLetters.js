const assertEqual = function(actual, expected) {
  const fail = "🔴";
  const pass = "✅";
  if (actual !== expected) {
    console.log(`${fail}${fail}${fail} Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`${pass}${pass}${pass} Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetters = function(sentence) {
  const result = {};
  for (let letters of sentence) {
    if (letters !== " ") {
      if (result[letters]) {
        result[letters] += 1;
      } else {
        result[letters] = 1;
      }
    }
  }
  return result;
};


// test cases
console.log(countLetters("countLetters"));
console.log(countLetters("lighthouse in the house"));
