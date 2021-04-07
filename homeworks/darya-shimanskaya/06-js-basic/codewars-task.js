// task 1 link http://www.codewars.com/kata/opposite-number
function opposite(number) {
    return(-number);
}

// task 2 link http://www.codewars.com/kata/basic-mathematical-operations
function basicOp(operation, value1, value2) {
    let result = 0;
    if (operation === '+') result = value1 + value2;
    else if (operation === '-') result = value1 - value2;
    else if (operation === '*') result = value1 * value2;
    else if (operation === '/') result = value1 / value2;
    return result;
}

// task 3 link http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
function printArray(array) {
    return array.join();
}

// task 4 link http://www.codewars.com/kata/transportation-on-vacation
function rentalCarCost(d) {
    let total = 40 * d;
    if (d < 3) {
        total;
    } else if (d >= 7) {
        total -= 50;
    } else if (d >= 3 < 7) {
        total -= 20;
    }
    return total;
}

// task 5 link http://www.codewars.com/kata/calculating-with-functions
function zero(par) { return par ? par(0) : 0; }
function one(par) { return par ? par(1) : 1; }
function two(par) { return par ? par(2) : 2; }
function three(par) { return par ? par(3) : 3; }
function four(par) { return par ? par(4) : 4; }
function five(par) { return par ? par(5) : 5; }
function six(par) { return par ? par(6) : 6; }
function seven(par) { return par ? par(7) : 7; }
function eight(par) { return par ? par(8) : 8; }
function nine(par) { return par ? par(9) : 9; }

function plus(b) { return function (a) { return a + b; }; }
function minus(b) { return function (a) { return a - b; }; }
function times(b) { return function (a) { return a * b; }; }
function dividedBy(b) { return function (a) { return a / b; }; }

// task 6 link http://www.codewars.com/kata/get-the-middle-character
function getMiddle(s) {
    const sLen = s.length;
    return s.slice((sLen - 1) / 2, sLen / 2 + 1);
}

// task 7 link http://www.codewars.com/kata/partition-on
function partitionOn(pred, items) {
    const itemsTrue = [];
    const itemsFalse = [];

    items.map((item, index) => {
        (pred(item)) ? itemsTrue.push(item) : itemsFalse.push(item);
    });
    items.length = 0;
    items.push(...itemsFalse, ...itemsTrue);
    return itemsFalse.length;
}

// task 8 link http://www.codewars.com/kata/word-count
function countWords(str) {
    const nStr = str.trim().split(/\s+/);
    let count = 0;
    for (let i = 0; i < nStr.length; i += 1) {
        if (nStr[i] !== '') {
            count += 1;
        }
    }
    return count;
}

// task 9 link https://www.codewars.com/kata/find-the-odd-int/
function findOdd(A) {
    for (let i = 0; i < A.length; i += 1) {
        let count = 0;
        for (let j = 0; j < A.length; j += 1) {
            if (A[i] === A[j]) count += 1;
        }
        if (count % 2 !== 0) return A[i];
    }
    return 0;
}

// task 10 link https://www.codewars.com/kata/find-the-parity-outlier
function findOutlier(integers) {
    const even = integers.filter((item) => item % 2 === 0);
    const odd = integers.filter((item) => item % 2 !== 0);
    return odd.length === 1 ? odd[0] : even[0];
}

// task 11 https://www.codewars.com/kata/zipwith
function zipWith(fn, a0, a1) {
    const result = [];
    const length = Math.min(a0.length, a1.length);
    for (let i = 0; i < length; i += 1) {
        result.push(fn(a0[i], a1[i]));
    } return result;
}

// task 12 https://www.codewars.com/kata/filter-the-number
const FilterString = function FilterString(value) {
    const num = parseInt(value.split(/\D/g).join(''), 10);
    return num;
};

// task 13 https://www.codewars.com/kata/n-th-fibonacci
function nthFibo(n) {
    const result = (n <= 2) ? n - 1 : nthFibo(n - 1) + nthFibo(n - 2);
    return result;
}

// task 14 link https://www.codewars.com/kata/cat-and-mouse-2d-version/
function catMouse(map, moves) {
    const nMap = map.split('\n');
    const cat = nMap.find((findC) => findC.includes('C'));
    const mouse = nMap.find((findM) => findM.includes('m'));

    if (!cat || !mouse) return 'boring without two animals';

    const catX = nMap.map((cX) => cX.indexOf('C')).filter((cX) => cX > -1);
    const catY = nMap.map((cY) => cY.includes('C')).indexOf(true);
    const mouseX = nMap.map((mX) => mX.indexOf('m')).filter((mX) => mX > -1);
    const mouseY = nMap.map((mY) => mY.includes('m')).indexOf(true);

    return Math.abs(catX - mouseX) + Math.abs(catY - mouseY) <= moves ? 'Caught!' : 'Escaped!';
}

// task 15 link https://www.codewars.com/kata/duplicate-encoder
function duplicateEncode(word) {
    const nWord = word.toLowerCase().split('')
        .map((item) => (word.indexOf(item) !== word.lastIndexOf(item) ? ')' : '('));
    return nWord.join('');
}

// task 17 link https://www.codewars.com/kata/576757b1df89ecf5bd00073b
function towerBuilder(nFloors) {
    const tower = [];
    for (let i = 0; i < nFloors; i += 1) tower[i] = ' '.repeat(nFloors - i - 1) + '*'.repeat(2 * i + 1) + ' '.repeat(nFloors - i - 1);
    return tower;
}

// task 18 link https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
function wave(str) {
    const result = [];
    const { length } = str;
    for (let i = 0; i < length; i += 1) {
        if (str[i] !== ' ') result.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
    }
    return result;
}

// task 19 link https://www.codewars.com/kata/59d398bb86a6fdf100000031
function stringBreakers(n, string) {
    const nString = string.replace(/\s/g, '');
    const result = [];

    for (let i = 0; i < nString.length; i += n) result.push(nString.slice(i, i + n));

    return result.join('\n');
}

// task 20 link https://www.codewars.com/kata/514a024011ea4fb54200004b
function domainName(url) {
    return url.replace('http://', '').replace('https://', '').replace('www.', '').split('.')[0];
}