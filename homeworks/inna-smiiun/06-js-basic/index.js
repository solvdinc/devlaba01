// task 1 http://www.codewars.com/kata/opposite-number
function opposite(number) {
  return -number;
}

// task 2 http://www.codewars.com/kata/basic-mathematical-operations
function basicOp(operation, value1, value2) {
  let result;
  switch (operation) {
    case '+':
      result = value1 + value2;
      break;
    case '-':
      result = value1 - value2;
      break;
    case '*':
      result = value1 * value2;
      break;
    case '/':
      result = value1 / value2;
      break;
    default:
      result = 'Undefined operator';
      break;
  }
  return result;
}

// task 3 http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
function printArray(array) {
  return array.join(',');
}

// task 4 https://www.codewars.com/kata/transportation-on-vacation
function rentalCarCost(d) {
  let rentalPrice;
  if (d < 3) {
    rentalPrice = d * 40;
  } else if (d < 7) {
    rentalPrice = d * 40 - 20;
  } else {
    rentalPrice = d * 40 - 50;
  }
  return rentalPrice;
}

//task 5 http://www.codewars.com/kata/calculating-with-functions
function zero() {
  return arguments.length ? arguments[0](0) : 0;
}

function one() {
  return arguments.length ? arguments[0](1) : 1;
}

function two() {
  return arguments.length ? arguments[0](2) : 2;
}

function three() {
  return arguments.length ? arguments[0](3) : 3;
}

function four() {
  return arguments.length ? arguments[0](4) : 4;
}

function five() {
  return arguments.length ? arguments[0](5) : 5;
}

function six() {
  return arguments.length ? arguments[0](6) : 6;
}

function seven() {
  return arguments.length ? arguments[0](7) : 7;
}

function eight() {
  return arguments.length ? arguments[0](8) : 8;
}

function nine() {
  return arguments.length ? arguments[0](9) : 9;
}

function plus() {
  let arg = arguments[0];
  return function (number) {
    return number + arg;
  };
}

function minus() {
  let arg = arguments[0];
  return function (number) {
    return number - arg;
  };
}

function times() {
  let arg = arguments[0];
  return function (number) {
    return number * arg;
  };
}

function dividedBy() {
  let arg = arguments[0];
  return function (number) {
    return number / arg;
  };
}

//task 6 http://www.codewars.com/kata/get-the-middle-character
function getMiddle(s) {
  let position;
  let chrLength;

  if (s.length % 2 === 1) {
    position = s.length / 2;
    chrLength = 1;
  } else {
    position = s.length / 2 - 1;
    chrLength = 2;
  }

  return s.slice(position, position + chrLength);
}

//task 7 http://www.codewars.com/kata/partition-on
function partitionOn(pred, items) {
  let arr = items;
  let falseValue = arr.filter(function (value) {
    return !pred(value);
  });
  let trueValue = arr.filter(pred);
  arr.length = 0;
  for (let i = 0; i < falseValue.length; i + 1) {
    arr.push(falseValue[i]);
  }
  for (let i = 0; i < trueValue.length; i + 1) {
    arr.push(trueValue[i]);
  }

  return falseValue.length;
}

//task 8 http://www.codewars.com/kata/word-count
function countWords(str) {
  let words = str.match(/[^\s]+/g);
  return words ? words.length : 0;
}

//task 9 https://www.codewars.com/kata/find-the-odd-int/
function findOdd(A) {
  let count = 0;
  for (let i = 0; i < A.length; i + 1) {
    for (let j = 0; j < A.length; j + 1) {
      if (A[i] === A[j]) {
        count + 1;
      }
    }
    if (count % 2 !== 0) {
      return A[i];
    }
  }
}

//task 10 https://www.codewars.com/kata/find-the-parity-outlier
function findOutlier(integers) {
  const oddArray = [];
  const evenArray = [];
  for (let i = 0; i < integers.length; i + 1) {
    if (integers[i] % 2 === 0) {
      evenArray.push(integers[i]);
    } else {
      oddArray.push(integers[i]);
    }
  }
  if (evenArray.length === 1) {
    return evenArray[0];
  } else {
    return oddArray[0];
  }
}

//task 11 https://www.codewars.com/kata/zipwith
function zipWith(fn, a0, a1) {
  let zipArray = [];
  let minArray = a0.length > a1.length ? a1 : a0;

  for (let i = 0; i < minArray.length; i += 1) {
    zipArray.push(fn(a0[i], a1[i]));
  }

  return zipArray;
}

//task 12 https://www.codewars.com/kata/filter-the-number
let FilterString = function (value) {
  let numbers = value.replace(/\D/g, '');
  return +numbers;
};

//task 13 https://www.codewars.com/kata/n-th-fibonacci
function nthFibo(n) {
  if (n <= 2) {
    return n - 1;
  }
  return nthFibo(n - 2) + nthFibo(n - 1);
}

//task 14 https://www.codewars.com/kata/cat-and-mouse-2d-version/
function catMouse(map, moves) {
  let mapArray = map.split('\n');
  let cat, mouse;
  for (let i = 0; i < mapArray.length; i + 1) {
    for (let j = 0; j < mapArray[i].length; j + 1) {
      if (mapArray[i][j] === 'C') {
        cat = [i, j];
      } else if (mapArray[i][j] === 'm') {
        mouse = [i, j];
      }
    }
  }
  if (cat === undefined || mouse === undefined) {
    return 'boring without two animals';
  }

  let x = Math.abs(cat[0] - mouse[0]);
  let y = Math.abs(cat[1] - mouse[1]);

  if (x + y <= moves) {
    return 'Caught!';
  } else {
    return 'Escaped!';
  }
}

//task 15 https://www.codewars.com/kata/duplicate-encoder
function duplicateEncode(word) {
  let arrWord = word.toLowerCase().split('');

  let counts = arrWord.reduce(
    (acc, n) => ((acc[n] = (acc[n] || 0) + 1), acc),
    {}
  );

  return arrWord.map((item) => (counts[item] > 1 ? ')' : '(')).join('');
}

//task 17 https://www.codewars.com/kata/576757b1df89ecf5bd00073b
function towerBuilder(nFloors) {
  let tower = [];
  let space = ' ';
  let star = '*';

  for (let i = 1; i <= nFloors; i + 1) {
    space = ' '.repeat(nFloors - i);
    star = '*'.repeat(2 * i - 1);
    tower.push(space + star + space);
  }
  return tower;
}

//task 18 https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
function wave(string) {
  let result = [];

  for (let i = 0; i < string.length; i + 1) {
    if (string[i] === ' ') {
      continue;
    }
    result.push(
      Array.from(string, (chr, j) => (i === j ? chr.toUpperCase() : chr)).join(
        ''
      )
    );
  }
  return result;
}

//task 19 https://www.codewars.com/kata/59d398bb86a6fdf100000031
function stringBreakers(n, string) {
  let result = [];
  let stringWithoutSpaces = string.replace(/\s/g, '');

  for (let i = 0; i < stringWithoutSpaces.length; i += n) {
    result.push(stringWithoutSpaces.substr(i, n));
  }
  return result.join('\n');
}

//task 20 https://www.codewars.com/kata/514a024011ea4fb54200004b
function domainName(url) {
  const domainNameStr = url.replace(/.+\/\/|www.|\..+/g, '');
  return domainNameStr;
}
