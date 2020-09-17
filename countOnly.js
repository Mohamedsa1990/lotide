const assertEqual = function(actual, expected) {
  const fail = "🔴";
  const pass = "✅";
  if (actual !== expected) {
    console.log(`${fail}${fail}${fail} Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`${pass}${pass}${pass} Assertion Passed: ${actual} === ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  const result = {};
  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (result[item]) {
        result[item] += 1;
      } else {
        result[item] = 1; 
      }
    }
  }
  return result;
};
// test case
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": false, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1)
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);