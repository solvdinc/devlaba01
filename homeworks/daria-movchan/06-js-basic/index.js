//task 1 http://www.codewars.com/kata/opposite-number
function opposite(number) {
    if (number != 0) {
        return number * -1;
    } else {
        return number;
    }
}

//task 2 http://www.codewars.com/kata/basic-mathematical-operations
function basicOp(operation, value1, value2) {
    if (operation === '+') {
        return value1 + value2;
    } else {
        if (operation === '-') {
            return value1 - value2;
        } else {
            if (operation === '*') {
                return value1 * value2;
            } else {
                return value1 / value2;
            }
        }
    }
}

//task 3 http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
function printArray(array) {
    return array.join(',');
}

//task 4 http://www.codewars.com/kata/transportation-on-vacation
function rentalCarCost(d) {
    if (d >= 7) {
        return d * 40 - 50;
    } else if (d >= 3) {
        return d * 40 - 20;
    } else {
        return d * 40;
    }
}

//task 5 http://www.codewars.com/kata/calculating-with-functions
function zero(op) {
    if (op) {
        return op(0);
    }
    return 0
};

function one(op) {
    if (op) {
        return op(1);
    }
    return 1
}

function two(op) {
    if (op) {
        return op(2);
    }
    return 2
}

function three(op) {
    if (op) {
        return op(3);
    }
    return 3
}

function four(op) {
    if (op) {
        return op(4);
    }
    return 4
}

function five(op) {
    if (op) {
        return op(5);
    }
    return 5
}

function six(op) {
    if (op) {
        return op(6);
    }
    return 6
}

function seven(op) {
    if (op) {
        return op(7);
    }
    return 7
}

function eight(op) {
    if (op) {
        return op(8);
    }
    return 8
}

function nine(op) {
    if (op) {
        return op(9);
    }
    return 9
}

function plus(second) {
    return function (first) {
        return first + second;
    }
}

function minus(second) {
    return function (first) {
        return first - second;
    }
}

function times(second) {
    return function (first) {
        return first * second;
    }
}

function dividedBy(second) {
    return function (first) {
        return Math.floor(first / second);
    }
}

//task 6 http://www.codewars.com/kata/get-the-middle-character
function getMiddle(s) {
    const array = s.split("");
    const firstEven = array.length / 2 - 1;
    const secondEven = array.length / 2;
    const odd = (array.length - 1) / 2;
    let result;

    if (array.length % 2 === 0) {
        console.log(s)
        return result = (array.slice(firstEven, secondEven + 1)).join("");
    } else {
        console.log(s)
        return result = (array.slice(odd, odd + 1)).join();
    }
}

//task 7 http://www.codewars.com/kata/partition-on
function partitionOn(f, items) {
    const odd = [];
    const even = items.reduce((acc, item) => {
        (f(item) ? acc : odd).push(item);
        return acc;
    }, [])
    items.splice(0, items.length, ...[...odd, ...even]);

    return odd.length;
}

//task 8 http://www.codewars.com/kata/word-count
function countWords(str) {
    return (str.match(/[^\s]+/g) || []).length;
}

//task 9 https://www.codewars.com/kata/find-the-odd-int/
function findOdd(A) {
    const size = A.length;

    for (let i = 0; i < size; i++) {
        let counter = 0;

        for (let j = 0; j < size; j++) {
            if (A[i] == A[j])
                counter++;
        }
        if (counter % 2 != 0)
            return A[i];
    }
    return -1;
}

//task 10 https://www.codewars.com/kata/find-the-parity-outlier
function findOutlier(integers) {
    const even = integers.filter(i => i % 2 === 0);
    return even.length > 1 ? integers.filter(i => i % 2 !== 0)[0] : even[0];
}

//task 11 https://www.codewars.com/kata/zipwith
function zipWith(fn, a0, a1) {
    return a0.reduce((acc, item, index) => {
        return a1[index] !== undefined ? [...acc, fn(item, a1[index])] : acc;
    }, [])
}

//task 12 https://www.codewars.com/kata/filter-the-number

//task 13 https://www.codewars.com/kata/n-th-fibonacci
function nthFibo(n) {
    return f(n - 1 || 0);
}

const f = (n) => {
    return n <= 1 ? n : f(n - 1) + f(n - 2)
}

//task 14 https://www.codewars.com/kata/cat-and-mouse-2d-version/
function catMouse(map, moves) {

    const rows = map.split('\n');
    const mapWidth = rows[0].length;

    const mPosH = map.indexOf('m') % (mapWidth + 1);
    const cPosH = map.indexOf('C') % (mapWidth + 1);
    if (!~mPosH || !~cPosH) return 'boring without two animals';
    const mPosV = rows.findIndex((i) => i.indexOf('m') > -1);
    const cPosV = rows.findIndex((i) => i.indexOf('C') > -1);
    const hSteps = Math.abs(mPosH - cPosH);
    const vSteps = Math.abs(mPosV - cPosV);

    return moves < hSteps + vSteps ? 'Escaped!' : 'Caught!';
}

//task 15 https://www.codewars.com/kata/duplicate-encoder
const duplicateEncode = (_) => {
    const word = _.toLowerCase();
    return word.split('').reduce((acc, char) => {
        return acc + (word.indexOf(char) === word.lastIndexOf(char) ? '(' : ')');
    }, '')
}

//task 16 https://www.codewars.com/kata/5693239fb761dc8670000001

//task 17 https://www.codewars.com/kata/576757b1df89ecf5bd00073b
function towerBuilder(n) {
    const w = 2 * n - 1;
    return Array.from({length: n}).map((v, i) => {
        return ' '.repeat(i) + '*'.repeat(w - (2 * i)) + ' '.repeat(i);
    }).reverse();
}

//task 18 https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
const wave = (w) => {
    return [...w].map((a, i) => {
        return w.slice(0, i) + a.toUpperCase() + w.slice(i + 1)
    }).filter(a => a != w)
}

//task 19 https://www.codewars.com/kata/59d398bb86a6fdf100000031

//task 20 https://www.codewars.com/kata/514a024011ea4fb54200004b
function domainName(url) {
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
}