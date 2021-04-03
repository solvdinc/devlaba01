// task 1 link http://www.codewars.com/kata/opposite-number
function solution1() {
  function opposite(number) {
    return -number;
  }
  opposite(1);
}

// task 2 link http://www.codewars.com/kata/basic-mathematical-operations
function solution2() {
  function basicOp(operation, value1, value2) {
    switch (operation) {
      case '+':
        return value1 + value2;
      case '-':
        return value1 - value2;
      case '*':
        return value1 * value2;
      default:
        return value1 / value2;
    }
  }

  console.log(basicOp('+', 1, 2));
}

// task 3 link http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
function solution3() {
  function printArray(array) {
    return array.join(',');
  }

  printArray(['h', 'o', 'l', 'a']);
}

// task 4 link http://www.codewars.com/kata/transportation-on-vacation
function solution4() {
  function rentalCarCost(d) {
    const CAR_RENT = 40;

    switch (true) {
      case d >= 7:
        return CAR_RENT * d - 50;
      case d >= 3:
        return CAR_RENT * d - 20;
      default:
        return CAR_RENT * d;
    }
  }

  rentalCarCost(12);
}

// task 5 link http://www.codewars.com/kata/calculating-with-functions
function solution5() {
  const operation = (digit) => (operand) => (typeof operand === 'function' ? operand(digit) : digit);

  const zero = operation(0);
  const one = operation(1);
  const two = operation(2);
  const three = operation(3);
  const four = operation(4);
  const five = operation(5);
  const six = operation(6);
  const seven = operation(7);
  const eight = operation(8);
  const nine = operation(9);

  const plus = (rightDig) => (leftDig) => leftDig + rightDig;
  const minus = (rightDig) => (leftDig) => leftDig - rightDig;
  const times = (rightDig) => (leftDig) => leftDig * rightDig;
  const dividedBy = (rightDig) => (leftDig) => Math.floor(leftDig / rightDig);
}

// task 6 link http://www.codewars.com/kata/get-the-middle-character
function solution6() {
  function getMiddle(s) {
    const mid = Math.ceil(s.length / 2 - 1);
    return s.slice(mid, s.length % 2 === 0 ? mid + 2 : mid + 1);
  }
  getMiddle('middle');
}

// task 7 link http://www.codewars.com/kata/partition-on
function solution7() {
  function partitionOn(pred, items) {
    const falseArr = items.filter((el) => !pred(el));
    const trueArr = items.filter((el) => pred(el));

    const arr = [...falseArr, ...trueArr];

    arr.map((el, i) => (items[i] = el));

    return falseArr.length;
  }
  partitionOn();
}

// task 8 link http://www.codewars.com/kata/word-count
function solution8() {
  function countWords(str) {
    return str === ''
      ? 0
      : str.split(/\s+/).filter((el) => el.match(/[A-Za-z0-9]/)).length;
  }
  countWords('Hello, World!');
}

// task 9 link https://www.codewars.com/kata/find-the-odd-int/
function solution9() {
  function findOdd(arr) {
    for (let i = 0; i < arr.length; i += 1) {
      let count = 0;

      for (let j = 0; j < arr.length; j += 1) {
        if (arr[i] === arr[j]) {
          count += 1;
        }
      }

      if (count % 2 !== 0) {
        return arr[i];
      }
    }
  }
  findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]);
}

// task 10 link https://www.codewars.com/kata/find-the-parity-outlier
function solution10() {
  function findOutlier(integers) {
    const arr1 = integers.filter((el) => +el % 2 === 0);
    const arr2 = integers.filter((el) => +el & 1);
    return arr1.length > arr2.length ? arr2[0] : arr1[0];
  }
  findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);
}

// task 11 link https://www.codewars.com/kata/zipwith
function solution11() {
  function zipWith(fn, a0, a1) {
    const res = [];
    const minLength = a0.length < a1.length ? a0.length : a1.length;
    for (let i = 0; i < minLength; i += 1) {
      res.push(fn(a0[i], a1[i]));
    }
    return res;
  }
  zipWith();
}

