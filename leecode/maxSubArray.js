/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let dp = [];
  dp[0] = nums[0];
  for (const index in nums) {
    if (dp[index - 1] >= 0) {
      dp[index] = dp[index - 1] + nums[index];
    } else {
      dp[index] = nums[index];
    }
  }

  return Math.max(...dp);
};

var _maxSubArray = function (nums) {
  let ans = nums[0];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (sum >= 0) {
      sum = sum + nums[i];
    } else {
      sum = nums[i];
    }

    ans = Math.max(sum, ans);
  }

  return ans;
};


console.log(_maxSubArray([5,4,-1,7,8]))
