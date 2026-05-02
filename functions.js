// calling functions
console.log("Hello");

// creating function
function printName() {
  console.log("Askar Adilet");
}

printName();

function printSpecificName(name) {
  console.log("Hello", name);
}

printSpecificName("Adilet");

function addition(firstNum, secondNum) {
  return firstNum + secondNum;
}

let result = addition(1, 2);
console.log("result:", result);
console.log(addition);

function callFunction(func) {
  console.log("before");
  func("Kyle");
  console.log("after");
}

callFunction(printName);

function sumCallback(a, b, callback) {
  let sum = a + b;
  callback(sum);
}

function handleAddition(sum) {
  console.log(sum);
}

sumCallback(1, 2, handleAddition);

function greet(name) {
  return "Hello, " + name;
}

function greetPerson(firstName, lastName, callback) {
  let fullName = firstName + " " + lastName;
  return greet(fullName);
}

const greeting = greetPerson("Adilet", "Askar", greet);
console.log(greeting);

// arrow functions
const sumArrow = (a, b) => a + b;
console.log(sumArrow(3, 6));

const printNameShort = (name) => console.log(name);
printNameShort("Adle");
