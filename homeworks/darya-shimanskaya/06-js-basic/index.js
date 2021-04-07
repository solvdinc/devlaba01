// task 1 link http://www.codewars.com/kata/opposite-number
function opposite(number) {
  return -number;
}

// task 2 link http://www.codewars.com/kata/basic-mathematical-operations
function basicOp(operation, value1, value2) {
  let result = 0;
  if (operation === '+') {
    result = value1 + value2;
  } else if (operation === '-') {
    result = value1 - value2;
  } else if (operation === '*') {
    result = value1 * value2;
  } else if (operation === '/') {
    result = value1 / value2;
  } return result;
}

// task 3 link http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
function printArray(array) {
  const result = array.join();
  return result;
}

// task 4 link http://www.codewars.com/kata/transportation-on-vacation
function rentalCarCost(days) {
  let total = 40 * days;
  if (days < 3) {
    return total;
  } if (days >= 7) {
    total -= 50;
  } else if (days >= 3 < 7) {
    total -= 20;
  }
  return total;
}

// task 5 link http://www.codewars.com/kata/calculating-with-functions
function zero(func) { return func ? func(0) : 0; }
function one(func) { return func ? func(1) : 1; }
function two(func) { return func ? func(2) : 2; }
function three(func) { return func ? func(3) : 3; }
function four(func) { return func ? func(4) : 4; }
function five(func) { return func ? func(5) : 5; }
function six(func) { return func ? func(6) : 6; }
function seven(func) { return func ? func(7) : 7; }
function eight(func) { return func ? func(8) : 8; }
function nine(func) { return func ? func(9) : 9; }

function plus(b) { return function (a) { return a + b; }; }
function minus(b) { return function (a) { return a - b; }; }
function times(b) { return function (a) { return a * b; }; }
function dividedBy(b) { return function (a) { return a / b; }; }

// task 6 link http://www.codewars.com/kata/get-the-middle-character
function getMiddle(string) {
  const stringLength = string.length;
  return string.slice((stringLength - 1) / 2, stringLength / 2 + 1);
}

// task 7 link http://www.codewars.com/kata/partition-on
function partitionOn(pred, items) {
  const itemsTrue = [];
  const itemsFalse = [];

  items.map((item, index) => ((pred(item)) ? itemsTrue.push(item) : itemsFalse.push(item)));
  items.length = 0;
  items.push(...itemsFalse, ...itemsTrue);
  return itemsFalse.length;
}

// task 8 link http://www.codewars.com/kata/word-count
function countWords(str) {
  const array = str.trim().split(/\s+/);
  let count = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] !== '') {
      count += 1;
    }
  }
  return count;
}

// task 9 link https://www.codewars.com/kata/find-the-odd-int/
function findOdd(array) {
  for (let i = 0; i < array.length; i += 1) {
    let count = 0;
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        count += 1;
      }
    } if (count % 2 !== 0) {
      return array[i];
    }
  }
  return 0;
}

// task 10 link https://www.codewars.com/kata/find-the-parity-outlier
function findOutlier(integers) {
  const even = integers.filter((item) => item % 2 === 0);
  const odd = integers.filter((item) => item % 2 !== 0);
  return odd.length === 1 ? odd[0] : even[0];
}

// task 11 https://www.codewars.com/kata/zipwith
function zipWith(fn, a0, a1) {
  const result = [];
  const length = Math.min(a0.length, a1.length);
  for (let i = 0; i < length; i += 1) {
    result.push(fn(a0[i], a1[i]));
  }
  return result;
}

// task 12 https://www.codewars.com/kata/filter-the-number
const FilterString = function FilterString(value) {
  const num = parseInt(value.split(/\D/g).join(''), 10);
  return num;
};

// task 13 https://www.codewars.com/kata/n-th-fibonacci
function nthFibo(n) {
  const result = (n <= 2) ? n - 1 : nthFibo(n - 1) + nthFibo(n - 2);
  return result;
}

// task 14 link https://www.codewars.com/kata/cat-and-mouse-2d-version/
function catMouse(map, moves) {
  const oneLevelMap = map.split('\n');
  const cat = oneLevelMap.find((findC) => findC.includes('C'));
  const mouse = oneLevelMap.find((findM) => findM.includes('m'));

  if (!cat || !mouse) { return 'boring without two animals'; }

  const catX = oneLevelMap.map((cX) => cX.indexOf('C')).filter((cX) => cX > -1);
  const catY = oneLevelMap.map((cY) => cY.includes('C')).indexOf(true);
  const mouseX = oneLevelMap.map((mX) => mX.indexOf('m')).filter((mX) => mX > -1);
  const mouseY = oneLevelMap.map((mY) => mY.includes('m')).indexOf(true);

  return Math.abs(catX - mouseX) + Math.abs(catY - mouseY) <= moves ? 'Caught!' : 'Escaped!';
}

// task 15 link https://www.codewars.com/kata/duplicate-encoder
function duplicateEncode(word) {
  const wordArray = word.toLowerCase().split('')
    .map((item) => (word.indexOf(item) !== word.lastIndexOf(item) ? ')' : '('));
  return wordArray.join('');
}

// task 17 link https://www.codewars.com/kata/576757b1df89ecf5bd00073b
function towerBuilder(nFloors) {
  const tower = [];
  for (let i = 0; i < nFloors; i += 1) {
    tower[i] = ' '.repeat(nFloors - i - 1) + '*'.repeat(2 * i + 1)
      + ' '.repeat(nFloors - i - 1);
  }
  return tower;
}

// task 18 link https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
function wave(str) {
  const result = [];
  const { length } = str;
  for (let i = 0; i < length; i += 1) {
    if (str[i] !== ' ') {
      result.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
    }
  }
  return result;
}

// task 19 link https://www.codewars.com/kata/59d398bb86a6fdf100000031
function stringBreakers(n, string) {
  const stringWithoutSpaces = string.replace(/\s/g, '');
  const result = [];

  for (let i = 0; i < stringWithoutSpaces.length; i += n) {
    result.push(stringWithoutSpaces.slice(i, i + n));
  }
  return result.join('\n');
}

// task 20 link https://www.codewars.com/kata/514a024011ea4fb54200004b
function domainName(url) {
  return url.replace('http://', '').replace('https://', '').replace('www.', '').split('.')[0];
}
