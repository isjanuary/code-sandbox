/**
 *  @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
}

/** 
 *  @param {number} key
 *  @return {number}
 */
LRUCache.prototype.get = function(key) {
  let value = this[key]
  if (!value) {
    return -1
  }

  value.lastUsed = new Date()
  return value
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

var cache = new LRUCache(2)
console.log(cache.put(1, 1))
console.log(cache.put(2, 2))
console.log(cache.get(1))       // returns 1
console.log(cache.put(3, 3))    // evicts key 2
console.log(cache.get(2))       // returns -1 (not found)
console.log(cache.put(4, 4))    // evicts key 1
console.log(cache.get(1))       // returns -1 (not found)
console.log(cache.get(3))       // returns 3
console.log(cache.get(4))       // returns 4
