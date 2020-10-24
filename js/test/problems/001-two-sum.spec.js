const two_sum = require('../../src/problems/001-two-sum');

describe("Two Sum Suite:", () => {
    test("two_sum(input, target) should return expected value", () => {
        const input = [2, 7, 11, 15];
        const target = 9;

        const expected = [0, 1];

        expect(two_sum(input, target)).toEqual(expected);
    });
});
