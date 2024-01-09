// 不符合题目的 O(n)要求
var longestConsecutive = function (nums) {
  nums.sort((a, b) => a - b);

  const map = new Map();

  // 这一步是核心，主要是为了处理
  for (let i = 0; i < nums.length; i++) {
    // map.get(nums[i] - 1) + 1 || 1 主要是为了判断比自己小1的项是否存在，存在即当前元素加1存入，这样可以保证一个顺序，
    // 且存入map的value最大的就是这最长子序列的长度，后序遍历即可
    map.set(nums[i], map.get(nums[i] - 1) + 1 || 1);
  }

  let ans = 0;

  for (const [, vlaue] of map) {
    ans = Math.max(ans, vlaue);
  }

  return ans;
};

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4])); // 4

// O(n)
var _longestConsecutive = function (nums) {
  const map = new Map();

  let ans = 0;

  for (const num of nums) {
    // 避免重复
    if (!map.has(num)) {
      let preLen = map.get(num - 1) || 0; // 获取当前项的前一项对应的序列长度
      let nextLen = map.get(num + 1) || 0; // 获取当前项的后一项对应的序列长度
      let curLen = preLen + 1 + nextLen; // 计算当前项
      map.set(num, curLen); // 将当前项对应的序列长度存入
      ans = Math.max(ans, curLen); // 更新结果
      map.set(num + nextLen, curLen); // 更新右端
      map.set(num - preLen, curLen); // 更新左端
    }

    console.log(map);
  }

  return ans;
};

/**
 * Map(1) { 100 => 1 }
 * Map(2) { 100 => 1, 1 => 1 }
 * Map(3) { 100 => 1, 1 => 1, 200 => 1 }
 * Map(4) { 100 => 1, 1 => 2, 200 => 1, 2 => 2 }
 * Map(5) { 100 => 1, 1 => 2, 200 => 1, 2 => 2, 4 => 1 }
 * Map(6) { 100 => 1, 1 => 4, 200 => 1, 2 => 2, 4 => 4, 3 => 4 }
 */
_longestConsecutive([100, 1, 200, 2, 4, 3]);
console.log(_longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
console.log(_longestConsecutive([100, 1, 200, 2, 4, 3])); // 4
