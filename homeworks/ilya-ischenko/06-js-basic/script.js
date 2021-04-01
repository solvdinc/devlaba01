// Opposite number - 1
const oppositeNumber = function (number) {
	return -number;
};
console.log(oppositeNumber(1));

// Basic Mathematical Operations - 2
const basicOp = function (operation, value1, value2) {
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
    };
};
console.log(basicOp1('+', 2, 5));