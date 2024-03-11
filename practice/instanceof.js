function MyInstanceof(target, instance) {
  if (target === null || typeof target !== "object") {
    // 注意不能用于基本类型的检查，如字符串、数字等，直接false。
    return false;
  }

  while (target.__proto__) {
    if (target === instance.prototype) {
      return true;
    }
    target = target.__proto__;
  }

  return false;
}

function Person(name, age) {
  this.age = age;
  this.name = name;
}

const p = new Person(1, Number);

console.log(MyInstanceof(p, Person));
