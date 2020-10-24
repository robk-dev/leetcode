const lengthOfLongestSubstring = require('../../src/problems/003-longet-substr-wo-repeat-chars');

describe("Longest Substr Suite:", () => {
    test("binary_search(sorted_array, value) should work", () => {
        const input = 'abcabcbb'
        const expected = 3;

        expect(lengthOfLongestSubstring(input)).toEqual(expected);
    });
});
