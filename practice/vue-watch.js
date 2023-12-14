const count = {
  value: 1,
};

const deps = new Set();
const cache = new Map();
const proxy = new Proxy(count, {
  get(target, key) {
    const deps = cache.get(target);
    if (!deps) {
      cache.set(target, deps);
    }
    return Reflect.get(target, key);
  },

  set(target, key, value) {
    const deps = cache.get(target[key]);
    cache.set(value, deps);

    for (const fn of deps) {
      fn(value, target[key]);
    }
    Reflect.set(target, key, value);
    return true;
  },
});

function watch(proxy, callback) {
  cache.set(proxy, new Set());
  const deps = cache.get(proxy);
  deps.add(callback);
}

watch(proxy.value, (newValue, oldValue) => {
  console.log("监听的值被改变了", newValue, oldValue);
});

proxy.value = 2;
proxy.value = 4;
proxy.value = 3;
proxy.value = 1;

