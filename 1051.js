// 1051. Height Checker
// #6 Conclusions
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  let heightsOrdered = heights.slice().sort((a,b) => a -b);
  let count = 0;
  for (let i = 0; i < heights.length; i++){
      if(heights[i] !== heightsOrdered[i]){
          count++;
      }
  }
  return count;
};