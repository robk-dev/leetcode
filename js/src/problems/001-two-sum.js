/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    for (let i = 0, max = nums.length; i < max; i++) {
        for (let j = 1, max = nums.length; j < max; j++) {
            if (i === j) continue;
            const sum = nums[i] + nums[j];
            if (sum === target) {
                return [i, j];
            }
        }
    }
};

module.exports = twoSum;
