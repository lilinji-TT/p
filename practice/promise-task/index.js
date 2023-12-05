function processTasks(...tasks) {
  let isRunning = false;
  let result = [];
  let prom = null;
  let i = 0;
  return {
    start() {
      return new Promise(async (resolve, reject) => {
        if (prom) {
          prom.then(resolve, reject);
          return;
        }
        if (isRunning) {
          return;
        }
        isRunning = true;
        while (i < tasks.length) {
          try {
            console.log(i, "执行中");
            result.push(await tasks[i]());
            console.log(i, "执行完成");
          } catch (err) {
            isRunning = false;
            reject(err);
            prom = Promise.reject(err);
            return;
          }
          i++;
          if (!isRunning && i < tasks.length) {
            console.log("执行被中断");
            return;
          }
        }
        isRunning = false;
        resolve(result);
        prom = Promise.resolve(result);
      });
    },
    pause() {
      isRunning = false;
    },
  };
}
