function threeSum(nums) {
  let result = [];
  if (nums.length < 3) return result;

  nums.sort((a, b) => a - b); // 转化问题，从无序中变成从有序非递减数组中找符合条件的元组，将数组从小到大排序
  for (let i = 0; i < nums.length - 2; i++) {
    //由于上一步排序后是非递减，所以如果元素大于0，之后就不可能有和为0的了
    if (nums[i] > 0) return result;

    // 重复的去掉，避免重复计算
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1; // 从下一位开始
    let right = nums.length - 1; // 从最后一位开始

    // 结束条件是两个指针相遇
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]; // 计算和

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]); // 保存符合条件的元组
        // 计算完到下一步，如果将指针移动放到重复处理逻辑的后面，有可能会导致多走一步
        // 比如-1 -1 0 1 2，如果在后面，第一次进入时的left指向第二个-1，判断重复时会导致
        // left走到 0 的位置，然后left++直接到了1的位置，多走一步
        // 实际应该是到-1的位置
        left++;
        right--;

        //同样是跳过重复的元素, 判断和上一次是否相等
        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum > 0) {
        // 大于0，右指针左移，试下一个
        right--;
      } else {
        // 小于0，左指针右移，试下一个
        left++;
      }
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
