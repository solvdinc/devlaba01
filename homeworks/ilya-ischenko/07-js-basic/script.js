// task 1 https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
  let sumArr = arr.filter((num) => num > 0);

  if (!sumArr.length) {
    return 0;
  }

  sumArr = sumArr.reduce((prev, next) => prev + next);

  return sumArr;
};
console.log(positiveSum([1, -2, 3, 4, 5]));

// task 2 https://www.codewars.com/kata/5a3e1319b6486ac96f000049
function pairs(ar) {
  let numPairs = 0;

  for (let i = 0; i < ar.length - 1; i += 2) {
    if (ar[i] + 1 === ar[i + 1] || ar[i] - 1 === ar[i + 1]) {
      numPairs += 1;
    }
  }

  return numPairs;
};
console.log(pairs([1, 2, 5, 8, -4, -3, 7, 6, 5]));