// if conditional
const age = 18;

if (age >= 18) {
  console.log("You can vote!");
} else if (age >= 15) {
  console.log("Close but not old enough.");
} else {
  console.log("You can not vote yet.");
}

console.log("Program continues...");

const driverAge = 18;
const driverEduction = false;

if (driverAge >= 16 && driverEduction) {
  console.log("You can get your license");
} else if (driverAge <= 16 && driverEduction) {
  console.log("You must be at least 16");
} else if (driverAge >= 16 && !driverEduction) {
  console.log("You need to complete driver's education");
}

// ternary operator
const num = 18;
let message = num >= 18 ? "greater or equal to 18" : "less than 18";
console.log(message);

const temperature = 75;
let weather = temperature > 75 ? "hot" : "not hot";
console.log(weather);

// switch statement
const name = "Kyle";

switch (name) {
  case "Kyle":
    console.log("name is Kyle");
    break;
  case "Sally":
    console.log("name is Sally");
    break;
  default:
    console.log("name is not recognized");
}

const seasonNumber = 1;

switch (seasonNumber) {
  case 12:
  case 1:
  case 2:
    console.log("Winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Autumn");
    break;
}
