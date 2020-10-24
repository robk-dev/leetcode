const findMin = function (nums) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        if (nums[high] > nums[low])
            return nums[low];

        const mid = low + Math.floor((high - low) / 2);

        if (nums[mid] > nums[low])
            low = mid + 1;
        else if (nums[low] > nums[mid])
            high = mid;
        else low++;
    }

    return nums[high];
};

module.exports = findMin;
