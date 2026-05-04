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
