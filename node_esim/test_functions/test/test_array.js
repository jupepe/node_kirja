// const assert = require('assert')
const assert = require('chai').assert

let expectedArr
let arr

before(() => {
    const initArr = ['a', 'b']
    expectedArr = [...initArr, 'c', 'd']
})

describe('Using String#split', () => {

    beforeEach(() => {
        arr = 'a,b,c,d'.split(',')
    })

    it('should be an array', () => {
        assert(Array.isArray(arr))
    })

    it('should be the same array', () => {
        assert.equal(expectedArr.length, arr.length,
            'Arrays have equal length')
        for (let i = 0; i < expectedArr.length; i++) {
            assert.equal(expectedArr[i], arr[i],
                i + 'th elements are equals')
        }
    })

    it('should be the same array II', () => {
        const arr2 = 'a,b,c,d'.split(',')  // not using beforeEach method
        assert.equal(expectedArr.length, arr2.length,
            'Arrays have equal length')
        assert.equal(expectedArr[3], arr2[3], '4th elements are equals')
    })

})