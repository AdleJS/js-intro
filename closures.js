let a = 1;

function print() {
  console.log(a);
}

a = 2;
print();

function outer(a) {
  function inner(b) {
    console.log(a);
    console.log(b);
  }

  return inner;
}

const newFunc = outer(1);
newFunc(2);

function createGreeter(greeting) {
  function greet(name) {
    return greeting + ", " + name;
  }

  return greet;
}

const greetMe = createGreeter("Hello");
let result = greetMe("Adilet");
console.log(result);
