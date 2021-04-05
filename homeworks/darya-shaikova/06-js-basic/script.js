// task 1 https://www.codewars.com/kata/opposite-number

function opposite(number) {
    return (-number);
}

// task 2 https://www.codewars.com/kata/basic-mathematical-operations

function basicOp(operation, value1, value2) {
    if (operation == '+') {
        return value1 + value2;
    } else if (operation == '-') {
        return value1 - value2;
    } else if (operation == '*') {
        return value1 * value2;
    } else if (operation == '/') {
        return value1 / value2
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
    if (!operation)
        return number;
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
    }
}

function minus(x) {
    return function(y) {
        return y - x;
    }
}

function times(x) {
    return function(y) {
        return y * x;
    }
}

function dividedBy(x) {
    return function(y) {
        return Math.floor(y / x);
    }
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
    let truth = items.filter(pred);
    let wrong = items.filter(function(a) { return !pred(a) });
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