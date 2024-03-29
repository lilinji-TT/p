/**
 * 从字面意思理解就是赛跑，以状态变化最快的那个 Promise 实例为准，
 * 最快的 Promise 成功 Promise.race 就成功，
 * 最快的 Promise 失败 Promise.race 就失败。
 */
function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(resolve, reject);
    }
  });
}
