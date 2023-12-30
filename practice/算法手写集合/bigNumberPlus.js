function addBigNumber(str1, str2) {
  // 初始化末位指针
  let i = str1.length - 1;
  let j = str2.length - 1;

  let carry = 0; // 进位
  let result = ""; // 结果

  while (i >= 0 || j >= 0 || carry !== 0) {
    const d1 = i >= 0 ? parseInt(str1[i]) : 0;
    const d2 = j >= 0 ? parseInt(str2[j]) : 0;

    const sum = d1 + d2 + carry; // 计算数位上的和
    result = (sum % 10).toString() + result; // 计算总和，在result前插入
    carry = Math.floor(sum / 10); // 计算进位

    // 指针i，j 向前移动一位
    i--;
    j--;
  }

  return result;
}

console.log(addBigNumber("199999", "999090"));
