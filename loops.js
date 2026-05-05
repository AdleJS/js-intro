// for loops
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

const fruits = ["apple", "banana", "orange", "grape"];
const prices = {
  apple: 1,
  banana: 2,
  orange: 4,
};

for (let fruit of fruits) {
  console.log(fruit);
}

for (let fruit in prices) {
  console.log(fruit);
}

for (let i = 0; i <= 10; i++) {
  if (i == 3) {
    continue;
  }

  if (i == 10) {
    break;
  }

  console.log(i);
}

// while loops
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}

// do-while loops
do {
  console.log("always executed");
} while (i < 5);
{
  console.log(i);
  i++;
}