// task 12 link https://www.codewars.com/kata/filter-the-number
function solution12() {
  const FilterString = (value) => +value
    .split('')
  // eslint-disable-next-line no-restricted-globals
    .filter((el) => !isNaN(el))
    .join('');

  FilterString('a1b2c3');
}

// task 13 link https://www.codewars.com/kata/n-th-fibonacci
function solution13() {
  function nthFibo(n) {
    if (n <= 2) {
      return n - 1;
    }
    // use recursion
    return nthFibo(n - 1) + nthFibo(n - 2);
  }

  nthFibo(4);
}

// task 14 link https://www.codewars.com/kata/cat-and-mouse-2d-version/
function solution14() {
  function catMouse(map, moves) {
    const arrMap = map.split('\n');

    const catLocation = arrMap.map((el) => el.indexOf('C'));
    const mouseLocation = arrMap.map((el) => el.indexOf('m'));

    const catIndex = catLocation.findIndex((el) => el >= 0);
    const mouseIndex = mouseLocation.findIndex((el) => el >= 0);

    const catValue = catLocation[catIndex];
    const mouseValue = mouseLocation[mouseIndex];

    const stepsForMouse = Math.abs(mouseValue - catValue) + Math.abs(catIndex - mouseIndex);

    if (catIndex === -1 || mouseIndex === -1) {
      return 'boring without two animals';
    }

    return stepsForMouse <= moves ? 'Caught!' : 'Escaped!';
  }
  catMouse(
    `
    ..C......
    .........
    ....m....`,
    5,
  );
}

// task 15 link https://www.codewars.com/kata/duplicate-encoder
function solution15() {
  function duplicateEncode(word) {
    const charArr = word.toLowerCase().split('');
    return charArr
      .map((el, index, arr) =>
        //  check if there are more el under a different index
        (arr.indexOf(el) === arr.lastIndexOf(el) ? '(' : ')'))
      .join('');
  }
  duplicateEncode('recede');
}

// // task 16 link https://www.codewars.com/kata/5693239fb761dc8670000001
// function solution16() {}

// task 17 link https://www.codewars.com/kata/576757b1df89ecf5bd00073b
function solution17() {
  function towerBuilder(nFloors) {
    let spaces = 0;
    const arr = [];

    for (let i = nFloors - 1; i >= 0; i -= 1) {
      // insert " " to the beginning and end, middle *. start from bottom
      arr.push(' '.repeat(spaces) + '*'.repeat(i * 2 + 1) + ' '.repeat(spaces));
      spaces += 1;
    }

    return arr.reverse();
  }
  towerBuilder(3);
}

// task 18 link https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
function solution18() {
  function wave(str) {
    const arr = [];
    for (let i = 0; i < str.length; i += 1) {
      const char = str.slice(i, i + 1).toUpperCase();

      if (char !== ' ') {
        const str1 = str.slice(0, i) + char + str.slice(i + 1);
        arr.push(str1);
      }
    }
    return arr;
  }
  wave('Hello', 'hEllo', 'heLlo', 'helLo', 'hellO');
}

// task 19 link https://www.codewars.com/kata/59d398bb86a6fdf100000031
function solution19() {
  function stringBreakers(n, string) {
    let str = string;
    let arr = [];

    // remove all spaces
    str = str.replace(/\s+/g, '');

    // slice n characters
    while (str.length) {
      arr.push(str.slice(0, n));
      str = str.slice(n);
    }

    // add \n and create string
    arr = arr
      .map((el, index) => {
        if (index !== arr.length - 1) {
          return `${el}\n`;
        }
        return el;
      })
      .join('');

    return arr;
  }
  stringBreakers('This is an example string');
}

// task 20 link https://www.codewars.com/kata/514a024011ea4fb54200004b
function solution20() {
  function domainName(url) {
    const domain = url
      .replace('http://', '')
      .replace('https://', '')
      .replace('www.', '')
      .split('.')[0];
    return domain;
  }
  domainName('https://github.com/emarf');
}
