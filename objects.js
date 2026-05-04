// object creation
let person = {
  name: "Kyle",
  age: 30,
  favoriteNumber: 3,
  sayHi: function () {
    console.log("Hi");
  },
};

let book = {
  title: "The Boys",
  author: {
    firstName: "Erik",
    lastName: "Kripke",
  },
  yearPublished: 2020,
  publish() {
    console.log("Publishing your book");
  },
};

console.log(book);
console.log(person);

// accessing properties
console.log("person name:", person.name);
console.log("person age:", person.age);
console.log("person favorite number:", person.favoriteNumber);
console.log("person name:", person["name"]);
person.sayHi();

// value vs reference types
let a = 10;
let b = a;

b = b + 1;
console.log(`a: ${a}`);
console.log(`b: ${b}`);

const c = [1, 2];
const d = c;

d.push(3);
console.log(`c: ${c}`);
console.log(`d: ${d}`);
console.log(c === d);
