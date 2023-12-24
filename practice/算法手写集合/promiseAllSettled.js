function promiseAllSettled(promises) {
  let result = [],
    count = 0;
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve(result);
    }

    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then(
          (res) => {
            result[i] = { status: "fulfilled", value: res };
          },
          (err) => {
            result[i] = { status: "rejected", reason: err };
          }
        )
        .finally(() => {
          if (count === promises.length) {
            resolve(result);
          }
        });
    }
  });
}
