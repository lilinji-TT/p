function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completedPromises = 0;

    // 如果输入的数组为空，直接解决返回的Promise
    if (promises.length === 0) {
      resolve(results);
    }

    promises.forEach((promise, index) => {
      // 将所有非Promise值转换为Promise
      Promise.resolve(promise).then(
        // Promise成功解决时
        (value) => {
          results[index] = value; // 存储结果
          completedPromises += 1; // 计数已解决的Promise
          // 如果所有的Promise都已解决，解决整个Promise.all返回的Promise
          if (completedPromises === promises.length) {
            resolve(results);
          }
        },
        // Promise被拒绝时
        (reason) => {
          // 如果任何Promise被拒绝，拒绝整个Promise.all返回的Promise
          reject(reason);
        }
      );
    });
  });
}

// 测试 promiseAll 函数
let promise1 = Promise.resolve(3);
let promise2 = 42;
let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

promiseAll([promise1, promise2, promise3]).then((values) => {
  console.log(values); // [3, 42, "foo"]
});
