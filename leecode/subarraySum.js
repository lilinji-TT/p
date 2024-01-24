/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * @description 560. 和为 K 的子数组， 子数组是连续非空序列
 * 知识点主要是理解前缀和，
 * 前缀和就是到当前元素的和，比如[1,2,3]的前缀和就是[1,3,6]
 */
var subarraySum = function (nums, k) {
  let ans = 0,
    sum = 0;
  const map = new Map();
  // 初始化，等于自己也是一个和的子数组
  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    // 判断是否存在前缀和等于sum-k，存在，说明存在和为k的子数组
    // 假设 [1,2,3] => [1,3,6]
    // 6 - 3 = 3，也就是说存在和为3的子数组
    if (map.has(sum - k)) {
      ans += map.get(sum - k);
    }

    // 更新前缀和的个数
    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return ans;
};

console.log(subarraySum([1, 2, 3], 3));
