function compareVersion(version1, version2) {
  // 得到字符数组
  const arr1 = version1.split(".");
  const arr2 = version2.split(".");

  const MaxLen = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < MaxLen; i++) {
    // 判断是否超出边界，超出了就直接默认0
    const n1 = i > arr1.length - 1 ? 0 : parseInt(arr1[i]);
    const n2 = i > arr2.length - 1 ? 0 : parseInt(arr2[i]);

    if (n1 > n2) {
      return 1;
    } else if (n1 < n2) {
      return -1;
    }
  }

  return 0;
}

const versions = ["1.2.1", "1.0.2", "1.3.2", "1.1", "1.2", "1", "1.10.0"];

// 升序
versions.sort(compareVersion);
console.log(versions);

// 降序
versions.sort((a, b) => compareVersion(b, a));
console.log(versions);
