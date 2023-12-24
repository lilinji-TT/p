// 返回最快解决的，失败了返回失败的集合
function promiseAny(promises) {
  let failedArr = [],
    count = 0;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(resolve, (err) => {
        failedArr[i] = { err: err, status: "rejected" };
        count++;
        if (count === promises.length) {
          reject(new AggregateError(failedArr, "没有promise成功"));
        }
      });
    }
  });
}
