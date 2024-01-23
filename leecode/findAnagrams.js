/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const map = new Map();

  // 统计出现字符次数，保证后续查找时子串内各字符次数是一致的，才是异位词
  for (const str of p) {
    map.set(str, (map.get(str) || 0) + 1);
  }

  let count = p.length;
  let start = 0;
  let end = 0;
  let result = [];

  while (end < s.length) {
    // 判断当前字符是否在map中
    if (map.get(s[end]) > 0) {
      count--; // 计数器减一
    }
    map.set(s[end], map.get(s[end]) - 1); // 当前字符出现次数减一，说明匹配上了
    end++; // 右指针右移

    // 计数器为0，说明已经找到了一个匹配的子串，存入起始索引
    if (count === 0) {
      result.push(start);
    }

    // 每过 p 的长度后，左指针向右移动一位
    if (end - start === p.length) {
      // 当前字符即将不在滑动窗口内，更新计数器，+1
      if (map.get(s[start]) >= 0) {
        count++;
      }

      // 更新start索引所在字符的出现次数，已经不在滑动窗口内
      map.set(s[start], map.get(s[start]) + 1);
      start++;
    }
  }

  return result;
};

console.log(findAnagrams("bcaebabacd", "abc"));
