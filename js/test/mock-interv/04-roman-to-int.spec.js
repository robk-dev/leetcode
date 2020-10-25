const romanToInt = require('../../src/mock-interv/04-roman-to-int');

describe("Roman To Integer Suite:", () => {
    test("romanToInt(s) should return equivalent of roman numeral as int", () => {
        expect(romanToInt('IV')).toEqual(4);
    });

    test("romanToInt(s) should return equivalent of roman numeral as int", () => {
        expect(romanToInt('XIV')).toEqual(14);
    });

    test("romanToInt(s) should return equivalent of roman numeral as int", () => {
        expect(romanToInt('MMXX')).toEqual(2020);
    });
});
