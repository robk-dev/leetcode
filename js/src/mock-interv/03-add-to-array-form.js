/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
const addToArrayForm = function (A, K) {
    const num = BigInt(A.join(''));
    const sum = num + BigInt(K);

    const output = String(sum).split('');
    return output;
};

// [1,2,0,0]
// 34


// [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3]
// 516