const findMin = require('../../src/problems/154-find-min-in-rot-sort-arr');

describe("Find minimum in rotated sorted array Suite:", () => {
    test("findMin(input) should return min", () => {
        const input = [1, 3, 5];
        const expected = 1;

        expect(findMin(input)).toEqual(expected);
    });
    test("findMin(input) should return min", () => {
        const input = [2, 2, 2, 0, 1];
        const expected = 0;

        expect(findMin(input)).toEqual(expected);
    });
});
