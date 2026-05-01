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
