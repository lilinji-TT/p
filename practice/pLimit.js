const pLimit = (concurrency) => {
  if (
    !(
      (Number.isInteger(concurrency) || concurrency === Infinity) &&
      concurrency > 0
    )
  ) {
    throw new TypeError("Expected `concurrency` to be a number from 1 and up");
  }

  const queue = [];
  let activeCount = 0;

  const next = () => {
    activeCount--;

    if (queue.length > 0) {
      queue.shift()();
    }
  };

  const run = async (fn, resolve, ...args) => {
    activeCount++;

    const result = (async () => fn(...args))();

    resolve(result);

    try {
      await result;
    } catch {}

    next();
  };

  const enqueue = (fn, resolve, ...args) => {
    queue.push(run.bind(null, fn, resolve, ...args));

    (async () => {
      // 保证更精确的控制并发，确保前面的微任务完成后拿到最新的activeCount的值
      // 如果不加await这步的操作，可能会发生并发不是我们期望的情况
      await Promise.resolve();

      if (activeCount < concurrency && queue.length > 0) {
        queue.shift()();
      }
    })();
  };

  const generator = (fn, ...args) =>
    new Promise((resolve) => {
      enqueue(fn, resolve, ...args);
    });

  Object.defineProperties(generator, {
    activeCount: {
      get: () => activeCount,
    },
    pendingCount: {
      get: () => queue.length,
    },
    clearQueue: {
      value: () => {
        queue.length = 0;
      },
    },
  });

  return generator;
};

const limit = pLimit(2);

function asyncFun(value, delay) {
  return new Promise((resolve) => {
    console.log("start " + value);
    setTimeout(() => resolve(value), delay);
  });
}

(async function () {
  const arr = [
    limit(() => asyncFun("aaa", 10000)),
    limit(() => asyncFun("bbb", 1000)),
    limit(() => asyncFun("ccc1", 1000)),
    limit(() => asyncFun("ccc2", 1000)),
    limit(() => asyncFun("ccc3", 1000)),
  ];

  const result = await Promise.all(arr);
  console.log(result);
})();
