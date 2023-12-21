class LRUCache {
  constructor(capacity) {
    this.cache = new Map(); // 初始化map结构，作缓存
    this.capacity = capacity; // 容量
  }

  get(key) {
    if (this.cache.has(key)) {
      // 判断缓存中是否有该key
      const value = this.cache.get(key); // 获取该key对应在缓存中的值

      this.cache.delete(key); // 删除该key对应的元素
      this.cache.set(key, value); // 将新获取的值放入缓存中，相当于更新该key的值，这样第一位的元素就是最久没被使用的

      return value;
    }

    return -1;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    // 判断是否超出容量
    if (this.cache.size > this.capacity) {
      // 移除最久未使用的元素，在存放新值
      // map.keys().next().value
      // map.keys()返回一个新的迭代器对象，
      //包含Map上对应的key，
      //使用next()防伪迭代器的下一个元素，
      //返回一个包含key和value的对象
      // 对应的value使用map.values()
      this.cache.delete(this.cache.keys().next().value);
    }

    this.cache.set(key, value);
  }
}

//验证
const lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1); // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
