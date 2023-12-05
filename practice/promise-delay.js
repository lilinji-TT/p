function delay(time) {
  // 微任务没有被延迟执行resolve，阻塞了
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

async function run() {
  console.log("start");
  await delay(3000);
  console.log("end");
}

run();
