function sqrt(num, precision = 16) {
  if (num === 0 || num === 1) {
    return num;
  }

  const precisionValue = Math.pow(10, -precision); // 做一个精度，比较
  let low = 0,
    high = num;

  while (high - low >= precisionValue) {
    let mid = (high + low) / 2; // 此处应该是+，low，high 逼近一个区间
    if (mid * mid === num) {
      return mid;
    } else if (mid * mid < num) {
      low = mid;
    } else {
      high = mid;
    }
  }

  // 当无法开整数平方时
  return low.toFixed(precision);
}

console.log(sqrt(9));
