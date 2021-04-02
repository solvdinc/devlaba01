/* eslint-disable func-names */
/* eslint-disable no-console */
// Opposite number - 1
const oppositeNumber = function (number) {
  return -number;
};
console.log(oppositeNumber(1));

// Basic Mathematical Operations - 2
const basicOp = function (operation, value1, value2) {
  // eslint-disable-next-line no-eval
  return eval(`${value1} ${operation} ${value2}`);
};
console.log(basicOp('+', 2, 2));
// DUE TO RULE 6.4 Airbnb I SUGGEST ANOTHER SOLUTION
const basicOp1 = function (operation, value1, value2) {
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

// Printing Array elements with Comma delimiters - 3
const printArray = function (array) {
  return array.join(',');
};
console.log(printArray(['h', 'o', 'l', 'a']));

// Transportation on vacation - 4
const rentalCarCost = function (d) {
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

// Calculating with Functions - 5
const zero = function (f) {
  return f ? f(0) : 0;
};
const one = function (f) {
  return f ? f(1) : 1;
};
const two = function (f) {
  return f ? f(2) : 2;
};
const three = function (f) {
  return f ? f(3) : 3;
};
const four = function (f) {
  return f ? f(4) : 4;
};
const five = function (f) {
  return f ? f(5) : 5;
};
const six = function (f) {
  return f ? f(6) : 6;
};
const seven = function (f) {
  return f ? f(7) : 7;
};
const eight = function (f) {
  return f ? f(8) : 8;
};
const nine = function (f) {
  return f ? f(9) : 9;
};

const plus = function (n1) {
  return function (n2) {
    return n2 + n1;
  };
};
const minus = function (n1) {
  return function (n2) {
    return n2 - n1;
  };
};
const times = function (n1) {
  return function (n2) {
    return n2 * n1;
  };
};
const dividedBy = function (n1) {
  return function (n2) {
    return Math.floor(n2 / n1);
  };
};
console.log(five(plus(six())));

// Get the Middle Character - 6
const getMiddle = function (s) {
  const even = (num) => !(num % 2);
  const middle = Math.round(s.length / 2);

  if (even(s.length)) {
    return s.slice(middle - 1, middle + 1);
  }

  return s.slice(middle - 1, middle);
};
console.log(getMiddle('testing'));

// Word Count - 8
const countWords = function (str) {
  const letterStr = str.match(/[^\s]+/g) || [];
  return letterStr.length;
};
console.log(countWords('I am string'));
