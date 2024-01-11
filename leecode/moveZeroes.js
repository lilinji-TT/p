var moveZeroes = function (nums) {
  let low = 0,
    fast = 0;

  while (fast < nums.length) {
    if (nums[fast] !== 0) {
      [nums[low], nums[fast]] = [nums[fast], nums[low]];
      low++;
    }
    fast++;
  }
};

moveZeroes([0, 1, 2, 0, 5, 0, 6, 0, 3, 12]);

var _moveZeroes = function (nums) {
  const len = nums.length;
  if (len < 2) return nums;

  let left = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i] !== 0) {
      nums[left++] = nums[i];
      if (i >= left) nums[i] = 0;
    }
  }
};

_moveZeroes([0, 1, 2, 0, 5, 0, 6, 0, 3, 12]);
