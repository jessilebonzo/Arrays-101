// 27. Remove Element
// #3 Deleting Items From an Array
// #5 In-Place Operations
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let index = 0;
  for (let i = 0; i < nums.length; i++){
      if (nums[i] !== val){
          nums[index] = nums[i];
          index ++;
      }
  }
  return index;
};