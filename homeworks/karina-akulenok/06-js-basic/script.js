// task 1 http://www.codewars.com/kata/opposite-number
function opposite(number) {
  const oppositeNum = -number;
  return oppositeNum;
}
console.log(opposite());

// task 2 http://www.codewars.com/kata/basic-mathematical-operations
function basicOp(operation, value1, value2) {
  if (operation === '+') {
    return (value1 + value2);
  }
  if (operation === '-') {
    return (value1 - value2);
  }
  if (operation === '*') {
    return (value1 * value2);
  }
  if (operation === '/') {
    return (value1 / value2);
  }
}
console.log(basicOp());

// task 3 http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
function printArray(array) {
  return array.join(',');
}
console.log(printArray());

// task 4 http://www.codewars.com/kata/transportation-on-vacation
function rentalCarCost(days) {
  const coast = 40 * days;
  let newCoast;
  if (days >= 7) {
    newCoast = coast - 50;
    return newCoast;
  }
  if (days >= 3) {
    newCoast = coast - 20;
    return newCoast;
  }
  return coast;
}
console.log(rentalCarCost());

// task 5 http://www.codewars.com/kata/calculating-with-functions
function value(num, operation) { return !operation ? num : operation(num); }
function zero(operation) { return value(0, operation); }
function one(operation) { return value(1, operation); }
function two(operation) { return value(2, operation); }
function three(operation) { return value(3, operation); }
function four(operation) { return value(4, operation); }
function five(operation) { return value(5, operation); }
function six(operation) { return value(6, operation); }
function seven(operation) { return value(7, operation); }
function eight(operation) { return value(8, operation); }
function nine(operation) { return value(9, operation); }

function plus(a) { return function(b) { return (b + a); }; }
function minus(a) { return function(b) { return (b - a); }; }
function times(a) { return function(b) { return (b * a); }; }
function dividedBy(a) { return function(b) { return Math.floor(b / a); }; }
console.log(zero());
console.log(one());
console.log(two());
console.log(three());
console.log(four());
console.log(five());
console.log(six());
console.log(seven());
console.log(eight());
console.log(nine());
console.log(plus());
console.log(minus());
console.log(times());
console.log(dividedBy());

// task 6 http://www.codewars.com/kata/get-the-middle-character
function getMiddle(s) {
  let center;
  for (let i = 0; i <= s.length; i += 1) {
    if ((s.length % 2) === 0) {
      center = s.length / 2 - 1;
      return (s.substring(center, center + 2));
    }
    center = s.length / 2;
    return (s.substring(center, center + 1));
  }
}
console.log(getMiddle());

// task 7 http://www.codewars.com/kata/partition-on
function partitionOn(pred, items) {
  const pTrue = [];
  const pFalse = [];
  items.forEach(function(value) {
    (pred(value)) ? pTrue.push(value) : pFalse.push(value)
  });
  items.length = 0;
  items.push(...pFalse, ...pTrue);
  return pFalse.length;
}
console.log(partitionOn());

// task 8 http://www.codewars.com/kata/word-count
function countWords(str) {
  const matches = str.match(/[\w\d’'-]+/gi);
  return matches ? matches.length : 0;
}
console.log(countWords());

// task 9 https://www.codewars.com/kata/find-the-odd-int/
function findOdd(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let count = 0;
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[i] === arr[j]) { count += 1; }
    }
    if (count % 2 !== 0) { return arr[i]; }
  }
  return 0;
}
console.log(findOdd());

// task 10 https://www.codewars.com/kata/find-the-parity-outlier
function findOutlier(integers) {
  const odd = [];
  const even = [];
  for (let i = 0; i <= integers.length; i += 1) {
    if (integers[i] % 2 === 0) {
      odd.push(integers[i]);
    }
    even.push(integers[i]);
  }
  return odd.length === 1 ? odd[0] : even[0];
}
console.log(findOutlier());

// task 11 https://www.codewars.com/kata/zipwith
function zipWith(fn, a0, a1) {
  const result = [];
  const minArr = Math.min(a0.length, a1.length);
  for (let i = 0; i < minArr; i += 1) {
    result.push(fn(a0[i], a1[i]));
  }
  return result;
}
console.log(zipWith());

// task 12 https://www.codewars.com/kata/filter-the-number
const FilterString = function(value) {
  const nValue = value.split('').filter((el) => Number.isNaN(el) === false).join('');
  const result = +nValue;
  return result;
};
console.log(FilterString());

// task 13 https://www.codewars.com/kata/n-th-fibonacci
function nthFibo(n) {
  let a = 0;
  let b = 1;
  if (n === 1) return 0;
  for (let i = 3; i <= n; i += 1) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
}
console.log(nthFibo());

// task 14 https://www.codewars.com/kata/cat-and-mouse-2d-version/
function catMouse(map, moves) {
  const newMap = map.split('\n');
  const locationC = newMap.map((s) => s.indexOf('C'));
  const locationM = newMap.map((s) => s.indexOf('m'));
  const cat = newMap.indexOf(newMap.filter((s) => s.includes('C'))[0]);
  const mouse = newMap.indexOf(newMap.filter((s) => s.includes('m'))[0]);
  const indexC = locationC[cat];
  const indexM = locationM[mouse];
  const CatMoves = Math.abs(indexM - indexC) + Math.abs(cat - mouse);
  if (mouse === -1 || cat === -1) {
    return 'boring without two animals';
  }
  return CatMoves > moves ? 'Escaped!' : 'Caught!';
}
console.log(catMouse());

// task 15 https://www.codewars.com/kata/duplicate-encoder
function duplicateEncode(word) {
  let result = '';
  const duplicateStr = word.toLowerCase();
  for (let i = 0; i < duplicateStr.length; i += 1) {
    if (duplicateStr.indexOf(duplicateStr[i]) === duplicateStr.lastIndexOf(duplicateStr[i])) {
      result += '(';
    } else {
      result += ')';
    }
  }
  return result;
}
console.log(duplicateEncode());

// task 16 https://www.codewars.com/kata/5693239fb761dc8670000001

// task 17 https://www.codewars.com/kata/576757b1df89ecf5bd00073b
function towerBuilder(nFloors) {
  let space = [];
  let star = [];
  const tower = [];
  for (let i = 1; i <= nFloors; i += 1) {
    space = ' '.repeat(nFloors - i);
    star = '*'.repeat((2 * i) - 1);
    tower.push(`${space}${star}${space}`);
  }
  return tower;
}
console.log(towerBuilder());

// task 18 https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
function wave(str) {
  const arr = str.toLowerCase().split('');
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    const temp = str.substring(0, i) + arr[i].toUpperCase() + str.substring(i + 1);
    if (temp !== str) { result.push(temp); }
  }
  return result;
}
console.log(wave());

// task 19 https://www.codewars.com/kata/59d398bb86a6fdf100000031
function stringBreakers(n, string) {
  const result = [];
  string.replace(/\s/g, '');
  for (let i = 0; i < string.length; i += n) {
    result.push(string.substr(i, n));
  }
  return result.join('\n');
}
console.log(stringBreakers());

// task 20 https://www.codewars.com/kata/514a024011ea4fb54200004b
function domainName(url) {
  const domName = url.replace('http://', '').replace('https://', '').replace('www.', '').split('.')[0];
  return domName;
}
console.log(domainName());
