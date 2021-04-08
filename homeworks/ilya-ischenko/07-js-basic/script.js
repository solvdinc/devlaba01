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