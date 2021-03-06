/* eslint-disable no-unused-vars */
// Codewars tasks
// Task 1 https://www.codewars.com/kata/5a3e1319b6486ac96f000049
const positiveSum = (arr) => arr.reduce((acc, item) => (item > 0 ? acc + item : acc), 0);

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
const getEvenNumbers = (numbersArray) => numbersArray.filter((num) => num % 2 === 0);

// Task 5 https://www.codewars.com/kata/5a090c4e697598d0b9000004
const solve = (arr) => {
  const sortedArr = arr.sort((a, b) => a - b);
  const minValues = sortedArr.slice(0, sortedArr.length / 2);
  const maxValues = sortedArr.slice(sortedArr.length / 2).reverse();
  const result = [];

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
  const stringLength = string.length;

  if (stringLength < 2 || stringLength > 100) {
    return 'invalid string';
  }

  return [...string].filter((char, index) => index % 2 !== 0);
};

// Task 7 https://www.codewars.com/kata/545a4c5a61aa4c6916000755
const gimme = (inputArr) => {
  const sortedArr = [...inputArr].sort((a, b) => a - b);
  const midNum = sortedArr[Math.floor(sortedArr.length / 2)];
  const index = inputArr.indexOf(midNum);

  return index;
};

// Task 8 https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = (arr) => parseInt(arr.join(''), 2);

// Task 9 https://www.codewars.com/kata/585d7d5adb20cf33cb000235
const findUniq = (arr) =>
  arr.find((item, currentArr) => currentArr.indexOf(item) === currentArr.lastIndexOf(item));

// Task 10 https://www.codewars.com/kata/581e014b55f2c52bb00000f8
const decipherThis = (str) => {
  const splittedStr = str.split(' ');
  const descriptedString = splittedStr.map((word) => {
    const char = String.fromCharCode(parseInt(word, 10));
    const regex = /^[0-9]{2,}/g;
    let secondChar = null;
    let lastChar = null;
    let result = '';

    result = word.replace(regex, char);
    result = [...result];
    secondChar = result.slice(1, 2).join();
    lastChar = result.slice(-1).join();
    result[1] = lastChar;
    result[result.length - 1] = secondChar;

    return result.join('');
  });

  return descriptedString.join(' ');
};

// Task 11 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
const sortArray = (array) => {
  const odd = array.filter((num) => num % 2).sort((a, b) => b - a);
  let result = array.map((num) => (num % 2 ? null : num));

  result = result.map((num) => {
    if (num === null) {
      const oddNum = odd[odd.length - 1];
      odd.pop();
      return oddNum;
    }
    return num;
  });

  return result;
};

// Optional (advanced)

// Task 1 https://www.codewars.com/kata/515bb423de843ea99400000a
// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
  this.pages = Math.ceil(this.collection.length / this.itemsPerPage);
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
  return this.collection.length;
};

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
  return this.pages;
};

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  if (pageIndex > this.pages - 1 || pageIndex < 0) return -1;
  if (pageIndex === 0) return this.collection.slice(0, this.itemsPerPage);
  const from = this.itemsPerPage * pageIndex;
  const to = this.itemsPerPage * (pageIndex + 1);

  return this.collection.slice(from, to).length;
};

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
  if (itemIndex > this.collection.length - 1 || itemIndex < 0) return -1;
  if (itemIndex < this.itemsPerPage) return 0;

  return Math.ceil(this.collection.length / itemIndex);
};

// Task 2 https://www.codewars.com/kata/52597aa56021e91c93000cb0
const moveZeros = (arr) => {
  const result = arr.filter((num) => num !== 0);
  const amountOfZeroes = arr.length - result.length;

  for (let i = 0; i < amountOfZeroes; i += 1) {
    result.push(0);
  }
  return result;
};

// Task 3 https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3
const findUniq = (arr) => {
  const result = arr
    .map((str) => str.toLowerCase().split('').sort().join('').replace(/^\s+/, '*'))
    .sort();
  for (let i = 0; i < result.length; i += 1) {
    for (let k = 0; k < result.length; k += 1) {
      if (result[k].includes(result[i])) {
        continue;
      }
      return arr.find(
        (str) => str.toLowerCase().split('').sort().join('').replace(/^\s+/, '*') === result[k]
      );
    }
  }
};

// Task 4 https://www.codewars.com/kata/5296bc77afba8baa690002d7
