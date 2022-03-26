const {
    matrix
} = require('./matrix-Spiral')


describe ("matrixSpiral", () => {
    test ("Test 1. input 3 to equal  3*3 Matrix Spiral", () => {
        const actual = matrix(3);
        const expected = [[1, 2, 3],  [8, 9, 4], [7, 6, 5]];
        expect(actual).toEqual(expected)

    })

    test ("Test 2. input 4 to equal 4*4 Matrix Spiral", () => {
        const actual = matrix(4);
        const expected = [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]];
        expect(actual).toEqual(expected);

    })

    test ("Test 3. input 5 to equal 5*5 Matrix Spiral", () => {

        const actual = matrix(5);
        const expected = [[1, 2, 3, 4, 5], [16, 17, 18, 19, 6], [15, 24, 25, 20, 7], [14, 23, 22, 21, 8], [13, 12, 11, 10, 9]]
        expect(actual).toEqual(expected);
    })

})