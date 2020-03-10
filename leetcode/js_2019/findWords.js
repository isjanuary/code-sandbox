/**
 * @param words words you want to test
 * @return findWords 
 * words that pass the test:
 * Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.
 * related leetcode link: https://leetcode.com/problems/keyboard-row/description/
 */

var findWords = function(words) {
  var reg1 = /^[qwertyuiopQWERTYUIOP]+$/
  var reg2 = /^[asdfghjklASDFGHJKL]+$/
  var reg3 = /^[zxcvbnmZXCVBNM]+$/
  var wordsFromSameLineKeyboard = words.filter(word => {
    return reg1.test(word) || reg2.test(word) || reg3.test(word)
  })
  return wordsFromSameLineKeyboard
};

console.log(findWords(['dad', 'acbd', 'piece', 'Alaska']))
