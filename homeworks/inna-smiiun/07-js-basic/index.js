//task 1 https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
    let posSum = 0;

    for (let i = 0; i < arr.length; i + 1) {
        if (arr[i] > 0) {
            posSum += arr[i];
        }
    }
    return posSum;
}

//task 2 https://www.codewars.com/kata/5a3e1319b6486ac96f000049
function pairs(ar) {
    let countPairs = 0;

    for (let i = 0; i < ar.length - 1; i += 2) {
        if (ar[i] + 1 === ar[i + 1] || ar[i] === ar[i + 1] + 1) {
            countPairs += 1;
        }
    }

    return countPairs;
}

//task 3 https://www.codewars.com/kata/5aba780a6a176b029800041c
function maxMultiple(divisor, bound) {
    return Math.floor(bound / divisor) * divisor;
}

//task 4 https://www.codewars.com/kata/514a6336889283a3d2000001
function getEvenNumbers(numbersArray) {
    return numbersArray.filter((item) => item % 2 === 0);
}

//task 5 https://www.codewars.com/kata/5a090c4e697598d0b9000004
function solve(arr) {
    let sortArr = arr.slice().sort((item, nextItem) => item - nextItem);

    return arr.map((item, i) => (i % 2 === 0 ? sortArr.pop() : sortArr.shift()));
}

//task 6 https://www.codewars.com/kata/566044325f8fddc1c000002c
function evenChars(string) {
    if (string.length < 2 || string.length > 100) {
        return 'invalid string';
    }

    return string.split('').filter((item, i) => i % 2 !== 0);
}

//task 7 https://www.codewars.com/kata/545a4c5a61aa4c6916000755
let gimme = function (inputArray) {
    let middleEl = inputArray.slice().sort((x, y) => x - y)[1];
    return inputArray.indexOf(middleEl);
};

//task 8 https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = (arr) => parseInt(arr.join(''), 2);

//task 9 https://www.codewars.com/kata/585d7d5adb20cf33cb000235
function findUniq(arr) {
    return arr.find((item) => arr.indexOf(item) === arr.lastIndexOf(item));
}

//task 10 https://www.codewars.com/kata/581e014b55f2c52bb00000f8
function decipherThis(str) {
    let strWithoutCodes = str.replace(/(\d)+/g, (chr) => String.fromCharCode(chr));
    let array = strWithoutCodes.match(/[^\s]+/g);
    for (let i = 0; i < array.length; i++) {
        if (array[i].length >= 3) {
            let word = array[i].split('');
            let lastChr = word[word.length - 1];
            word[word.length - 1] = word[1];
            word[1] = lastChr;
            array[i] = word.join('');
        }
    }
    return array.join(' ');
}

//task 11 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
function sortArray(array) {
    let oddArr = array.filter((item) => item % 2).sort((a, b) => a - b);
    return array.map((item) => (item % 2 === 1 ? oddArr.shift() : item));
}
