/**
 * @param {number[]} nums
 */
const NumArray = function (nums) {
    while (Array.isArray(nums[0]))
        nums = nums[0];
    this.data = nums;
};

/** 
* @param {number} i 
* @param {number} val
* @return {void}
*/
NumArray.prototype.update = function (i, val) {
    this.data[i] = val;
};

/** 
* @param {number} i 
* @param {number} j
* @return {number}
*/
NumArray.prototype.sumRange = function (i, j) {
    let sum = 0;
    while (this.data[i] && i <= j) {
        sum += this.data[i];
        i++;
    }
    return sum;
};

/** 
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* obj.update(i,val)
* var param_2 = obj.sumRange(i,j)
*/

let obj = new NumArray([1, 3, 5]);
// obj.update(0, 3);
console.log(obj.sumRange(0, 2));

