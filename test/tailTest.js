const tail = require('../tail');

const assert = require('chai').assert;

// const assertEqual = require('../assertEqual')


// test case 


describe("#tail", () => {
  it("returns length of 2 if passed an Array that have 3 elements", () => {
    assert.lengthOf(tail(["Hello", "Lighthouse", "Labs"]), 2);
  });
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
});