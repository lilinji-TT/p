class MyEventEmitter {
  constructor() {
    this.events = {};
  }

  //注册事件和回调函数
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  //触发事件
  emit(eventName, ...args) {
    if (!this.events[eventName]) {
      throw new Error(`Can't emit an event that doesn't exist`);
    }
    this.events[eventName].forEach((callback) => {
      callback(...args);
    });
  }

  //删除事件
  off(eventName, callback) {
    this.events[eventName] = this.events[eventName].filter(
      (cb) => cb !== callback
    );
  }

  //只执行一次的事件
  once(eventName, callback) {
    const func = (...args) => {
      this.off(eventName, func);
      callback(...args);
    };
    this.on(eventName, func);
  }
}

const e = new MyEventEmitter();

e.on("test", (a, b) => {
  console.log("test1", a, b);
});
e.on("test", (a, b) => {
  console.log("test2", a, b);
});

const testFn = (a, b) => {
  console.log("test3", a, b);
};

e.on("test", testFn);
e.off("test", testFn);

e.once("test", testFn);
