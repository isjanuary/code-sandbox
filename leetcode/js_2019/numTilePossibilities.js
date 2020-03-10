/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
  let cnt = 0
  const letters = tiles.split('')
  const alphabet = []
  const len = letters.length
  // const visited = {}

  // solution 1
  // dfs('')

  // function dfs(accu) {

  //   for (let i = 0; i < len; i++) {
  //     if (
  //       letters[i] >= 'A' && letters[i] <= 'Z' && !visited[accu + letters[i]]
  //     ) {
  //       const tmp = letters[i]
  //       letters[i] = '0'
  //       visited[accu + tmp] = true
  //       dfs(accu + tmp)
  //       letters[i] = tmp
  //     }
  //   }
  // }

  // solution 2
  alphabet.length = 26
  alphabet.fill(0)
  letters.forEach(letter => {
    alphabet[letter.charCodeAt(0) - 65]++
  })

  console.log(alphabet);

  dfs()

  // function dfs() {
  //   for (let i = 0; i < 26; i++) {
  //     if (alphabet[i] === 0) continue
  //     const visited = {}
  //     if (!visited[String.fromCharCode(i + 65)]) {
  //       visited[String.fromCharCode(i + 65)] = true
  //       alphabet[i]--
  //       cnt++
  //       dfs()
  //       alphabet[i]++
  //     }
  //   }
  // }
  function dfs() {
    for (let i = 0; i < 26; i++) {
      if (alphabet[i] === 0) continue
      alphabet[i]--
      cnt++
      dfs()
      alphabet[i]++
    }
  }


  console.log(cnt);
  // console.log(visited);
  // console.log(Object.keys(visited).length);
  // return Object.keys(visited).length
};

numTilePossibilities('BBC')
numTilePossibilities('AAABBC')
