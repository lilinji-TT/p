var longestConsecutive = function (nums) {
  nums.sort((a, b) => a - b);
  console.log(nums);

  let low,
    fast = 0;

  const result = [];
  for (low = 0; low < nums.length; low++) {
    if (nums[low + 1] - nums[low] === 1) {
      result.push(nums[low]);
    }
  }
};

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4])); // 4
