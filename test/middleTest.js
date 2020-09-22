const middle = require('../middle');

const assert = require('chai').assert;

// const assertArraysEqual = require('../assertArraysEqual');


// test cases

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns [3,4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("returns [7] for [1, 2, 3, 4, 5, 6, 7, 7, 9, 30, 56, 4, 55]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 7, 9, 30, 56, 4, 55]), [7]);
  });
});