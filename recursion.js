function printNumbers(number) {
  if (number > 10) {
    return;
  }

  console.log(number);
  printNumbers(number + 1);
}

printNumbers(1);

const data = [1, [2, 3], [4, [5, 6]], 7];

function findMaximum(data) {
  let max = -Infinity;
  for (let seq of data) {
    if (Array.isArray(seq)) {
      let subMax = findMaximum(seq);
      max = Math.max(max, subMax);
    } else {
      max = Math.max(max, seq);
    }
  }

  return max;
}

console.log(findMaximum(data));
