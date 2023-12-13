/**
 * 提供了一个数组结构的 data，要求实现一个 query 方法，返回一个新的数组，
 * query 方法内部有 过滤、排序、分组 等操作，并且支持链式调用，
 * 调用最终的 execute 方法返回结果
 */

function query(data) {
  let tempArr = JSON.parse(JSON.stringify(data));
  let result = null;
  return {
    where(callback) {
      tempArr = tempArr.filter(callback);
      return this;
    },
    sort(field, order = "asc") {
      tempArr.sort((a, b) => {
        if (order === "asc") {
          return a[field] - b[field];
        } else {
          return b[field] - a[field];
        }
      });
      return this;
    },
    groupBy(field) {
      result = tempArr.reduce((acc, cur) => {
        if (!acc[cur[field]]) {
          acc[cur[field]] = [];
        }
        acc[cur[field]].push(cur);
        return acc;
      }, {});
      return this;
    },
    execute() {
      return result ?? tempArr;
    },
  };
}

const data = [
  {
    id: 1,
    name: "zhangsan",
    age: 97,
  },
  {
    id: 12,
    name: "wangwu",
    age: 17,
  },
  {
    id: 4,
    age: 87,
    name: "lisi",
  },
];

const res = query(data).sort("age", "desc").groupBy("name").execute();
console.log(res);
