// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const fail = "🔴";
  const pass = "✅";
  if (actual !== expected) {
    console.log(fail + fail + fail + " Assertion Failed: " + actual + " !== " + expected);
  } else {
    console.log(pass + pass + pass + " Assertion Passed: " + actual + " === " + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 55);