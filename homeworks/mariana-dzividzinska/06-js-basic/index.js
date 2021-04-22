//task 1 http://www.codewars.com/kata/opposite-number
function opposite(number) {
    return -number;
}

//task 2 link http://www.codewars.com/kata/basic-mathematical-operations
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
            return;
    }
}

//task 3 link http://www.codewars.com/kata/basic-mathematical-operations
function printArray(array) {
    return array.join(',');
}

//task 4 link http://www.codewars.com/kata/transportation-on-vacation
function rentalCarCost(d) {
    const total = 40 * d;
    if (d >= 7) return total - 50;
    if (d >= 3) return total - 20;
    return total;
}

//task 5 link http://www.codewars.com/kata/calculating-with-functions
function zero(func) {
    return func ? func(0) : 0;
}

function one(func) {
    return func ? func(1) : 1;
}

function two(func) {
    return func ? func(2) : 2;
}

function three(func) {
    return func ? func(3) : 3;
}

function four(func) {
    return func ? func(4) : 4;
}

function five(func) {
    return func ? func(5) : 5;
}

function six(func) {
    return func ? func(6) : 6;
}

function seven(func) {
    return func ? func(7) : 7;
}

function eight(func) {
    return func ? func(8) : 8;
}

function nine(func) {
    return func ? func(9) : 9;
}

function plus(v2) {
    return (v1) => v1 + v2;
}

function minus(v2) {
    return (v1) => v1 - v2;
}

function times(v2) {
    return (v1) => v1 * v2;
}

function dividedBy(v2) {
    return (v1) => Math.floor(v1 / v2);
}

//task 6 link http://www.codewars.com/kata/get-the-middle-character
function getMiddle(s) {
    return s.length % 2 === 0 ? s[s.length / 2 - 1] + s[s.length / 2] : s[Math.floor(s.length / 2)];
}

//task 7 link http://www.codewars.com/kata/partition-on
function partitionOn(pred, items) {
    let trueItems = [];
    let falseItems = [];

    items.forEach(item => {
        if (pred(item)) trueItems.push(item);
        else falseItems.push(item);
    });

    items.length = 0;
    items.push(...falseItems, ...trueItems);

    return falseItems.length;
}

// task 8 link http://www.codewars.com/kata/word-count
function countWords(str) {
    const strArr = str.trim().split(/\s+/);
    return strArr[0] === '' ? 0 : strArr.length;
}

//task 9 link https://www.codewars.com/kata/find-the-odd-int/
function findOdd(A) {
    for (let i = 0; i < A.length; i++) {
        const count = A.reduce((acc, currElem) => {
            if (currElem === A[i]) return acc + 1;
            else return acc;
        }, 0);

        if (count % 2 === 1) return A[i];
    }

    return 0;
}

//task 10 link https://www.codewars.com/kata/find-the-parity-outlier
function findOutlier(integers) {
    let evenCount = 0;
    let oddCount = 0;
    let lastEvenNumIndex = -1;
    let lastOddNumIndex = -1;

    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            evenCount += 1;
            lastEvenNumIndex = i;
        } else {
            oddCount += 1;
            lastOddNumIndex = i;
        }

        if (lastOddNumIndex !== -1 && evenCount >= 2) {
            return integers[lastOddNumIndex];
        }
        if (lastEvenNumIndex !== -1 && oddCount >= 2) {
            return integers[lastEvenNumIndex];
        }
    }
}

//task 11 link https://www.codewars.com/kata/zipwith
function zipWith(fn, a0, a1) {
    const resLength = a0.length > a1.length ? a1.length : a0.length;
    let result = [];

    for (let i = 0; i < resLength; i++) {
        result[i] = fn(a0[i], a1[i]);
    }

    return result;
}

//task 12 link https://www.codewars.com/kata/filter-the-number
const FilterString = function (value) {
    let countStr = '';

    for (let i = 0; i <= value.length; i++) {
        if (!isNaN(parseInt(value[i], 10))) {
            countStr += value[i];
        }
    }

    return parseInt(countStr, 10);
}

//task 13 link https://www.codeFilter the numberwars.com/kata/n-th-fibonacci
function nthFibo(n) {
    return n <= 2 ? n - 1 : nthFibo(n - 1) + nthFibo(n - 2);
}

