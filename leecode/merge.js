/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * @description 56. 合并区间
 */
var merge = function (intervals) {
  const ans = [];
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });

  for (let i = 0; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (ans.length === 0 || ans[ans.length - 1][1] < start) {
      ans.push(intervals[i]);
    } else {
      ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], end);
    }
  }

  return ans;
};

console.log(
  merge([
    [1, 4],
    [0, 5],
    [8, 18],
  ])
);
