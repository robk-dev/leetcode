/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
    // const arr = [...nums1, ...nums2];
    // const sorted = arr.sort((a, b) => a - b);

    const sorted = [];
    // already pre-sorted
    while (nums1.length && nums2.length) {
        sorted.push(nums1[0] < nums2[0] ? nums1.shift() : nums2.shift());
    }

    sorted.push(...nums1, ...nums2);

    if (sorted.length % 2 === 1) { // if odd number of items, middle is 1 elem
        return sorted[Math.floor(sorted.length / 2)];
    }

    const mid = sorted.length / 2;
    return (sorted[mid] + sorted[mid - 1]) / 2
};

module.exports = findMedianSortedArrays;
