// this
console.log(this);

const person = {
  name: "Alice",
  age: 25,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet();

// classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const personVar = new Person("Kyle", 20);
personVar.greet();
