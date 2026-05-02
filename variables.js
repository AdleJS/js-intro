let myName = "Adilet";
myName = "Askar Adilet";
console.log(myName);

const count = 1;
console.log(count);

let undedinedVar = undefined;
console.log(undedinedVar);

let nullVar = null;
console.log(nullVar);

var myVar = 1;
console.log(myVar);

// var uses function scope
function func() {
  {
    var a = 1;
  }

  console.log(a);
}

func();

// var variables are hoisted
console.log(dog);
var dog = "Black";
console.log(dog);
