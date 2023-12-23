class MyStack {
  constructor() {
    this.queueIn = [];
    this.queueOut = [];
  }

  push(arg) {
    return this.queueIn.push(arg);
  }

  pop() {
    let size = this.queueIn.length;
    if (this.queueOut.length) return this.queueOut.shift();

    // 翻转，比如 1 2 3 4 队列是先进先出，栈是先进后出，所以这出来的应该是 4 3 2 1
    while (size > 0) {
      this.queueOut.push(this.queueIn.pop());
      size--;
    }
    
    return this.queueOut.shift();
  }

  top() {
    if (!this.queueOut.length) {
      let x = this.queueIn[this.queueIn.length - 1];
      while (this.queueIn.length) {
        this.queueOut.push(this.queueIn.pop());
      }
    }

    return this.queueOut[0];
  }

  empty() {
    return !this.queueOut.length && !this.queueIn.length;
  }
}

const stack = new MyStack();

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.top());
