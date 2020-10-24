const comb_sum = require('../../src/mock-interv/02-combination-sum');

describe("Combination Sum:", () => {
    test("combinationSum(input, target) should work", () => {
        const input = [2, 3, 6, 7];
        const target = 7;

        const expected = [[2, 2, 3], [7]];

        expect(comb_sum(input, target)).toEqual(expected);
    });
});
