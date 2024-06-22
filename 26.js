// 26. Remove Duplicates from Sorted Array
// #3 Deleting Items From an Array
// #5 In-Place Operations

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0; // Base case
  
  let slowPointer = 0; // Pointer to track unique elements
  for (let fastPointer = 1; fastPointer < nums.length; fastPointer++) {
      if (nums[fastPointer] !== nums[slowPointer]) {
          slowPointer++;
          nums[slowPointer] = nums[fastPointer]; // Update the slow pointer position with the unique element
      }
  }
  
  return slowPointer + 1; // The number of unique elements
};