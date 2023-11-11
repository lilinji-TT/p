class Dep {
  constructor() {
    this.subs = [];
  }

  addSub(sub) {
    console.log("这里收集依赖了");
    this.subs.push(sub);
  }

  notfiy() {
    console.log("这里通知更新了");
    this.subs.forEach((sub) => sub.update());
  }
}

class Watcher {
  constructor() {
    Dep.target = this;
  }

  update() {
    console.log("updated");
  }
}

Dep.target = null;
function cb(val) {
  console.log(val);
}

function defineReactive(obj, key, value) {
  const dep = new Dep();

  Object.defineProperty(obj, key, {
    enumerable: true, // 可枚举
    configurable: true, // 可修改、可删除
    get: function () {
      console.log("这里读取数据了");
      dep.addSub(Dep.target);
      return value;
    },
    set: function (newVal) {
      if (newVal === value) return;
      console.log("这里修改数据了");
      dep.notfiy();
    },
  });
}

// 观测者
function observer(value) {
  if (!value || typeof value !== "object") {
    return;
  }

  Object.keys(value).forEach(function (key) {
    defineReactive(value, key, value[key]);
  });
}

class Vue {
  constructor(options) {
    this._data = options.data;
    observer(this._data);

    new Watcher();
  }
}

const vm = new Vue({
  data: {
    test: "this is test text",
  },
});
console.log(vm._data.test);
vm._data.test = "this is test text 2";
