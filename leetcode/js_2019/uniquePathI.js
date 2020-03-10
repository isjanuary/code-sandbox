/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * @see ref https://leetcode.com/problems/unique-paths/description/
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  var n = obstacleGrid.length
  var m = obstacleGrid[0].length
  var paths = []
  paths[0] = []
  for (let i = 0; i < m; i++) {
    paths[0].push(1)
  }
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      continue
    }
    paths[i] = []
    paths[i].push(1)
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      paths[i].push(paths[i - 1][j] + paths[i][j - 1])
    }
  }
  return paths[n - 1][m - 1]
  //return paths
}

console.log(uniquePathsWithObstacles([
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]))

console.log(uniquePathsWithObstacles([
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]))
