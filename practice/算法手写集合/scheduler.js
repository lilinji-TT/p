class Scheduler {
  constructor(maxCount = 2) {
    this.taskQueue = [];
    this.maxCount = maxCount;
    this.runningTaskCount = 0;
  }

  add(task) {
    return new Promise((resolve, reject) => {
      this.taskQueue.push({
        reject,
        resolve,
        task,
      });
      this.run();
    });
  }

  run() {
    while (this.runningTaskCount < this.maxCount && this.taskQueue.length) {
      const { resolve, reject, task } = this.taskQueue.shift();
      // 任务开始，当前正在running的数量 +1
      this.runningTaskCount++;
      // 任务开始执行
      task()
        .then(resolve, reject)
        .finally(() => {
          // 任务执行结束，当前正在running的数量 -1
          this.runningTaskCount--;
          // 执行下一个任务
          this.run();
        });
    }
  }
}

const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const scheduler = new Scheduler(3);
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order));
};

addTask(2000, "1");
addTask(2000, "2");
addTask(2000, "3");
addTask(2000, "4");
addTask(2000, "5");
addTask(2000, "6");
addTask(2000, "7");
addTask(2000, "8");
addTask(2000, "9");
addTask(2000, "10");
