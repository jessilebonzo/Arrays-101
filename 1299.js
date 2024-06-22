// 1299. Replace Elements with Greatest Element on Right Side
// #5 In-Place Operations
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
  let rightMax = -1
  for(let i = arr.length -1; i >= 0; i--){
      newMax = Math.max(arr[i], rightMax)
      arr[i] = rightMax
      rightMax = newMax
  }
  return arr
};