// task 14 link https://www.codewars.com/kata/cat-and-mouse-2d-version/
function catMouse(map, moves) {
    const mapArr = map.split('\n');
    const mapArr2 = mapArr.map(el => el.split(''));
    let catX = -1;
    let catY = -1;
    let mouseX = -1;
    let mouseY = -1;

    for (let i = 0; i < mapArr2.length; i++) {
        for (let j = 0; j < mapArr2[i].length; j++) {
            if (mapArr2[i][j] === 'C') {
                catX = i;
                catY = j;
            }
            if (mapArr2[i][j] === 'm') {
                mouseX = i;
                mouseY = j;
            }
        }
    }

    if (catX === -1 || catY === -1 || mouseX === -1 || mouseY === -1) return 'boring without two animals';
    if (Math.abs(mouseX - catX) + Math.abs(mouseY - catY) <= moves) return 'Caught!';
    return 'Escaped!';
}

//task 15 link https://www.codewars.com/kata/duplicate-encoder
function duplicateEncode(word) {
    const wordArr = word.toLowerCase().split('');

    return wordArr.map((element, index, arr) => {
        const startIndex = arr.indexOf(element);
        const lastIndex = arr.lastIndexOf(element);
        return lastIndex === startIndex ? '(' : ')';
    }).join('');
}

//task 16 link https://www.codewars.com/kata/5693239fb761dc8670000001
function findAdditiveNumbers(num) {
    const checkNext = (expectedNext, startIndex) => {
        const nextLength = expectedNext.toString().length;
        return parseInt(num.substring(startIndex, startIndex + nextLength), 10) === expectedNext;
    };

    let prev = -1;
    let curr = -1;
    let expectedNext = -1;
    let breakingFlag = false;
    let result = [];

    for (let i = 0; i < num.length; i++) {
        let prevLength = 1;
        let currLength = 1;

        if (prev === -1) {
            const maxPrevLength = num[i] === '0' ? 1 : num.length - i;

            while (prevLength <= maxPrevLength) {
                prev = num.substring(i, i + prevLength);
                currLength = 1;
                const maxCurrLength = num[i + prevLength] === '0' ? 1 : num.length - i - currLength;

                while (currLength <= maxCurrLength) {
                    curr = num.substring(i + prevLength, i + prevLength + currLength);
                    expectedNext = parseInt(prev, 10) + parseInt(curr, 10);

                    if (checkNext(expectedNext, i + prevLength + currLength)) {
                        result.push(prev, curr, expectedNext.toString());
                        i = i - 1 + prevLength + currLength + expectedNext.toString().length;
                        breakingFlag = true;
                        break;
                    }

                    currLength++;
                }

                if (breakingFlag) break;
                prevLength++;
                if (prevLength == num.length - 1) return [];
            }
        } else {
            expectedNext = parseInt(prev, 10) + parseInt(curr, 10);

            if (checkNext(expectedNext, i)) {
                result.push(expectedNext.toString());
                i = i - 1 + expectedNext.toString().length;
            } else return [];
        }
        prev = curr;
        curr = expectedNext;
        expectedNext = -1;
    }

    return result;
}

// task 17 link https://www.codewars.com/kata/576757b1df89ecf5bd00073b
function towerBuilder(nFloors) {
    const size = (nFloors * 2) - 1;
    let result = [];

    for (let i = 1; i <= size; i += 2) {
        const spaceCount = (size - i) / 2;
        result.push(' '.repeat(spaceCount) + '*'.repeat(i) + ' '.repeat(spaceCount));
    }

    return result;
}

//task 18 link https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
function wave(str) {
    let result = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') continue;

        let strArr = str.split('');
        strArr.splice(i, 1, str[i].toUpperCase());
        result.push(strArr.join(''));
    }

    return result;
}

//task 19 link https://www.codewars.com/kata/59d398bb86a6fdf100000031
function stringBreakers(n, string) {
    string = string.replace(/\s+/g, '');
    let resultStr = string.slice(0, n);

    for (let i = n; i < string.length; i = i + n) {
        resultStr += ('\n' + string.slice(i, i + n));
    }

    return resultStr;
}

//task 20 https://www.codewars.com/kata/514a024011ea4fb54200004b
function domainName(url) {
    url = url.replace(/(https?:\/\/)?(www.)?/i, '');
    url = url.split('.')[0];
    url = url.split('/')[0];

    return url;
}