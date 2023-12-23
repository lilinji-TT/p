class MaxQueue {
  constructor() {
    this.queue = [];
    this.max = [];
  }

  enqueue(arg) {
    this.queue.push(arg);
    while (this.max.length && this.max[this.max.length - 1] < arg) {
      this.max.pop();
    }
    this.max.push(arg);
  }

  dequeue() {
    if (!this.queue.length) return -1;

    const x = this.queue.shift();

    if (x === this.max[0]) {
      this.max.shift();
    }

    return x;
  }

  getMax() {
    console.log(this.max);
    return this.max.length ? this.max[0] : -1;
  }
}

// 测试
const q = new MaxQueue();
q.enqueue(4);
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.getMax()); // 输出 3
q.dequeue();
console.log(q.getMax()); // 输出 3
q.dequeue();
console.log(q.getMax()); // 输出 2
