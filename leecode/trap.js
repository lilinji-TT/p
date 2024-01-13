/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let ans = 0,
    left = 0,
    pre_max = 0,
    suf_max = 0,
    right = height.length - 1;

  while (left < right) {
    // 计算前后最高的位置
    pre_max = Math.max(pre_max, height[left]);
    suf_max = Math.max(suf_max, height[right]);

    // 如果右边的最高，就计算并向右移动一次
    if (pre_max < suf_max) {
      ans += pre_max - height[left];
      left++;
    } else {
      ans += suf_max - height[right];
      right--;
    }
  }

  return ans;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
