const remove_elem = require('../../src/mock-interv/02-remove-elem');

describe("Remove Element Suite:", () => {
    test("remove_elem(nums, val) should return expected result", () => {
        const nums = [3, 2, 2, 3];
        const val = 3;

        const expected = 2;

        expect(remove_elem(nums, val)).toEqual(expected);
    });

    test("remove_elem(nums, val) should return expected result", () => {
        const nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2;

        const expected = 5;

        expect(remove_elem(nums, val)).toEqual(expected);
    });

});
