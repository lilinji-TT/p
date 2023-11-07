/**
 * 二分查找：数组有序且无重复
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，
 * 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 *
 *
 * 实例一
 * 输入: nums = [-1,0,3,5,9,12],
 * target = 9 输出: 4
 * 解释: 9 出现在 nums 中并且下标为 4
 *
 * 实例二
 * 输入: nums = [-1,0,3,5,9,12], target = 2
 * 输出: -1
 * 解释: 2 不存在 nums 中因此返回 -1
 */

function findTarget(arr, target) {
  const len = arr.length;
  let left = 0;
  let right = len - 1;

  while (left <= right) {
    let middle = (right + left) / 2;
    if (arr[middle] < target) {
      left = middle + 1; // 比目标值小，所以在右区间，从middle+1的位置开始找 [middle+1, right]
    } else if (arr[middle] > target) {
      right = middle - 1; // 比目标值大，所以在左区间，从middle+1的位置开始找 [left, middle-1]
    } else {
      return middle;
    }
  }

  return -1;
}


console.log(findTarget([1,2,3,4,7,9,10], 2));