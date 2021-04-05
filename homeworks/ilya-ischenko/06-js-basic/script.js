/* eslint-disable func-names */
/* eslint-disable no-console */
// 1 - http://www.codewars.com/kata/opposite-number
const oppositeNumber = function(number) {
  return -number;
};
console.log(oppositeNumber(1));

// 2 - http://www.codewars.com/kata/basic-mathematical-operations
const basicOp = function(operation, value1, value2) {
  // eslint-disable-next-line no-eval
  return eval(`${value1} ${operation} ${value2}`);
};
console.log(basicOp('+', 2, 2));
// DUE TO RULE 6.4 Airbnb I SUGGEST ANOTHER SOLUTION
const basicOp1 = function(operation, value1, value2) {
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
};
console.log(basicOp1('+', 2, 5));

// 3 - http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
const printArray = function(array) {
  return array.join(',');
};
console.log(printArray(['h', 'o', 'l', 'a']));

// 4 -http://www.codewars.com/kata/transportation-on-vacation
const rentalCarCost = function(d) {
  let discount = 0;
  const rentalCost = 40;

  if (d >= 7) {
    discount = 50;
  } else if (d >= 3) {
    discount = 20;
  }

  return d * rentalCost - discount;
};
console.log(rentalCarCost(10));

// 5 - http://www.codewars.com/kata/calculating-with-functions
const zero = function(f) {
  return f ? f(0) : 0;
};
const one = function(f) {
  return f ? f(1) : 1;
};
const two = function(f) {
  return f ? f(2) : 2;
};
const three = function(f) {
  return f ? f(3) : 3;
};
const four = function(f) {
  return f ? f(4) : 4;
};
const five = function(f) {
  return f ? f(5) : 5;
};
const six = function(f) {
  return f ? f(6) : 6;
};
const seven = function(f) {
  return f ? f(7) : 7;
};
const eight = function(f) {
  return f ? f(8) : 8;
};
const nine = function(f) {
  return f ? f(9) : 9;
};

const plus = function(n1) {
  return function(n2) {
    return n2 + n1;
  };
};
const minus = function(n1) {
  return function(n2) {
    return n2 - n1;
  };
};
const times = function(n1) {
  return function(n2) {
    return n2 * n1;
  };
};
const dividedBy = function(n1) {
  return function(n2) {
    return Math.floor(n2 / n1);
  };
};
console.log(five(plus(six())));

// 6 - http://www.codewars.com/kata/get-the-middle-character
const getMiddle = function(s) {
  const even = (num) => !(num % 2);
  const middle = Math.round(s.length / 2);

  if (even(s.length)) {
    return s.slice(middle - 1, middle + 1);
  }

  return s.slice(middle - 1, middle);
};
console.log(getMiddle('testing'));

// 7 - http://www.codewars.com/kata/partition-on
function partitionOn (pred, items) {
  let trueArr = [];
  let falseArr = [];
  let resultArr = [];

  for (let i = 0; i < items.length; i++) {
    if (pred(items[i])) {
      trueArr.push(items[i]);
    } else {
      falseArr.push(items[i]);
    }
  }

  resultArr = [...falseArr, ...trueArr];
  resultArr.forEach((item, index) => {
    items[index] = item 
  });

  return falseArr.length;
}

// 8 - http://www.codewars.com/kata/word-count
const countWords = function(str) {
  const letterStr = str.match(/[^\s]+/g) || [];
  return letterStr.length;
};
console.log(countWords('I am string'));

// 9 - https://www.codewars.com/kata/find-the-odd-int/
const findOdd = function(A) {
  let tempArr = [];

  for (let i = 0; i < A.length; i++) {
    tempArr = A.filter((value) => value === A[i]);

    if (tempArr.length % 2 === 1) {
      return tempArr[0];
    }
  }

  return [];
};
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));

// 10 - https://www.codewars.com/kata/find-the-parity-outlier
const findOutlier = function(integers) {
  const oddArr = [];
  const evenArr = [];

  integers.forEach((integer) => {
    integer % 2 !== 0 ? oddArr.push(integer) : evenArr.push(integer);
  });

  if (oddArr.length === 1) {
    return oddArr[0];
  }

  return evenArr[0];
};
console.log(findOutlier([70348169, -21048669, -37158567, -72614069, -15491459, 160941471, 8]));

// 11 - https://www.codewars.com/kata/zipwith
const zipWith = function(fn, a0, a1) {
  let minArr = a0.length < a1.length ? a0 : a1;

  return minArr.map((item, index) => fn(a0[index], a1[index]));
};

// 12 - https://www.codewars.com/kata/filter-the-number
const FilterString = function(value) {
  return +value.match(/\d/g).join('');
};
console.log(FilterString('12fd'));

