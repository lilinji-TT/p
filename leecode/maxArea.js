var maxArea = function (height) {
  let start = 0;
  let end = height.length - 1;
  let max = 0;
  while (start < end) {
    let area = Math.min(height[start], height[end]) * (end - start);
    max = Math.max(max, area);
    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    }
  }

  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
