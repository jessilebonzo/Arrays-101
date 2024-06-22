// 1295. Find Numbers with Even Number of Digits
// #1 Introduction to Array 101
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  let evenDigits = 0;
  
  for (const n of nums) {
      const stringNum = String(n);
      if (stringNum.length % 2 === 0) evenDigits += 1;
  }
  return evenDigits;
};