// 13 https://www.codewars.com/kata/n-th-fibonacci
const nthFibo = function(n) {
  const fibArr = [0, 1];

  for (let i = 0; i < n; i++) {
    fibArr.push(fibArr[i] + fibArr[i + 1]);
  }

  return fibArr[n - 1];
};
console.log(nthFibo(4));

// 14 - https://www.codewars.com/kata/cat-and-mouse-2d-version/
const catMouse = function(map, moves) {
  const field = [];
  const maxMoves = moves;
  let gameMap = map;
  let catCoords = null;
  let mouseCoords = null;

  gameMap = map.split('\n');

  gameMap.forEach((line, index) => {
    if (line.includes('C')) {
      catCoords = { x: line.indexOf('C'), y: index };
    }

    if (line.includes('m')) {
      mouseCoords = { x: line.indexOf('m'), y: index };
    }

    field.push([line]);
  });

  if (!catCoords || !mouseCoords) {
    return 'boring without two animals';
  }

  const xMove = Math.abs(catCoords.x - mouseCoords.x);
  const yMove = Math.abs(catCoords.y - mouseCoords.y);

  if (xMove + yMove <= maxMoves) {
    return 'Caught!';
  }

  return 'Escaped!';
};
console.log(catMouse('..C...... ......... ........m', 5));

// 15 - https://www.codewars.com/kata/duplicate-encoder
const duplicateEncode = function(word) {
  const wordArr = word.toLowerCase().split('');
  const result = [];

  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr.indexOf(wordArr[i]) === wordArr.lastIndexOf(wordArr[i])) {
      result.push('(');
    } else {
      result.push(')');
    }
  }

  return result.join('');
};
console.log(duplicateEncode('Success'));

// 16 - https://www.codewars.com/kata/5693239fb761dc8670000001
const findAdditiveNumbers = function(num) {
  const numArr = num.split('');
  let firstNum = numArr[0];
  let secondNum = numArr[1];
  let nextNum;
  let testResult;
  let result = [];
  let biggestRes = [];

  for (let i = 0; i < numArr.length; i++) {
    for (let b = i + 2; b < numArr.length; b++) {
      if (secondNum.startsWith('0') && secondNum.length > 1) {
        secondNum = secondNum.replace(/0/g, '');
      }
      if (firstNum.startsWith('0') && secondNum.length > 1) {
        firstNum = firstNum.replace(/0/g, '');
      }

      nextNum = String(+firstNum + +secondNum);
      testResult = numArr.slice(firstNum.length + secondNum.length, firstNum.length + secondNum.length + nextNum.length).join('');

      if (nextNum === testResult) {
        biggestRes = [firstNum, secondNum, nextNum];
      }

      secondNum += numArr[b];
    }

    firstNum += numArr[i + 1];
    secondNum = numArr[i + 2];
  }

  result = result.concat(biggestRes);

  if (result.length) {
    while (result.join('').length < num.length) {
      result.push(String(+result[result.length - 1] + +result[result.length - 2]));
    }
  }

  return result.join('') === num ? result : [];
};
console.log(findAdditiveNumbers('101'));

// 17 - https://www.codewars.com/kata/576757b1df89ecf5bd00073b
const towerBuilder = function(nFloors) {
  const arr = [];
  const floorLength = nFloors * 2 - 1;
  let floor = [];

  for (let i = 0; i < nFloors; i++) {
    floor = [];
    floor.length = floorLength;

    for (let b = 0; b < floor.length; b++) {
      floor[b] = '*';

      if (i) {
        for (let k = 0; k < i; k++) {
          floor[k] = ' ';
          floor[floorLength - 1 - k] = ' ';
        }
      }
    }

    arr.push(floor.join(''));
  }

  return arr.reverse();
};
console.log(towerBuilder(2));

// 18 - https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
const wave = function(str) {
  const resultArr = [];
  let cloneStr;

  for (let i = 0; i < str.length; i++) {
    if (str[i].trim()) {
      cloneStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
      resultArr.push(cloneStr);
    }
  }

  return resultArr;
};
console.log(wave('two words'));

// 19 - https://www.codewars.com/kata/59d398bb86a6fdf100000031
const stringBreakers = function(n, string) {
  const str = string.replace(/\s/g, '');
  const result = [];

  for (let i = 1; i < str.length + 1; i++) {
    result.push(str[i - 1]);
    if (i % n === 0 && i > 0 && i !== str.length) {
      result.push('\n');
    }
  };

  return result.join('');
};
console.log(stringBreakers(5, 'This is an example string'));

// 20 - https://www.codewars.com/kata/514a024011ea4fb54200004b
const domainName = function(url) {
  let copyUrl = url;

  copyUrl = copyUrl.replace('http://', '');
  copyUrl = copyUrl.replace('https://', '');
  copyUrl = copyUrl.replace('www.', '');

  return copyUrl.split('.')[0];
};
console.log(domainName('http://google.com'));