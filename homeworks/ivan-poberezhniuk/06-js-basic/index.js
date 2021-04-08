// Task 1 http://www.codewars.com/kata/opposite-number
const opposite = (number) => number * -1;

// Task 2 http://www.codewars.com/kata/basic-mathematical-operations
const basicOp = (operation, value1, value2) => {
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      return null;
  }
};

// Task 3 http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
const printArray = (array) => array.toString();

// Task 4 http://www.codewars.com/kata/transportation-on-vacation
const rentalCarCost = (days) => {
  const dayRentCost = 40;
  const total = days * dayRentCost;

  if (days >= 7) {
    return total - 50;
  } else if (days >= 3) {
    return total - 20;
  }
  return total;
};

// Task 5 http://www.codewars.com/kata/calculating-with-functions
const zero = (cb = (num) => num) => {
  const num = 0;
  return cb(num);
};

const one = (cb = (num) => num) => {
  const num = 1;
  return cb(num);
};

const two = (cb = (num) => num) => {
  const num = 2;
  return cb(num);
};

const three = (cb = (num) => num) => {
  const num = 3;
  return cb(num);
};

const four = (cb = (num) => num) => {
  const num = 4;
  return cb(num);
};

const five = (cb = (num) => num) => {
  const num = 5;
  return cb(num);
};

const six = (cb = (num) => num) => {
  const num = 6;
  return cb(num);
};

const seven = (cb = (num) => num) => {
  const num = 7;
  return cb(num);
};

const eight = (cb = (num) => num) => {
  const num = 8;
  return cb(num);
};

const nine = (cb = (num) => num) => {
  const num = 9;
  return cb(num);
};

const plus = (a) => (b) => Math.floor(b + a);

const minus = (a) => (b) => Math.floor(b - a);

const times = (a) => (b) => Math.floor(b * a);

const dividedBy = (a) => (b) => Math.floor(b / a);

// Task 6 http://www.codewars.com/kata/get-the-middle-character
const getMiddle = (s) => {
  const lettersCount = s.length;
  const isOdd = lettersCount % 2;
  const halfOfLetters = Math.ceil(lettersCount / 2);

  if (isOdd) {
    return s[halfOfLetters - 1];
  }
  const double = s[halfOfLetters - 1] + s[halfOfLetters];
  return double;
};

// Task 7 http://www.codewars.com/kata/partition-on
const partitionOn = (pred, arr) => {
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (pred(arr[i]) === false) {
      result.push(arr[i]);
    }
  }

  for (let i = 0; i < arr.length; i += 1) {
    if (pred(arr[i]) === true) {
      result.push(arr[i]);
    }
  }

  arr.length = 0;
  arr.push(...result);

  return arr.findIndex((item) => pred(item));
};

// Task 8 http://www.codewars.com/kata/word-count
const countWords = (str) => {
  const regex = /\s+/;
  let splittedString = str.split(regex);

  splittedString = splittedString.filter((string) => !!string.trim());

  return splittedString.length;
};

// Task 9 https://www.codewars.com/kata/find-the-odd-int/
const findOdd = (arr) => {
  const oddNumber = arr.find((searchNumber) => {
    const filteredNumbers = arr.filter(
      (currentNumber) => searchNumber === currentNumber
    );

    if (filteredNumbers.length % 2 > 0) {
      return searchNumber;
    }
    return false;
  });

  return oddNumber;
};

// Task 10 https://www.codewars.com/kata/find-the-parity-outlier
const findOutlier = (integers) => {
  let oddCount = 0;
  let evenCount = 0;
  let result = null;

  for (let i = 0; i < integers.length; i += 1) {
    if (integers[i] % 2 === 0) {
      evenCount += 1;
    } else {
      oddCount += 1;
    }

    if (oddCount >= 2) {
      result = integers.find((int) => int % 2 === 0);
    }

    if (evenCount >= 2) {
      result = integers.find((int) => int % 2 !== 0);
    }
  }
  return result;
};

// Task 11 https://www.codewars.com/kata/zipwith
const zipWith = (fn, a0, a1) => {
  const zipped = [];
  let shorterArr = [];

  if (a0.length > a1.length) {
    shorterArr = a1;
  } else {
    shorterArr = a0;
  }

  for (let i = 0; i < shorterArr.length; i += 1) {
    zipped.push(fn(a0[i], a1[i]));
  }

  return zipped;
};

