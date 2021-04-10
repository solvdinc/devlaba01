// task 1 http://www.codewars.com/kata/opposite-number

function opposite(number) {
   return -number;
}
// task 2 http://www.codewars.com/kata/basic-mathematical-operations

function basicOp(operation, value1, value2) {
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
}
// task 3 https://www.codewars.com/kata/printing-array-elements-with-comma-delimiters

function printArray(array) {
   return array.join(',');
}

// task 4 https://www.codewars.com/kata/transportation-on-vacation

function rentalCarCost(d) {
   const sum = 40 * d;
   if (d >= 7) {
      return sum - 50
   } else if (d >= 3) {
      return sum - 20
   }
   return sum;
}

// task 5 https://www.codewars.com/kata/calculating-with-functions

function digit(num, fn) { return fn ? fn(num) : num; }
function zero(fn) { return digit(0, fn); }
function one(fn) { return digit(1, fn); }
function two(fn) { return digit(2, fn); }
function three(fn) { return digit(3, fn); }
function four(fn) { return digit(4, fn); }
function five(fn) { return digit(5, fn); }
function six(fn) { return digit(6, fn); }
function seven(fn) { return digit(7, fn); }
function eight(fn) { return digit(8, fn); }
function nine(fn) { return digit(9, fn); }

function plus(b) { return a => a + b }
function minus(b) { return a => a - b }
function times(b) { return a => a * b }
function dividedBy(b) { return a => Math.floor(a / b) }

// task 6 https://www.codewars.com/kata/calculating-with-functions

function getMiddle(text) {
   return text.length % 2 === 0 ? text.substr(text.length / 2 - 1, 2) : text.substr(text.length / 2, 1)
}

// task 7 http://www.codewars.com/kata/partition-on

function partitionOn(pred, items) {
   const trueArr = [];
   const falseArr = [];

   items.forEach(el => pred(el) ? trueArr.push(el) : falseArr.push(el))
   items.length = 0;
   items.push(...falseArr, ...trueArr);

   return items.indexOf(trueArr[0]);
}

// task 8 https://www.codewars.com/kata/word-count

function countWords(words) {
   return words.split(/\s/g).filter(i => i != '').length;
}

// task 9 https://www.codewars.com/kata/find-the-odd-int/

function findOutlier(integers) {
   return integers.slice(0, 3).filter(el => el % 2 === 0).length >= 2
      ? integers.find(el => el % 2 !== 0)
      : integers.find(el => el % 2 === 0);
}
//alternative solution(better performance) 

function findOutlier(integers) {
   for (let i = 0; i < integers.length; i += 2) {
      if (even(integers[i]) !== even(integers[i + 1]) && even(integers[i + 1]) === even(integers[i + 2])) {
         return integers[i]
      } else if (even(integers[i]) === even(integers[i + 2]) && even(integers[i + 1]) !== even(integers[i + 2])) {
         return integers[i + 1]
      } else if (even(integers[i]) === even(integers[i + 1]) && even(integers[i + 1]) !== even(integers[i + 2])) {
         return integers[i + 2]
      }
   }
}

function even(num) {
   return num % 2 === 0
}

// task 10 https://www.codewars.com/kata/find-the-parity-outlier

function findOutlier(integers) {
   const odd = [];
   const ever = [];
   for (let integer of integers) {
      integer % 2 === 0 ? odd.push(integer) : ever.push(integer);
   }
   return odd.length === 1 ? odd[0] : ever[0];
}

// task 11 https://www.codewars.com/kata/zipwith

function zipWith(fn, a0, a1) {
   const leng = Math.min(a0.length, a1.length);
   let result = [];
   for (let i = 0; i < leng; i += 1) {
      result.push(fn(a0[i], a1[i]));
   }
   return result;
}

// task 12 https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript

var FilterString = function (value) {
   return +value.split('').filter(element => (isNaN(+element) === false)).join('');
}

// task 13 https://www.codewars.com/kata/n-th-fibonacci

function nthFibo(n) {
   let a = 0;
   let b = 1;
   for (let i = 2; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
   }
   return a;
}

// task 14 https://www.codewars.com/kata/cat-and-mouse-2d-version/

function catMouse(map, moves) {
   if (!map.includes('C') || !map.includes('m')) return 'boring without two animals'
   const mapSplited = map.split('\n');
   const catX = mapSplited.map(el => el.indexOf('C')).filter(el => el > - 1)[0];
   const catY = mapSplited.map(el => el.includes('C')).indexOf(true);
   const mouseX = mapSplited.map(el => el.indexOf('m')).filter(el => el > - 1)[0];
   const mouseY = mapSplited.map(el => el.includes('m')).indexOf(true);
   return Math.abs(catX - mouseX) + Math.abs(catY - mouseY) <= moves ? 'Caught' : 'Escaped'
}

// task 15 https://www.codewars.com/kata/duplicate-encoder

function duplicateEncode(word) {
   return word
      .toLowerCase()
      .split('')
      .map((el, index, arr) => {
         return arr.indexOf(el) === arr.lastIndexOf(el) ? '(' : ')'
      }
      ).join('')
}

// task 16 https://www.codewars.com/kata/5693239fb761dc8670000001


// task 17 https://www.codewars.com/kata/576757b1df89ecf5bd00073b

function towerBuilder(nFloors) {
   const tower = [];
   for (let i = 0; i < nFloors; i++) {
      tower.push(" ".repeat((nFloors - i) - 1) + "*".repeat(i * 2 + 1) + " ".repeat((nFloors - i) - 1));
   }
   return tower;
}

// test 18 https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

function wave(str) {
   const arr = [];
   for (let i = 0; i < str.length; i++) {
      let arrStr = str.split('');
      if (arrStr[i] !== ' ') {
         arrStr[i] = arrStr[i].toUpperCase();
         arr.push(arrStr.join(''));
      }
   }
   return arr;
}

// test 19 https://www.codewars.com/kata/5693239fb761dc8670000001K
function stringBreakers(n, string) {
   const arr = [];
   const splitedString = string.replace(/\s/g, '');

   for (let i = 0; i < splitedString.length; i += n) {
      arr.push(splitedString.slice(i, i + n));
   }
   return arr.join('\n');
}

// test 20 https://www.codewars.com/kata/514a024011ea4fb54200004b

function domainName(url) {
   const domain = url.replace('http://', '').replace('https://', '').replace('www.', '').split('.')[0];
   return domain;
}