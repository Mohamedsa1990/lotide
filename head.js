const head = function(array) {
  return array[0];
};
console.log(head([5, 6, 9]));

const assertEqual = function(actual, expected) {
  const fail = "🔴";
  const pass = "✅";
  if (actual !== expected) {
    console.log(`${fail}${fail}${fail} Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`${pass}${pass}${pass} Assertion Passed: ${actual} === ${expected}`);
  }
};


// test code

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "Hello")




const args = process.argv;
let arry = args.slice(2);

let reversedArray = [];
const reverse = function(arry) {
  for (let x = 0; x < arry.length; x++) {
    // let newString = "";
    reversedArray.push(reverseWord(arry[x]));
  }

  for (let x = 0; x < arry.length; x++) {
    console.log(arry[i]);
  }
};
  
const reverseWord = function(str){
  let newString = '';
  for (var i = str.length - 1; i >= 0; i--) { 
    newString += str[i]; 
  }

  return newString;
}
reverse (arry);