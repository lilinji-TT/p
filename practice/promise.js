class MyPromise {
  constructor(fn) {
    this.status = "pending";
    this.result = null;
    this.onFullfilledCallback = [];
    this.onRejectedCallback = [];
    this.result = null;
    fn(this.resolve.bind(this), this.reject.bind(this));
  }

  reject(err) {
    if (this.status === "pending") {
      this.status = "rejected";
      console.log(err);
      this.result = err;
    }
  }

  resolve(res) {
    if (this.status === "pending") {
      this.status = "fullfilled";
      this.result = res;
      console.log(res);
    }
  }

  then(onFullfilled, onRejected) {
    return new MyPromise(() => {
      if (this.status === "fullfilled") {
        this.onFullfilledCallback.push(onFullfilled);
      }
    });
  }
}
