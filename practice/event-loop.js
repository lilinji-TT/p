async function fn1() {
  console.log("1");
  await fn2();
  console.log("4");
}

async function fn2() {
  console.log("2");
  await fn3();
}

async function fn3() {
  console.log("3");
}

fn1();
