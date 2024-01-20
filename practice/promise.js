class MyPromise {
  constructor(fn) {
    this.status = "pending";
    this.result = null;
    this.onFullfilledCallback = [];
    this.onRejectedCallback = [];

    try {
      fn(this.resolve.bind(this), this.reject.bind(this));
    } catch (err) {
      this.reject(err);
    }
  }

  reject(reason) {
    if (this.status === "pending") {
      this.status = "rejected";
      this.result = reason;
      this.onRejectedCallback.forEach((cb) => {
        cb(reason);
      });
    }
  }

  resolve(res) {
    if (this.status === "pending") {
      this.status = "fullfilled";
      this.result = res;
      this.onFullfilledCallback.forEach((cb) => {
        cb(res);
      });
    }
  }

  then(onFullfilled, onRejected) {
    const promise = new MyPromise((resolve, reject) => {
      if (this.status === "fullfilled") {
        setTimeout(() => {
          try {
            if (typeof onFullfilled !== "function") {
              resolve(this.result);
            } else {
              const x = onFullfilled(this.result);
              resolvePromise(promise, x, resolve, reject);
            }
          } catch (e) {
            reject(e);
          }
        });
      } else if (this.status === "rejected") {
        setTimeout(() => {
          try {
            if (typeof onRejected !== "function") {
              reject(this.result);
            } else {
              const x = onRejected(this.result);
              resolvePromise(promise, x, resolve, reject);
            }
          } catch (error) {
            reject(error);
          }
        });
      } else {
        this.onFullfilledCallback.push(() => {
          setTimeout(() => {
            try {
              if (typeof onFullfilled !== "function") {
                resolve(this.PromiseResult);
              } else {
                let x = onFullfilled(this.result);
                resolvePromise(promise, x, resolve, reject);
              }
            } catch (e) {
              reject(e);
            }
          });
        });

        this.onRejectedCallback.push(() => {
          setTimeout(() => {
            try {
              if (typeof onRejected !== "function") {
                resolve(this.PromiseResult);
              } else {
                let x = onRejected(this.result);
                resolvePromise(promise, x, resolve, reject);
              }
            } catch (e) {
              reject(e);
            }
          });
        });
      }
    });

    return promise;
  }
}

function resolvePromise(promise, x, resolve, reject) {
  if (x === promise) {
    throw new TypeError("Chaining cycle detected for promise");
  }

  if (x instanceof MyPromise) {
    x.then((res) => {
      resolvePromise(promise, res, resolve, reject);
    }, reject);
  } else if (x !== null && (typeof x === "object" || typeof x === "function")) {
    let then = null;
    try {
      then = x.then;
    } catch (e) {
      reject(e);
    }

    if (typeof then === "function") {
      let called = false;
      try {
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            resolvePromise(promise, y, resolve, reject);
          },
          (r) => {
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } catch (error) {
        if (called) return;
        called = true;
        reject(error);
      }
    } else {
      resolve(x);
    }
  } else {
    return resolve(x);
  }
}

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello World");
  }, 1000);
});

promise.then((res) => {
  console.log(res);
});
