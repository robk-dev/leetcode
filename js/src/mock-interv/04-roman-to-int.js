/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
    const str = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 };
    const exceptions = { "IV": -2, "IX": -2, "XL": -20, "XC": -20, "CD": -200, "CM": -200 };
    let a = 0;

    Object.keys(exceptions).forEach(exception => {
        if (s.indexOf(exception) != -1) a += exceptions[exception];
    });


    for (let i = 0, max = s.length; i < max; i++) {
        a += str[s[i]];
    }

    return a;
};

module.exports = romanToInt;