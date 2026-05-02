console.log(addition(1, 2));
// console.log(arrowAddition(1, 2)); arrow functions is not hoisted

function addition(a, b) {
  return a + b;
}

const arrowAddition = (a, b) => a + b;
