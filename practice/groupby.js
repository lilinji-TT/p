// 参数转化为相同的形式，思考如何将函数封装的更加通用
// for in 是枚举对象的可枚举数据，会涉及到原型上
// for of 是遍历可迭代对象 ，比如数组
// 参数归一化，将参数转化为相同的形式

function groupby(data, key) {
  let generatekey;
  let result = {};
  if (typeof key === "string") {
    generatekey = (item) => item[key];
  } else {
    generatekey = key;
  }

  for (const item of data) {
    const key = generatekey(item);
    if (result[key] !== undefined) {
      result[key].push(item);
    } else {
      result[key] = [item];
    }
  }

  return result;
}

const data = [
  {
    age: 18,
    name: "zhangsan",
    sex: "male",
  },
  {
    age: 19,
    name: "lisi",
    sex: "female",
  },
];

console.log(groupby(data, "name"));

console.log(groupby(data, (item) => item.age));
