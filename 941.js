// 941. Valid Mountain Array
// #4 Searching for Items in an Array
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
  let startOfValley = 0;
  
  if(arr.length < 3) return false
  if(arr[1] < arr[0]) return false
  
  for(let i = 1; i<arr.length; i++)
      {
          if(arr[i-1] == arr[i])return false
          
          if(arr[i - 1] > arr[i]){
              startOfValley = i-1
              break
          }
      }
  for(let i = startOfValley; i<arr.length-1; i++)
      {
          if(arr[i] <= arr[i+1]) return false
      }
  return true
};