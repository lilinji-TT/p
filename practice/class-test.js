class Parent {
  constructor(props) {
    this.props = props;
  }
}

class Child extends Parent {
  static props = {
    name: "zhangsan",
    age: 18,
  };
  constructor(props) {
    super(props);
    // 试图直接使用 this
    this.props = {
      name: "lisi",
      age: 20,
    };
  }
  static foo() {
    console.log(this.props.name, this.props.age);
  }
}

// const child = new Child({ name: "zhangsan", age: 18 });

Child.foo();
