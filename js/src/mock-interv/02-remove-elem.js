/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
    const { length } = nums;
    if (!length) return 0;

    let count = 0;
    for (let j = 0; j < length; j++) {
        if (nums[j] != val) {
            nums[count] = nums[j];
            count++;
        }
    }
    return count;
};

module.exports = removeElement;
