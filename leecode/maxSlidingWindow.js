/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 
 * 大体思路就是保证队列是单调递减的，滑动窗口的最大值就是队首的元素
 * 比如 [2,1,4,3,2,5,4,2,7]
 *      0,1,2,3,4,5,6,7,8
 * 
 */

var maxSlidingWindow = function (nums, k) {
  let result = [],
    queue = [];

  for (let i = 0; i < nums.length; i++) {
    // 排除掉最后一个保证队列是单调递减的
    while (queue.length && nums[queue[queue.length - 1]] <= nums[i]) {
      queue.pop();
    }

    // 入队
    queue.push(i);

    // 如果超出了窗口长度，出队
    if (i - queue[0] >= k) {
      queue.shift();
    }

    // 由于队列是单调递减的，队首元素就是最大值
    if (i >= k - 1) {
      result.push(nums[queue[0]]);
    }
  }

  return result;
};
