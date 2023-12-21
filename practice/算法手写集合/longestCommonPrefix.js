function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 0; i < strs.length; i++) {
    // 主要是理解indexOf !== 0
    while (strs[i].indexOf(prefix) !== 0) {
      console.log(prefix);
      // 每次循环都去掉最后一个字符匹配当前遍历到的字符数组项，直到prefix为空为止
      prefix = prefix.slice(0, prefix.length - 1);

      if (prefix === "") return prefix; // 为空就直接返回
    }
  }

  return prefix;
}

const strs = ["asd", "asdf", "asdasd", "a"];

console.log(longestCommonPrefix(strs)); // a
