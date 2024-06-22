// 1346. Check If N and Its Double Exist
// #4 Searching for Items in an Array
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  for(let i = 0 ; i < arr.length; i++) {
      for(let j = 0; j < arr.length; j++) {
          if(i !== j && (arr[i] === 2 * arr[j] || arr[i] === arr[j] / 2)){
              return true;
          }
      }
  }
  return false;
};