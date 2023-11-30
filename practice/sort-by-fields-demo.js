const table = [
    { name: 'zhangsan', age: 'lisi' },
    // ... 更多对象
  ];
  
  const fields = ['age', 'name'];

  const column = [
    {
        prop: '',
        label: '',
        ...fields[0]
    }
  ]
  
  const keys = Object.keys(table[0])
  const columns = fields.map(field => keys.find(key => key === field));
  console.log(columns); // ['age', 'name']
  