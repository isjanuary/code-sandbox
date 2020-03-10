/**
 *  @param number n: the decimal number to count 1 bits
 *  @return number count of the 1 bits
 *  @see ref https://leetcode.com/problems/number-of-1-bits/description/
 */

var hammingWeight = function(n) {
  var cnt = 0
  while (n) {
    cnt ++
    n = n & n - 1
    console.log(`${cnt}`)
  }
  return cnt

  //var mask = 1,
  //  cnt = 0
  //for (let i = 0; i < 32; i++) {
  //  if ((mask & n) === 1) {
  //    cnt ++
  //  }
  //  mask <<= 1
  //}
  //return cnt
}

hammingWeight(2147483648)
hammingWeight(5)
