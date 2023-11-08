class MyPromise {
  constructor(fn) {
    this.status = "pending";
    this.onFullfilledCallback = [];
    this.onRejectedCallback = [];
    fn(this.resolve.bind(this), this.reject.bind(this));
  }

  reject(err) {
    if (this.status === "pending") {
      this.status = "rejected";
      console.log(err);
    }
  }

  resolve(res) {
    if (this.status === "pending") {
      this.status = "fullfilled";
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
