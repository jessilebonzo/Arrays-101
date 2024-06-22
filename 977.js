// 977. Squares of a Sorted Array
// #1 Introduction to Array 101
// #6 Conclusions
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  return nums
  .map(num => Math.pow(num, 2))
  .sort((numOne, numTwo) => numOne - numTwo);
};