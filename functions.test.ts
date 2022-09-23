const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test('check to see if the length is the same', () => {
        let arr = [1,2,3,4,5]
        let result = shuffleArray(arr)
        expect(arr.length).toBe(result.length)
    })

    test('Check to see if shuffleArray returns array', () => {
        let arr = [1,2,3,4,5]
        expect(shuffleArray(arr)).toBe(true)
    })
})