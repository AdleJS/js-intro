// explicit type coercion
const myVar = "1";
console.log(typeof myVar);

const convertedVar = parseInt(myVar);
console.log(typeof convertedVar);

// implicit type coercion
const paramOne = 1;
const paramTwo = "3";
console.log(paramOne + paramTwo);
console.log(paramOne - paramTwo);
console.log(paramOne * paramTwo);

// NaN
const result = parseInt("hello");
console.log(result, "type:", typeof result);
console.log(NaN === NaN);
console.log(isNaN(isNaN));
