function MyNew(fn, ...args) {
  console.log(args); // [ 'Alice', 30 ]
  console.log(...args); // Alice 30
  const obj = {}; // 创建一个新的空对象
  obj.__proto__ = fn.prototype; // 新的空对象指向构造函数的原型

  //   const result = fn.apply(obj, args); // 使用apply改变上下文得到结果，apply接收参数数组
  const result = fn.call(obj, ...args); // 使用call改变上下文得到结果, call接收参数列表

  return result instanceof Object ? result : obj; // 判断得到的结果是否是对象，是的话返回，不是的话返回新创建的对象
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};

var person = MyNew(Person, "Alice", 30);
console.log(person.greet()); // "Hello, my name is Alice and I am 30 years old."
