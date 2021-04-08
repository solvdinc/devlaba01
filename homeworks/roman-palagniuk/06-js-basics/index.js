/* eslint-disable no-unused-vars */
/* eslint-disable prefer-rest-params */

// 1 http://www.codewars.com/kata/opposite-number
function opposite(number) {
  return -number;
}

// 2 http://www.codewars.com/kata/basic-mathematical-operations
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
      return 0;
  }
}

// 3 http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
function printArray(array) {
  return array.join(',');
}

// 4 http://www.codewars.com/kata/transportation-on-vacation
function rentalCarCost(d) {
  if (d >= 7) {
    return 40 * d - 50;
  }
  if (d < 7 && d >= 3) {
    return 40 * d - 20;
  }
  return 40 * d;
}

// 5 http://www.codewars.com/kata/calculating-with-functions
function zero() {
  return arguments.length === 1 ? arguments[0](0) : 0;
}
function one() {
  return arguments.length === 1 ? arguments[0](1) : 1;
}
function two() {
  return arguments.length === 1 ? arguments[0](2) : 2;
}
function three() {
  return arguments.length === 1 ? arguments[0](3) : 3;
}
function four() {
  return arguments.length === 1 ? arguments[0](4) : 4;
}
function five() {
  return arguments.length === 1 ? arguments[0](5) : 5;
}
function six() {
  return arguments.length === 1 ? arguments[0](6) : 6;
}
function seven() {
  return arguments.length === 1 ? arguments[0](7) : 7;
}
function eight() {
  return arguments.length === 1 ? arguments[0](8) : 8;
}
function nine() {
  return arguments.length === 1 ? arguments[0](9) : 9;
}

function plus() {
  const val = arguments[0];
  return function (left) {
    return left + val;
  };
}
function minus() {
  const val = arguments[0];
  return function (left) {
    return left - val;
  };
}
function times() {
  const val = arguments[0];
  return function (left) {
    return left * val;
  };
}
function dividedBy() {
  const val = arguments[0];
  return function (left) {
    return Math.floor(left / val);
  };
}

// 6 http://www.codewars.com/kata/get-the-middle-character
function getMiddle(s) {
  if (s.length % 2 === 0) {
    return s[s.length / 2 - 1] + s[s.length / 2];
  }

  return s[Math.floor(s.length / 2)];
}

// 7 http://www.codewars.com/kata/partition-on
function partitionOn(pred, items) {
  const F = items.filter((el) => !pred(el));
  const T = items.filter((el) => pred(el));
  items.splice(0);
  items.push(...F);
  items.push(...T);
  return F.length;
}

// 8 http://www.codewars.com/kata/word-count
function countWords(str) {
  return str.split(/\s/g).filter(Boolean).length;
}

// 9 https://www.codewars.com/kata/find-the-odd-int/
function findOdd(A) {
  return A.find((item) => A.filter((el) => el === item).length % 2);
}

// 10 https://www.codewars.com/kata/find-the-parity-outlier
function findOutlier(integers) {
  const odd = integers.filter((i) => i % 2 !== 0);
  const even = integers.filter((i) => i % 2 === 0);

  return odd.length > even.length ? even[0] : odd[0];
}

// 11 https://www.codewars.com/kata/zipwith
function zipWith(fn, a0, a1) {
  const arr = [];
  const short = Math.min(a0.length, a1.length);
  for (let i = 0; i < short; i += 1) {
    arr.push(fn(a0[i], a1[i]));
  }
  return arr;
}

// 12 https://www.codewars.com/kata/filter-the-number
const FilterString = function (value) {
  return parseInt(value.replace(/[a-z]/gi, ''), 10);
};

// 13 https://www.codewars.com/kata/n-th-fibonacci
function nthFibo(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;
  return nthFibo(n - 1) + nthFibo(n - 2);
}

// 14 https://www.codewars.com/kata/cat-and-mouse-2d-version/
function catMouse(map, moves) {
  // eslint-disable-next-line no-param-reassign
  map = map.split('\n');
  if (
    // eslint-disable-next-line operator-linebreak
    !map.some((el) => el.includes('C')) ||
    !map.some((el) => el.includes('m'))
  ) {
    return 'boring without two animals';
  }
  const catX = map.map((el) => el.indexOf('C')).filter((el) => el > -1) * 1;
  const catY = map.map((el) => el.includes('C')).indexOf(true) + 1;
  const mX = map.map((el) => el.indexOf('m')).filter((el) => el > -1) * 1;
  const mY = map.map((el) => el.includes('m')).indexOf(true) + 1;
  return Math.abs(catX - mX) + Math.abs(catY - mY) <= moves
    ? 'Caught!'
    : 'Escaped!';
}

// 15 https://www.codewars.com/kata/duplicate-encoder
function duplicateEncode(word) {
  const letters = word.toLowerCase().split('');
  return (
    letters
      // eslint-disable-next-line arrow-body-style
      .map((c, i) => {
        return letters.some((o, m) => o === c && i !== m) ? ')' : '(';
      })
      .join('')
  );
}

// 16 https://www.codewars.com/kata/5693239fb761dc8670000001
function findAdditiveNumbers(num) {
  for (let i = 1; i < num.length; i += 1) {
    for (let j = i + 1; j < num.length; j += 1) {
      const a = num.slice(0, i);
      const b = num.slice(i, j);
      // eslint-disable-next-line no-continue
      if ((+a && a.startsWith('0')) || (+b && b.startsWith('0'))) continue;
      const seq = [a, b];
      for (let k = j; k < num.length;) {
        const next = `${
          Number(seq[seq.length - 1]) + Number(seq[seq.length - 2])
        }`;
        if (!num.slice(k).startsWith(next)) break;
        seq.push(next);
        k += next.length;
      }
      if (seq.join``.length === num.length) return seq;
    }
  }
  return [];
}

// 17  https://www.codewars.com/kata/576757b1df89ecf5bd00073b
function towerBuilder(nFloors) {
  let space = '';
  let star = '';
  const result = [];
  for (let i = 1; i <= nFloors; i += 1) {
    space = ' '.repeat(nFloors - i);
    star = '*'.repeat(2 * i - 1);
    result.push(space + star + space);
  }
  return result;
}

// 18 https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
// Mexican Wave
function wave(str) {
  const arr = [];
  for (let i = 0; i < str.length; i += 1) {
    const temp = str.split('');
    if (temp[i] !== ' ') {
      temp[i] = temp[i].toUpperCase();
      arr.push(temp.join(''));
    }
  }
  return arr;
}

// 19 https://www.codewars.com/kata/59d398bb86a6fdf100000031
function stringBreakers(n, string) {
  const result = [];
  const str = string.replace(/\s/g, '');
  for (let i = 0; i < string.length; i += n) {
    result.push(str.substr(i, n));
  }
  return result.join('\n');
}

// 20 https://www.codewars.com/kata/514a024011ea4fb54200004b
// Extract the domain name from a URL
function domainName(url) {
  // eslint-disable-next-line no-useless-escape
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}
