// https://leetcode.com/problems/race-car/description/

var racecar = function(target) {
  const seqCnt = []

  var dp = function (target) {

    if (seqCnt[target - 1]) return seqCnt[target - 1]
    //console.log('cur loop:L ', seqCnt)

    let binaryLen = Math.floor(Math.log2(target)) + 1
    console.log('target is: ', target, binaryLen)
    if (Math.pow(2, binaryLen) - 1 === target) {
      seqCnt[target - 1] = binaryLen
      return seqCnt[target - 1]
    } else {
      // TODO code here
      seqCnt[target - 1] = binaryLen + 1 + dp(Math.pow(2, binaryLen) - 1 - target)
      console.log('curr seq cnt: ', seqCnt, target)
      // m here means steps to reverse
      for (let m = 0; m < binaryLen; m++) {
        seqCnt[target - 1] = Math.min(
          seqCnt[target - 1],
          binaryLen + 1 + m + dp(target - Math.pow(2, binaryLen - 1) + Math.pow(2, m))
        )
        //seqCnt[target - 1] = binaryLen + 1 + dp(Math.pow(2, binaryLen) - 1 - target)
      }
      console.log('after for loop: ', seqCnt)
      return seqCnt[target - 1]
    }
  }
  
  dp(target)
  console.log(seqCnt, target - 1)
  return seqCnt[target - 1]
};

console.log('======: ', racecar(2))
console.log('======: ', racecar(3))
console.log('======: ', racecar(5))
console.log('======: ', racecar(6))
