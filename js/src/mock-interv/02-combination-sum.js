/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
    let curr = [];
    let solutions = [];

    recurse(candidates, target, curr, solutions, 0);
    return solutions;
};

const recurse = (candidates, target, curr, all, start) => {
    if (target < 0) return;

    if (target === 0) {
        all.push([...curr]);
    } else {
        for (let i = start; i < candidates.length; i++) {
            curr.push(candidates[i]);
            recurse(candidates, target - candidates[i], curr, all, i);
            curr.pop();
        }
    }
};

module.exports = combinationSum;
