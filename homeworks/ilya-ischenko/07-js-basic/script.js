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

  for (let i = 0; i < ar.length; i += 2) {
    if (ar[i] + 1 === ar[i + 1] || ar[i] - 1 === ar[i + 1]) {
      numPairs += 1;
    }
  }

  return numPairs;
};
console.log(pairs([1, 2, 5, 8, -4, -3, 7, 6, 5]));

// task 3 https://www.codewars.com/kata/5aba780a6a176b029800041c
function maxMultiple(divisor, bound) {
  return Math.floor(bound / divisor) * divisor;
};
console.log(maxMultiple(2, 7));

// task 4 https://www.codewars.com/kata/514a6336889283a3d2000001
function getEvenNumbers(numbersArray) {
  return numbersArray.filter((num) => num % 2 === 0);
};
console.log(getEvenNumbers([1, 2, 3, 4, 5]));

// task 5 https://www.codewars.com/kata/5a090c4e697598d0b9000004/train/javascript
function solve(arr) {
  const numArr = [...arr];
  const resultArr = [];
  let max;
  let min;

  while (numArr.length) {
    max = Math.max.apply(null, numArr);
    min = Math.min.apply(null, numArr);

    if (numArr.length) {
      resultArr.push(max);
      numArr.splice(numArr.indexOf(max), 1);
    }

    if (numArr.length) {
      resultArr.push(min);
      numArr.splice(numArr.indexOf(min), 1);
    }
  }
  return resultArr;
};
console.log(solve([15, 11, 10, 7, 12]));

// task 6 https://www.codewars.com/kata/566044325f8fddc1c000002c/train/javascript
function evenChars(string) {
  if (string.length > 100 || string.length < 2) {
    return 'invalid string';
  }

  const str = string.split('');

  return str.filter((item, index) => index % 2 === 1);
}
console.log(evenChars('abcdefghijklm'));

// task 7 https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript
function gimme(inputArray) {
  const numbers = [...inputArray].sort((a, b) => a - b);
  return inputArray.indexOf(numbers[1]);
};
console.log(gimme([2, 3, 1]));

// task 8 https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript
function binaryArrayToNumber(arr) {
  return parseInt(Number(arr.join('')), 2);
};
console.log(binaryArrayToNumber([0, 0, 0, 1]));

// task 9 https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
function findUniq(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      return arr[i];
    }
  }
  return 0;
};
console.log(findUniq([0, 1, 0]));

// task 10 https://www.codewars.com/kata/581e014b55f2c52bb00000f8
function decipherThis(str) {
  const arr = str.split(' ');
  let word;
  let charCode;
  let letter;
  let temp;

  for (let i = 0; i < arr.length; i += 1) {
    word = arr[i];
    charCode = Number(word.match(/\d/g).join(''));
    word = word.replace(/\d/g, '').split('');
    letter = String.fromCharCode(charCode);

    temp = word[word.length - 1];
    word[word.length - 1] = word[0];
    word[0] = temp;
    word.unshift(letter);

    arr[i] = word.join('');
  };

  return arr.join(' ');
}; 
console.log(decipherThis('72olle 103doo 100ya'));

// 11 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
function sortArray(array) {
  const nums = [...array];
  let min;
  let temp;

  for (let i = 0; i < nums.length - 1; i += 1) {
    if (Math.abs(nums[i]) % 2 === 1) {
      min = i;
      for (let j = i + 1; j < nums.length; j += 1) {
        if (nums[j] < nums[i] && Math.abs(nums[j]) % 2 === 1) {
          temp = nums[min];
          nums[min] = nums[j];
          nums[j] = temp;
        }
      }
    }
  }
  return nums;
};
console.log(sortArray([5, 3, 2, 8, 1, 4]));