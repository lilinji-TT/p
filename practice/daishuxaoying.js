async function getUser() {
  return await fetch("./1.json");
}

function run(func) {
  let cache = {
    status: "pending",
    value: null,
  };

  const _fetch = window.fetch;

  window.fetch = function (...args) {
    if (cache.status === "fullfilled") {
      return cache.value;
    } else if (cache.status === "rejected") {
      throw cache.value;
    }

    const _promise = _fetch(...args).then(
      (res) => {
        cache.status = "fullfilled";
        cache.value = res;
      },
      (err) => {
        cache.status = "rejected";
        cache.value = err;
      }
    );

    throw _promise;
  };

  try {
    func();
  } catch (err) {
    if (err instanceof Promise) {
      err.then(func, func).finally(() => {
        window.fetch = _fetch;
      });
    }
  }
}

async function main() {
  const res = await getUser();
  console.log(res);
}

run(main);
