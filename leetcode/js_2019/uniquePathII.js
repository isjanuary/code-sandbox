/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 * @see ref https://leetcode.com/problems/unique-paths-ii/description/
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  /**
   * method 1 start
   */
 
  //var n = obstacleGrid.length
  //var m = obstacleGrid[0].length
  //if (obstracleGrid[0][0] === 1) {
  //  return 0
  //}

  //var paths = []
  //paths[0] = []
  //for (let i = 0; i < m; i++) {
  //  if (obstacleGrid[0][i] === 1) {
  //    const zeros = []
  //    zeros.length = m - i
  //    zeros.fill(0)
  //    paths[0] = paths[0].concat(zeros)
  //    break
  //  }
  //  paths[0].push(1)
  //}

  //var inaccessible = false
  //for (let i = 0; i < n; i++) {
  //  if (i === 0) {
  //    continue
  //  }

  //  paths[i] = []
  //  if (obstacleGrid[i][0] === 1 || inaccessible === true) {
  //    paths[i].push(0)
  //    inaccessible = true
  //    continue
  //  }
  //  paths[i].push(1)
  //}

  //for (let i = 1; i < n; i++) {
  //  for (let j = 1; j < m; j++) {
  //    if (obstacleGrid[i][j] === 1) {
  //      paths[i].push(0)
  //    } else {
  //      paths[i].push(paths[i - 1][j] + paths[i][j - 1])
  //    }
  //  }
  //}
  //return paths[n - 1][m - 1]
  //return paths

  /**
   * method 2 start
   */
  var m = obstacleGrid.length
  var n = obstacleGrid[0].length

  obstacleGrid[0][0] = obstacleGrid[0][0] == 1 ? 0 : 1
  
  for (var i = 1; i < m; i++){
    obstacleGrid[i][0] = (obstacleGrid[i][0] == 1) ? 0 : obstacleGrid[i-1][0]
  }

  for (var j = 1; j < n; j++){
    obstacleGrid[0][j] =(obstacleGrid[0][j]==1)? 0: obstacleGrid[0][j-1]
  }
  for (var i = 1; i < m; i++){
    for (var j = 1; j < n; j++){
      obstacleGrid[i][j] =(obstacleGrid[i][j]==1)? 0: obstacleGrid[i-1][j]+obstacleGrid[i][j-1];
    }
  }
  return obstacleGrid[m-1][n-1];
}

console.log(uniquePathsWithObstacles([
  [0, 0, 1],
  [0, 0, 0],
  [0, 0, 0],
]))

console.log(uniquePathsWithObstacles([
  [0, 1, 0],
  [0, 0, 0],
  [1, 0, 0],
  [0, 0, 0],
]))
console.log(uniquePathsWithObstacles([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
]))

console.log(uniquePathsWithObstacles([
  [1],
  [0]
]))
console.log(uniquePathsWithObstacles([
  [1],
]))
