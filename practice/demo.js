const arr = [1, 2, 3, 4, 5, 6];

console.log(
  arr.map((item) => {
    if (item === 3) {
      return;
    }
    return item * 2;
  })
);


const createDefaultObj = () => {
    return {
        data: [1,2,3,4]
    }
}

const res: { data } = createDefaultObj();
