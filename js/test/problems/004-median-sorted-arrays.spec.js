const findMedianSortedArrays = require('../../src/problems/004-median-sorted-arrays');

describe("Median of Sorted Arrays Suite:", () => {
    test("findMedianSortedArrays(input1, input2) should return expected", () => {
        const input1 = [1, 3];
        const input2 = [2, 7];
        const expected = 2.5;

        expect(findMedianSortedArrays(input1, input2)).toEqual(expected);
    });
});
