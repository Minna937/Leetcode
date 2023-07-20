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

  var containsDuplicate = function(nums) {
    const newSet = new Set(nums);
    const isUnique = newSet.size === nums.length;
    return !isUnique;
  };

  var containsDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
      for (let a = 0; a < i; a++) {
        const isDuplicate = nums[a] === nums[i];
        if (isDuplicate) return true;
      }
    }
        return false;
  };
