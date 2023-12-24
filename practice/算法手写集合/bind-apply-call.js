// call 方法的参数：对象，多个参数
Function.prototype.call = function (context, ...args) {
  if (typeof this !== "function") return new TypeError("error");
  // 确保不为空
  context = context || window;
  const fn = Symbol("_this");
  context[fn] = this;
  const res = context[fn](...args);
  delete context[fn];
  return res;
};

// apply方法的参数：对象，一个参数数组
Function.prototype.apply = (context, args) => {
  if (typeof this !== "function") {
    return new TypeError("error");
  }
  context = context || window;
  const fn = Symbol("_this");
  context[fn] = this;
  const res = context[fn](...args);
  delete context[fn];
  return res;
};

// bind 是会返回一个函数,考虑到可能多次调用，那么就不进行删除
Function.prototype.bind = function (target, ...outArgs) {
  if (typeof this !== "function") {
    return new TypeError("error");
  }
  target = target || window;
  const fn = Symbol("_this");
  target[fn] = this;
  return function (...moreArgs) {
    const res = target[fn](...outArgs, ...moreArgs);
    return res;
  };
};
