/* eslint-disable no-unused-vars */
// 1 https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > 0) {
      total += arr[i];
    }
  }
  return total;
}

// 2 https://www.codewars.com/kata/5a3e1319b6486ac96f000049
function pairs(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (i % 2 !== 0 && Math.abs(arr[i] - arr[i - 1]) === 1) {
      count += 1;
    }
  }

  return count;
}

// 3 https://www.codewars.com/kata/5aba780a6a176b029800041c
function maxMultiple(divisor, bound) {
  return bound - (bound % divisor);
}

// 4 https://www.codewars.com/kata/514a6336889283a3d2000001
function getEvenNumbers(numbersArray) {
  return numbersArray.filter((x) => x % 2 === 0);
}

// 5 https://www.codewars.com/kata/5a090c4e697598d0b9000004
function solve(arr) {
  const res = [];
  arr.sort((a, b) => a - b);

  while (arr.length > 0) {
    res.push(arr.pop());
    res.push(arr.shift());
  }
  return res.filter((e) => e);
}

// 6 https://www.codewars.com/kata/566044325f8fddc1c000002c
function evenChars(string) {
  const res = [];
  if (string.length < 2 || string.length > 100) {
    return 'invalid string';
  }
  string.split('').forEach((el, i) => {
    if ((i + 1) % 2 === 0) {
      res.push(el);
    }
  });
  return res;
}

// 7 https://www.codewars.com/kata/545a4c5a61aa4c6916000755
const gimme = (inputArray) => {
  const element = inputArray.slice().sort((a, b) => a - b)[1];
  return inputArray.indexOf(element);
};

// 8 https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = (arr) => parseInt(arr.join(''), 2);

// 9 https://www.codewars.com/kata/585d7d5adb20cf33cb000235
function findUniq(arr) {
  return arr.find((n) => arr.indexOf(n) === arr.lastIndexOf(n));
}

// 10 https://www.codewars.com/kata/581e014b55f2c52bb00000f8
function decipherThis(str) {
  return str
    .replace(/(\d)+/gi, (i) => String.fromCharCode(i))
    .replace(/\b(\w)(\w)(\w*)(\w)\b/gi, '$1$4$3$2');
}

// 11 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
function sortArray(array) {
  const odd = array.filter((el) => el % 2).sort((a, b) => a - b);
  return array.map((el) => (el % 2 ? odd.shift() : el));
}

// OPTIONAL:
// 2 https://www.codewars.com/kata/52597aa56021e91c93000cb0
const moveZeros = (arr) => [
  ...arr.filter((el) => el !== 0),
  ...arr.filter((el) => el === 0),
];

// 3 https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3
// find unique
function Uniq(arr) {
  const newArr = arr.map((a) => [...new Set(a.toLowerCase())].sort().join(''));
  for (let i = 0; i < newArr.length; i += 1) {
    if (newArr.indexOf(newArr[i]) === newArr.lastIndexOf(newArr[i])) {
      return arr[i];
    }
  }
}
