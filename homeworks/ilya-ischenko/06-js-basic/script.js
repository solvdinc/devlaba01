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
