class Queue {
  constructor() {
    this.stackIn = [];
    this.stackOut = [];
  }

  enqueue(arg) {
    this.stackIn.push(arg);
  }

  outqueue() {
    const size = this.stackOut.length;
    if (size) return this.stackOut.pop();
    while (this.stackIn.length) {
      this.stackOut.push(this.stackIn.pop());
    }
    return this.stackOut.pop();
  }

  isEmpty() {
    return !this.stackIn.length && !this.stackOut.length;
  }

  peek() {
    const size = this.stackOut.length;
    if (size) return this.stackOut(size - 1);
    if (!this.stackIn.length) return -1;
    while (this.stackIn.length) {
      this.stackOut.push(this.stackIn.pop());
    }

    return this.stackOut[this.stackOut.length - 1];
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.peek());
console.log(queue.outqueue());
console.log(queue.stackOut);
