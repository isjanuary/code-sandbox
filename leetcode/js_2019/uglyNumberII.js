/**
 * @param {number} n
 * @return {number}
 * @see ref https://leetcode.com/problems/ugly-number-ii/description/
 */
var min = function (a, b) {
  return a < b ? a : b
}

var nthUglyNumber = function(n) {
  if (n === 1) {
    return 1
  }

  const res = [1]
  let by2 = 0
  let by3 = 0
  let by5 = 0
  for (let idx = 1; idx < n; idx++) {
    // Notes here: index assignment is much faster than array.push in the case
    //             where you try to insert elements into an array from i to n
    //res.push(Math.min(res[by2] * 2, Math.min(res[by3] * 3, res[by5] * 5)))
    res[idx] = min(res[by2] * 2, min(res[by3] * 3, res[by5] * 5))
    if (res[idx] === res[by2] * 2) by2++
    if (res[idx] === res[by3] * 3) by3++
    if (res[idx] === res[by5] * 5) by5++
  }
  return res[n - 1]
}

console.log(nthUglyNumber(1))
console.log(nthUglyNumber(2))
console.log(nthUglyNumber(3))
console.log(nthUglyNumber(4))
console.log(nthUglyNumber(5))
console.log(nthUglyNumber(6))
console.log(nthUglyNumber(7))
console.log(nthUglyNumber(8))
console.log(nthUglyNumber(9))
console.log(nthUglyNumber(10))
console.log(nthUglyNumber(11))
console.log(nthUglyNumber(271))
console.log(nthUglyNumber(276))
console.log(nthUglyNumber(280))
console.log(nthUglyNumber(288))
console.log(nthUglyNumber(300))
