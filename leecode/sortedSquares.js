function sortedSquares(arr) {
  const len = arr.length - 1;
  let k = len;
  let newArray = new Array(len);
  for (let i = 0, j = len; i <= j; ) {
    if (arr[i] * arr[i] > arr[j] * arr[j]) {
      newArray[k--] = arr[i] * arr[i];
      i++;
    } else {
      newArray[k--] = arr[j] * arr[j];
      j--;
    }
  }

  return newArray;
}


console.log(sortedSquares([-4,-1,0,2,3,10]))