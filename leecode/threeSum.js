/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const len = nums.length;
  const ans = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) return ans;

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1,
      right = len - 1;

    while (left < right) {
      const sum = nums[left] + nums[right] + nums[i];

      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        ans.push([nums[left], nums[i], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      }
    }
  }

  return ans;
};
