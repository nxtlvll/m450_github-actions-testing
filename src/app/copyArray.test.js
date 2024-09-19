const copyArray = require('./copyArray')

test('properly clone array', () => {
    const array = [1, 2, 3]
    expect(copyArray(array)).toEqual(array)
    expect(copyArray(array)).not.toBe(array)
})