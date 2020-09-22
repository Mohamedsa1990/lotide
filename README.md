# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @Mohamedsa1990
/lotide`

**Require it:**

`const _ = require('@Mohamedsa1990
/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `tail(...)`:gives the tail of the array
* `head(...)`: gives the first element of the array
* `middle(...)`: gives the middle number of the array
* `assertArraysEqual(...)`: asserts if 2 arrays are equal
* `assertEqual(...)`:asserts if two values(not arrays) are equal 
* `assertObjectsEqual(...)`:asserts if two objects are equal
* `countLetters(...)`: count the number of letters
* `countOnly(...)`:count the specified letter
* `eqArrays(...)`:check if two arrays are equal
* `eqObjects(...)`:check if two objects are equal
* `findKeyByValue(...)`:find the key of an object by finding the value of that key
* `findKey(...)`:find the key of an object
* `flatten(...)`:flatten nested array (one level only)
* `letterPositions(...)`:gives the letter position in a sentance
* `map(...)`:map the array elements
* `takeUntil(...)`:take the array elements until a specified condition
* `without(...)`: take array element without specified element