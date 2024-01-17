var lengthOfLongestSubstring = function (s) {
  const temp = [];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (temp.includes(s[i]) && temp.length) {
      temp.splice(0, temp.indexOf(s[i]) + 1);
    }
    temp.push(s[i]);
    max = Math.max(max, temp.length);
  }

  return max;
};

var _lengthOfLongestSubstring = function (s) {
  const map = new Map();
  let ans = 0;
  for (let i = 0, j = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      // 取最新的位置，比如a，b，c，c，a，到a的时候j取得a是1，应该取原本的值
      j = Math.max(map.get(s[i]) + 1, j);
    }
    ans = Math.max(ans, i - j + 1);
    map.set(s[i], i);
  }
  return ans;
};

console.log(lengthOfLongestSubstring("abcbcabb"));
console.log(_lengthOfLongestSubstring("abcbcabb"));
