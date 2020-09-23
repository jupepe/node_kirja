/*
Mocha testing.

Test cases (describe) can be nested inside other test cases.
we can abstract code into beforeEach and before hooks.
before and beforeEach can be mixed in with different test cases on different levels.


Mocha supports more traditional TDD interfaces:

* suite: analogous to describe
* test: analogous to it
* setup: analogous to before
* teardown: analogous to after
* suiteSetup: analogous to beforeEach
* suiteTeardown: analogous to afterEach

Mocha tests:

$ npm install -g mocha
$ mkdir test

Run all test cased:

$ mocha 


*/

// const assert = require('assert')
const assert = require('chai').assert


const expectedArr = ['1', '2', '3', '4', '5']
const reversedArr = ['5', '4', '3', '2', '1']
const list = '12345'.split('')


const reverseArray = (arr) => {
    let newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr
}

// Running test methods
describe('String#splitToArray', () => {
    it('should return the same array', () => {
        //list.reverse();
        assert.equal(expectedArr.length, list.length,
            'arrays have same length')
        for (let i = 0; i < expectedArr.length; i++) {
            assert.equal(expectedArr[i], list[i],
                i + 'th elements are equal')
        }
    })
})

describe('Array#reverseArray', () => {
    it('should return the reversed array', () => {
        let reversed = reverseArray(list)

        assert.equal(reversedArr.length, reversed.length,
            'arrays have same length')
        for (let i = 0; i < reversedArr.length; i++) {
            assert.equal(reversedArr[i], reversed[i],
                i + 'th elements are equal')
        }
    })
})  

