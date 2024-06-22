// 448. Find All Numbers Disappeared in an Array
// #6 Conclusions

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let set = new Set(nums),
      result = []
  for(let i = 1; i<=nums.length; i++){
      if(!set.has(i)){
          result.push(i)
      }
  }
  return result
};