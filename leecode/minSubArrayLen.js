// 暴力
function minSubArrayLen1(arr, val) {
  let len = arr.length;
  let tempSum;
  let result = Infinity;
  let sLen = 0;

  for (let i = 0; i < len; i++) {
    tempSum = 0;
    for (let j = i; j < len; j++) {
      tempSum += arr[j];
      if (tempSum >= val) {
        sLen = j - i + 1;
        result = result < sLen ? result : sLen;
        break;
      }
    }
  }

  return result === Infinity ? 0 : result;
}

console.log(minSubArrayLen1([2, 1, 2, 2, 4, 3], 5));

// 滑动窗口, [2, 1, 2, 2, 4, 3]
function minSubArray2(arr, val) {
  let len = arr.length;
  let tempSum = 0;
  let result = Infinity;
  let sLen = 0;
  let i = 0;

  for (let j = 0; j < len; j++) {
    tempSum += arr[j];
    while (tempSum >= val) {
      sLen = j - i + 1;
      result = result < sLen ? result : sLen;
      tempSum -= arr[i++];
    }
  }

  return result === Infinity ? 0 : result;
}

console.log(minSubArray2([2, 1, 2, 2, 4, 3], 1));
