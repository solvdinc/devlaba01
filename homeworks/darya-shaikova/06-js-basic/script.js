// task 1 https://www.codewars.com/kata/opposite-number

function opposite(number) {
  return -number;
}

// task 2 https://www.codewars.com/kata/basic-mathematical-operations

function basicOp(operation, value1, value2) {
  if (operation === '+') {
      return value1 + value2;
  } else if (operation === '-') {
      return value1 - value2;
  } else if (operation === '*') {
      return value1 * value2;
  } else if (operation === '/') {
      return value1 / value2;
  }
}

// task 3 https://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
function printArray(array) {
  return array.join(',');
}

// task 4 https://www.codewars.com/kata/transportation-on-vacation
function rentalCarCost(d) {
  if (d < 3) {
      return d * 40;
  } else if (d >= 3 && d < 7) {
      return d * 40 - 20;
  } else if (d >= 7) {
      return d * 40 - 50;
  }
}

// task 5 https://www.codewars.com/kata/calculating-with-functions

function calculation(number, operation) {
  if (!operation) {
      return number;
  }
  return operation(number);
}

function zero(operation) { return calculation(0, operation); }

function one(operation) { return calculation(1, operation); }

function two(operation) { return calculation(2, operation); }

function three(operation) { return calculation(3, operation); }

function four(operation) { return calculation(4, operation); }

function five(operation) { return calculation(5, operation); }

function six(operation) { return calculation(6, operation); }

function seven(operation) { return calculation(7, operation); }

function eight(operation) { return calculation(8, operation); }

function nine(operation) { return calculation(9, operation); }

function plus(x) {
  return function(y) {
      return y + x;
  };
}

function minus(x) {
  return function(y) {
      return y - x;
  };
}

function times(x) {
  return function(y) {
      return y * x;
  };
}

function dividedBy(x) {
  return function(y) {
      return Math.floor(y / x);
  };
}

// task 6 https://www.codewars.com/kata/get-the-middle-character

function getMiddle(s) {
  if (s.length % 2 === 1) {
      return s.substring(s.length / 2, s.length / 2 + 1);
  } else if (s.length % 2 === 0) {
      return s.substring(s.length / 2 - 1, s.length / 2 + 1);
  }
}

// task 7 https://www.codewars.com/kata/partition-on

function partitionOn(pred, items) {
  const truth = items.filter(pred);
  const wrong = items.filter(function(a) { return !pred(a) });
  items.length = 0;
  items.push.apply(items, wrong.concat(truth));
  return wrong.length;
}

// task 8 https://www.codewars.com/kata/word-count

function countWords(str) {
  function isOk(value) {
      return value;
  }
  return str.split(/\s/).filter(isOk).length;
}

// task 9 https://www.codewars.com/kata/find-the-odd-int/

function findOdd(A) {
  let result
  let count = 0;
  A.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i++) {
      if (A[i] === A[i + 1]) {
          count++;
      } else {
          count++;
          if (count % 2 === 1) {
              result = A[i];
              break;
          }
      }
  }
  return result;
}

// task 10 https://www.codewars.com/kata/find-the-parity-outlier

function findOutlier(integers) {
  let even = integers.filter(i => i % 2 === 0);
  let odd = integers.filter(i => i % 2 !== 0);
  return odd.length === 1 ? odd[0] : even[0];
}

// task 11 https://www.codewars.com/kata/zipwith

function zipWith(fn, a0, a1) {
  let minLength = Math.min(a0.length, a1.length);
  let result = [];
  for (let i = 0; i < minLength; i += 1) {
      result.push(fn(a0[i], a1[i]));
  }

  return result;
}

// task 12 https://www.codewars.com/kata/filter-the-number

let returnNumbers = function(value) {
  return parseInt(value.split('').filter(number => !isNaN(number)).join(''));
}

// task 13 https://www.codewars.com/kata/n-th-fibonacci

function nthFibo(n) {
  if (n === 1) {
      return 0;
  } else if (n === 2) {
      return 1;
  }
  let a = 0;
  let b = 1;
  for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
  }
  return b;
}


// task 14 https://www.codewars.com/kata/cat-and-mouse-2d-version/


function catMouse(map, moves) {
  map = map.split('\n');
  let cat
  let mouse;
  for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[i].length; j++) {
          if (map[i][j] == 'C') {
              cat = [i, j]
          }
          if (map[i][j] == 'm') {
              mouse = [i, j]
          }
      }
  }
  if (cat == undefined || mouse == undefined) {
      return 'boring without two animals';
  }
  let necessaryMoves = Math.abs(cat[0] - mouse[0]) + Math.abs(cat[1] - mouse[1])
  return necessaryMoves <= moves ? 'Caught!' : 'Escaped!';
}

// task 15 https://www.codewars.com/kata/duplicate-encoder

function duplicateEncode(word) {
  let Word = word.toUpperCase()
  let WordArray = Word.split('');
  let result = [];

  for (let i = 0; i < WordArray.length; i++) {
      if (WordArray.indexOf(WordArray[i]) === WordArray.lastIndexOf(WordArray[i])) {
          result.push('(');
      } else {
          result.push(')');
      }
  }

  return result.join('');
};


// task 17 https://www.codewars.com/kata/576757b1df89ecf5bd00073b

function towerBuilder(nFloors) {
  let result = [];
  for (let i = 0; i < nFloors; i++) {
      result.push(" ".repeat(nFloors - i - 1) +
          "*".repeat((i * 2) + 1) +
          " ".repeat(nFloors - i - 1));
  }
  return result;
}

// 18 task https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

function wave(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
      let text = str.split('');
      if (text[i] !== ' ') {
          text[i] = text[i].toUpperCase()
          result.push(text.join(''))
      }
  }
  return result
}

// 19 task https://www.codewars.com/kata/59d398bb86a6fdf100000031

function stringBreakers(n, string) {
  let result = [];
  let newString = string.replace(/\s/g, "");
  while (newString.length) {
      result.push(newString.slice(0, n));
      newString = newString.slice(n);
  }
  return result.join("\n");
}

// 20 task https://www.codewars.com/kata/514a024011ea4fb54200004b

function domainName(url) {
  return url.replace('http://', '')
      .replace('https://', '')
      .replace('www.', '')
      .split('.')[0];
}
