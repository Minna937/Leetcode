/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let a = [];
    for (let i = 0; i < nums.length; i++) {
      if (a.includes(nums[i])) {
        return true;
      }
      a.push(nums[i]);
    }
    return false;
  };