// Task 12 https://www.codewars.com/kata/filter-the-number
const FilterString = (value) => {
  const chars = value.split('');
  const numbers = [];

  for (let i = 0; i < chars.length; i += 1) {
    if (!Number.isNaN(parseInt(chars[i], 10))) {
      numbers.push(chars[i]);
    }
  }

  return parseInt(numbers.join(''), 10);
};

// Task 13 https://www.codewars.com/kata/n-th-fibonacci
const nthFibo = (n) => {
  let n1 = 0;
  let n2 = 1;
  let nextTerm = null;
  const fiboNums = [n1, n2];

  for (let i = 1; i <= n; i += 1) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    fiboNums.push(nextTerm);
  }

  return fiboNums[n - 1];
};

// Task 14 https://www.codewars.com/kata/cat-and-mouse-2d-version/
const catMouse = (map, moves) => {
  const mapArr = map.split('\n');
  let catPos = null;
  let mousePos = null;

  for (let i = 0; i < mapArr.length; i += 1) {
    for (let k = 0; k < mapArr[i].length; k += 1) {
      if (mapArr[i][k] === 'C') {
        catPos = [i + 1, k + 1];
        break;
      }
    }
  }

  for (let i = 0; i < mapArr.length; i += 1) {
    for (let k = 0; k < mapArr[i].length; k += 1) {
      if (mapArr[i][k] === 'm') {
        mousePos = [i + 1, k + 1];
        break;
      }
    }
  }

  if (!catPos || !mousePos) {
    return 'boring without two animals';
  }

  const areEnoughtSteps = (aPos, bPos) =>
    Math.abs(aPos[0] - bPos[0]) + Math.abs(aPos[1] - bPos[1]);

  return areEnoughtSteps(catPos, mousePos) > moves ? 'Escaped!' : 'Caught!';
};

// Task 15 https://www.codewars.com/kata/duplicate-encoder
const duplicateEncode = (word) => {
  const splittedWord = word.split('');

  return splittedWord
    .map((a) => {
      let count = 0;
      splittedWord.forEach((b) => {
        if (a.toLowerCase() === b.toLowerCase()) {
          count += 1;
        }
      });

      if (count >= 2) {
        return ')';
      }
      return '(';
    })
    .join('');
};

// Task 16 https://www.codewars.com/kata/5693239fb761dc8670000001
const findAdditiveNumbers = (number) => {
  const verify = (i, j, num) => {
    const numArr = [+num.slice(0, i), +num.slice(i, j)];
    i = 0;
    num = num.slice(j);

    while (num) {
      const next = numArr[i] + numArr[i + 1] + '';
      const nextLength = next.length;
      if (num.slice(0, nextLength) != next) return false;
      numArr.push(+next), (i += 1), (num = num.slice(nextLength));
    }

    return numArr.map((item) => '' + item);
  };

  const numLength = number.length;

  for (let i = 1; i <= numLength / 2; i += 1) {
    for (let j = i + 1; j <= (numLength * 2) / 3; j += 1) {
      const result = verify(i, j, number);
      if (result) return result;
    }
  }

  return [];
};

// Task 17 https://www.codewars.com/kata/576757b1df89ecf5bd00073b
const towerBuilder = (nFloor) => {
  const floors = [];

  for (let i = 1; i <= nFloor; i += 1) {
    let lineToPrint = '';

    for (let j = nFloor - i; j > 0; j -= 1) {
      lineToPrint += ' ';
    }

    for (let j = i * 2 - 1; j > 0; j -= 1) {
      lineToPrint += '*';
    }

    for (let j = nFloor - i; j > 0; j -= 1) {
      lineToPrint += ' ';
    }

    floors.push(lineToPrint);
  }

  return floors;
};

// Task 18 https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
const wave = (str) => {
  const result = [];
  const strArr = str.split('');

  for (let i = 0; i < strArr.length; i += 1) {
    const word = [...strArr];

    if (strArr[i] !== ' ') {
      word[i] = word[i].toUpperCase();
      result.push(word.join(''));
    }
  }
  return result;
};

// Task 19 https://www.codewars.com/kata/59d398bb86a6fdf100000031
const stringBreakers = (n, string) => {
  let splittedString = string.split(' ');
  const stringwithoutSpaces = splittedString.join('');
  splittedString = stringwithoutSpaces.split('');
  const result = [];

  for (let i = 0; i < splittedString.length; i += n) {
    result.push(splittedString.slice(i, i + n).join(''));
  }
  return result.join('\n');
};

// Task 20  https://www.codewars.com/kata/514a024011ea4fb54200004b
const domainName = (url) => url.replace(/.+\/\/|www.|\..+/g, '');
