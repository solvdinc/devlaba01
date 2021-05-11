//task 1 link https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
    return arr.reduce((acc, value) => {
        return value > 0 ? acc += value : acc;
    }, 0);
}

//task 2 link https://www.codewars.com/kata/5a3e1319b6486ac96f000049
function pairs(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i += 2) {
        if (Math.abs(arr[i] - arr[i + 1]) === 1) {
            count += 1;
        }
    }

    return count;
}

//task 3 link https://www.codewars.com/kata/5aba780a6a176b029800041c
function maxMultiple(divisor, bound) {
    for (let i = bound; i > 0; i--) {
        if (i % divisor === 0) return i;
    }
}

//task 4 link https://www.codewars.com/kata/514a6336889283a3d2000001
function getEvenNumbers(numbersArray) {
    return numbersArray.filter(num => num % 2 === 0);
}

//task 5 link https://www.codewars.com/kata/5a090c4e697598d0b9000004
function solve(arr) {
    const arrLength = arr.length;
    let res = [];

    arr.sort((a, b) => a - b);
    for (let i = 0; i < arrLength / 2; i++) {
        res.push(arr[arrLength - 1 - i], arr[i]);
    }
    if (arrLength % 2 !== 0) res.pop();

    return res;
}

//task 6 link https://www.codewars.com/kata/566044325f8fddc1c000002c
function evenChars(string) {
    if (string.length < 2 || string.length > 100)
        return 'invalid string';

    return string.split('').reduce((acc, el, index) => {
        return index % 2 === 1 ? acc.concat(el) : acc;
    }, []);
}

//task 7 link https://www.codewars.com/kata/545a4c5a61aa4c6916000755
let gimme = function (inputArray) {
    const copyArr = [...inputArray];
    copyArr.sort((a, b) => a - b);
    return inputArray.indexOf(copyArr[1]);
};

//task 8 link https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = arr => {
    return arr.reverse().reduce((acc, value, index) => {
        return value ? acc + Math.pow(2, index) : acc;
    }, 0);
}

//task 9 link https://www.codewars.com/kata/585d7d5adb20cf33cb000235
function findUniq(arr) {
    const repeatableNum = arr.slice(0, 3).sort((a, b) => a - b)[1];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== repeatableNum) return arr[i];
    }
}

//task 10 link https://www.codewars.com/kata/581e014b55f2c52bb00000f8
function decipherThis(str) {
    return str.split(" ").map((word) => {
        const charCode = word.split('').filter(char => !isNaN(parseInt(char, 10))).join('');
        let newWord = String.fromCharCode(parseInt(charCode, 10));

        if (charCode.length === word.length) return newWord;
        if (word.length - charCode.length === 1) return newWord += word[charCode.length];
        newWord += word[word.length - 1] + word.slice(charCode.length + 1, word.length - 1) + word[charCode.length];

        return newWord;
    }).join(' ');
}

//task 11 link https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
function sortArray(array) {
    const oddArray = array.filter(num => Math.abs(num) % 2 === 1).sort((a, b) => b - a);

    return array.reduce((acc, value) => {
        if (value % 2 === 0) return acc.concat(value);
        return acc.concat(oddArray.pop());
    }, []);
}

//Optional tasks
//task 2 link https://www.codewars.com/kata/52597aa56021e91c93000cb0
const moveZeros = function (arr) {
    let resArr = arr.filter(el => el !== 0);
    const resArrLength = resArr.length;
    resArr.length = arr.length;
    return resArr.fill(0, resArrLength);
}

//task 3 link https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3
function findUniq(arr) {
    const repeateble = arr.slice(0, 3).map(el => {
        return el.toLowerCase().replace(/\s/g, '').split('').sort();
    }).sort()[1];

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i].toLowerCase().replace(/\s/g, '');
        if ((!repeateble.length && str.length) || (repeateble.length && !str.length)) return arr[i];
        for (let j = 0; j < str.length; j++) {
            if (repeateble.indexOf(str[j]) === -1) return arr[i];
        }
    }
}