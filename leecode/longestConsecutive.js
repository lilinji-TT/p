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

  for (const [key, vlaue] of map) {
    ans = Math.max(ans,vlaue);
  }

  return ans;
};

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4])); // 4
