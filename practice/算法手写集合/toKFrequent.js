// 前K个频率高的元素
/**
 * 思路：通过map存储并计算每个元素的频率，元素作为key，频率作为值，然后遍历存入一个数组中,
 * 将value值也就是频率，当作下标，元素本身也就是key，作为新数组的元素，根据下表插入指定位置，
 * 也就是频率越高的元素的越在后面， 频率越低的元素的越在前面，然后从后往前取k个就是，
 * 前k个频率最高的元素.
 */
function toKFrequent(nums, k) {
  const map = new Map();

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  console.log(map);
  const bucket = [];
  for (let [key, value] of map) {
    if (!bucket[value]) {
      bucket[value] = [];
    }
    bucket[value].push(key);
  }
  console.log(bucket);
  const res = [];

  for (let i = bucket.length - 1; i > 0 && res.length < k; i--) {
    if (bucket[i]) {
      res.push(...bucket[i]);
    }
  }

  return res;
}

console.log(toKFrequent([2, 2, 3, 3, 3, 3, 1, 1, 1], 2));
