/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    if (numMap.hasOwnProperty(complement)) {
      return [numMap[complement], i];
    }

    numMap[num] = i;
  }

  return [];
};

var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const rest = target - nums[i];
    for (let n = (i + 1); n < nums.length; n++) {
        const isPaired = nums[n] === rest
        if (isPaired){
            return [i,n];
        }
    }
  }
     return false;
  };
