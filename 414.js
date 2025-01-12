// 414. Third Maximum Number
// #6 Conclusions
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    
  let temp = nums.sort((a,b)=>{
      return b - a
  })
  
  let s= new Set(temp)
  result = []
  s.forEach(val=>{
      result.push(val)
  })
  
  if(result.length < 3){
      return result[0]
  }
  else {
      return result[2]
  }
  
};