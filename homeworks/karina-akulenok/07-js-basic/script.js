// task 1 https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(positiveSum());

// task 2 https://www.codewars.com/kata/5a3e1319b6486ac96f000049
function pairs(ar) {
  let counter = 0;
  for (let i = 0; i < ar.length; i += 1) {
    const elem = ar[i];
    if (i % 2 === 0) {
      if (Math.abs(elem - ar[i + 1]) === 1) {
        counter += 1;
      }
    }
  }
  return counter;
}
console.log(pairs());

// task 3 https://www.codewars.com/kata/5aba780a6a176b029800041c
function maxMultiple(divisor, bound) {
  if (bound % divisor === 0) {
    return bound;
  }
  return bound - (bound % divisor);
}
console.log(maxMultiple());

// task 4 https://www.codewars.com/kata/514a6336889283a3d2000001
function getEvenNumbers(numbersArray) {
  return numbersArray.filter((item) => item % 2 === 0);
}
console.log(getEvenNumbers());

// task 5 https://www.codewars.com/kata/5a090c4e697598d0b9000004
function solve(arr) {
  const copyArr = arr.slice();
  arr.sort((a, b) => b - a);
  const newArr = [];
  for (let i = 0; i <= copyArr.length; i += 1) {
    newArr.push(arr.shift());
    newArr.push(arr.pop());
  }
  return newArr.filter((v) => v !== undefined);
}
console.log(solve());

// task 6 https://www.codewars.com/kata/566044325f8fddc1c000002c
function evenChars(string) {
  if ((string.length < 2) || (string.length > 100)) {
    return 'invalid string';
  }
  return [...string].filter((value, item) => (item % 2 !== 0 ? value : null));
}
console.log(evenChars());

// task 7 https://www.codewars.com/kata/545a4c5a61aa4c6916000755
const gimme = (inputArray) => [...inputArray].indexOf(inputArray.sort((a, b) => a - b)[1]);
console.log(gimme());

// task 8 https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = (arr) => parseInt(arr.join(''), 2);
console.log(binaryArrayToNumber());

// task 9 https://www.codewars.com/kata/585d7d5adb20cf33cb000235
function findUniq(arr) {
  return arr.find((value) => arr.indexOf(value) === arr.lastIndexOf(value));
}
console.log(findUniq());

// task 10 https://www.codewars.com/kata/581e014b55f2c52bb00000f8
function decipherThis(str) {
  const newStr = str.replace(/\d+/g, ((firstLetter) => String.fromCharCode(firstLetter)))
    .split(' ');
  if (newStr.length >= 2) {
    return newStr.slice(-1) + newStr.slice(1, -1) + newStr.slice(0, 1);
  }
  return newStr.join(' ');
}
console.log(decipherThis());

// task 11 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
function sortArray(array) {
  const sortedOdd = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
  return array.map((num) => ((num % 2 !== 0) ? sortedOdd.shift() : num));
}
console.log(sortArray());
