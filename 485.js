// 485. Max Consecutive Ones
// **
//  * @param {number[]} nums
//  * @return {number}
//  */

// #1 Introduction to Array 101

var findMaxConsecutiveOnes = function(nums) {
    let onesCount = 0;
    let onesMax =- Infinity;
    
    for (const n of nums) {
        if (n === 0) {
            onesMax = Math.max(onesMax, onesCount);
            onesCount = 0;
        } else {
            onesCount += 1;
        }
    }
    return Math.max(onesMax, onesCount);
};