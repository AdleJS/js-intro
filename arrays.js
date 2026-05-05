// array creation
const names = ["Kyle", "Sally"];
const mixedArray = [1, 3.4, false, null, "Adilet", [1, 2, 3]];
const alphabet = ["A", "B", "C", "D", "E"];
console.log(alphabet[2]);
console.log(mixedArray);
console.log(names);
console.log(names.length);

// indexing arrays
console.log(names[0]);
console.log(names[1]);

// modifiying arrays
names.push("John");
console.log(names);

// short circuiting
const paramOne = false;
const paramTwo = true;

const result = paramOne && paramTwo;
console.log(result);

const anotherResult = paramTwo || console.log("hello");
console.log(anotherResult);

// optional chaining
const user = {
  profile: {
    settings: {
      theme: "dark",
    },
  },
};

const myTheme = user?.profile?.settings?.theme;

// null-coalescing
let message;
let greeting = message ?? "hello";
console.log(greeting);

// foreach
const nums = [1, 2, 3, 4, 5];

nums.forEach((num) => {
  console.log(num * 2);
});

const doubled = nums.map((num) => {
  return num * 4;
});

console.log(doubled);

const smallNumbers = nums.filter((num) => {
  return num < 2;
});

console.log(smallNumbers);

const addition = nums.reduce((num, accumulator) => {
  return num + accumulator;
}, 0);

console.log(addition);
