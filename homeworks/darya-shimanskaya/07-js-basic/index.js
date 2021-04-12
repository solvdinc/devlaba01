// task 1 link https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
  return arr.reduce((acc, item) => (item > 0 ? acc + item : acc), 0);
}

positiveSum();

// task 2 link https://www.codewars.com/kata/5a3e1319b6486ac96f000049
function pairs(ar) {
  const result = [];
  for (let i = 0; i < ar.length; i += 2) {
    if (ar[i] + 1 === ar[i + 1] || ar[i] === ar[i + 1] + 1) result.push([ar[i], ar[i + 1]]);
  }
  return result.length;
}

pairs();

// task 3 link https://www.codewars.com/kata/5aba780a6a176b029800041c
function maxMultiple(divisor, bound) {
  return bound - (bound % divisor);
}

maxMultiple();

// task 4 link https://www.codewars.com/kata/514a6336889283a3d2000001
function getEvenNumbers(numbersArray) {
  return numbersArray.filter((item) => item % 2 === 0);
}

getEvenNumbers();

// task 5 link https://www.codewars.com/kata/5a090c4e697598d0b9000004
function solve(arr) {
  const sorted = [...arr].sort((item, nextItem) => item - nextItem);
  return arr.map((item, index) => (index % 2 === 0 ? sorted.pop() : sorted.shift()));
}

solve();

// task 6 link https://www.codewars.com/kata/566044325f8fddc1c000002c
function evenChars(string) {
  if (string.length >= 100 || string.length <= 1) return 'invalid string';
  return string.split('').filter((item, index) => index % 2 !== 0);
}

evenChars();

// task 7 link https://www.codewars.com/kata/545a4c5a61aa4c6916000755
const gimme = function (inputArray) {
  const sortedArray = inputArray.slice().sort((item, nextItem) => nextItem < item);
  return inputArray.indexOf(sortedArray[1]);
};

gimme();

// task 8 link https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = (arr) => parseInt(arr.join(''), 2);

binaryArrayToNumber();

// task 9 link https://www.codewars.com/kata/585d7d5adb20cf33cb000235
function findUniq(arr) {
  return arr.find((item) => arr.indexOf(item) === arr.lastIndexOf(item));
}

findUniq();

// task 11 link https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
function sortArray(array) {
  const oddArray = array.filter((item) => item % 2 !== 0).sort((item, nextItem) => item - nextItem);
  return array.map((item) => ((item % 2 !== 0) ? oddArray.shift() : item));
}

sortArray();
