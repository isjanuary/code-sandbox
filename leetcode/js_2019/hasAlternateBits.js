/**
 * @param {number} n
 * @return {boolean}
 * @see ref https://leetcode.com/problems/binary-number-with-alternating-bits/description/
 */
var hasAlternatingBits = function(n) {
  //var cnt = 0
  //var prevBit = 0
  //var currBit = 0
  //var flag = true
  //while (n) {
  //  if (cnt === 0) {
  //    prevBit = n & 1
  //    console.log(n & 1, n >> 1)
  //    n = n >> 1
  //  } else {
  //    currBit = n & 1
  //    flag = (prevBit - currBit) !== 0
  //    console.log(n & 1, n >> 1)
  //    if (!flag) {
  //      return flag
  //    }
  //    prevBit = currBit
  //    n = n >> 1
  //  }

  //  cnt++
  //}
  //return flag
  //
  let lastBit = n & 1
  let ret = false
  while (n) {
    n = n >> 1
    ret = (n & 1) !== lastBit
    if (!ret) {
      return ret
    }
    lastBit = n & 1
  }
  return ret
}

console.log(hasAlternatingBits(1))
console.log(hasAlternatingBits(2))
console.log(hasAlternatingBits(3))
console.log(hasAlternatingBits(5))
console.log(hasAlternatingBits(7))
console.log(hasAlternatingBits(11))
console.log(hasAlternatingBits(10))
