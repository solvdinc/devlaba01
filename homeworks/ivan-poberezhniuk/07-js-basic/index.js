// Codewars tasks
// Task 1 https://www.codewars.com/kata/5a3e1319b6486ac96f000049
const positiveSum = (arr) =>
  arr.reduce((acc, item) => (item > 0 ? acc + item : acc), 0);

// Task 2 https://www.codewars.com/kata/5715eaedb436cf5606000381
const pairs = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i += 2) {
    if (Math.abs(arr[i] - arr[i + 1]) === 1) {
      count += 1;
    }
  }

  return count;
};

// Task 3 https://www.codewars.com/kata/5aba780a6a176b029800041c
const maxMultiple = (divisor, bound) => {
  let N = divisor;

  while (N <= bound) {
    N += divisor;
  }
  return N - divisor;
};

// Task 4 https://www.codewars.com/kata/514a6336889283a3d2000001
const getEvenNumbers = (numbersArray) =>
  numbersArray.filter((num) => num % 2 === 0);

// Task 5 https://www.codewars.com/kata/5a090c4e697598d0b9000004
const solve = (arr) => {
  let sortedArr = arr.sort((a, b) => a - b);
  let minValues = sortedArr.slice(0, sortedArr.length / 2);
  let maxValues = sortedArr.slice(sortedArr.length / 2).reverse();
  let result = [];
  console.log(minValues, maxValues);
  for (let i = 0; i < maxValues.length; i += 1) {
    if (minValues[i]) {
      result.push(maxValues[i], minValues[i]);
    } else {
      result.push(maxValues[i]);
    }
  }
  return result;
};

// Task 6 https://www.codewars.com/kata/566044325f8fddc1c000002c
const evenChars = (string) => {
  let stringLength = string.length;

  if (stringLength < 2 || stringLength > 100) {
    return 'invalid string';
  }

  return [...string].filter((char, index) => index % 2 !== 0);
};
// Task 7 https://www.codewars.com/kata/545a4c5a61aa4c6916000755

let gimme = (inputArr) => {
  const sortedArr = [...inputArr].sort((a, b) => a - b);
  const midNum = sortedArr[Math.floor(sortedArr.length / 2)];
  const index = inputArr.indexOf(midNum);

  return index;
};

// Task 8 https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = (arr) => parseInt(arr.join(''), 2);

// Task 9 https://www.codewars.com/kata/585d7d5adb20cf33cb000235
const findUniq = (arr) =>
  arr.find((item, index, arr) => arr.indexOf(item) === arr.lastIndexOf(item));

// Task 10 https://www.codewars.com/kata/581e014b55f2c52bb00000f8

// Task 11 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

// Optional (advanced)
// Task 1 https://www.codewars.com/kata/515bb423de843ea99400000a
// Task 2 https://www.codewars.com/kata/52597aa56021e91c93000cb0
// Task 3 https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3
// Task 4 https://www.codewars.com/kata/5296bc77afba8baa690002d7
