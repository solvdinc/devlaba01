// task 1 https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
    const sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i]
        }
    }

    return sum
}

// task 2 https://www.codewars.com/kata/5a3e1319b6486ac96f000049

function pairs(ar) {
    const count = 0;

    for (let i = 0; i < ar.length; i += 2) {
        if (ar[i] + 1 === ar[i + 1] || ar[i] - 1 === ar[i + 1]) {
            count++
        }
    }

    return count
};


// task 3 https://www.codewars.com/kata/5aba780a6a176b029800041c

function maxMultiple(divisor, bound) {
    return Math.floor(bound / divisor) * divisor// or  return bound - bound % divisor
}

// task 4 https://www.codewars.com/kata/514a6336889283a3d2000001

function getEvenNumbers(numbersArray) {
    return numbersArray.filter(el => el % 2 === 0)
}

// console.log(getEvenNumbers([2, 4, 5, 6, 11, 13, 17, 18]))

// task 5 https://www.codewars.com/kata/5a090c4e697598d0b9000004

function solve(arr) {
    const sorted = arr.slice().sort((item, nextItem) => item - nextItem);

    return arr.map((item, index) => (index % 2 === 0 ? sorted.pop() : sorted.shift()));
}

// task 6 https://www.codewars.com/kata/566044325f8fddc1c000002c

function evenChars(string) {
    if (string.length < 2 || string.length > 100) {
        return "invalid string"
    }

    return string.split('').filter((el, index) => index % 2 != 0)
}

//   task 7 https://www.codewars.com/kata/545a4c5a61aa4c6916000755

// function gimme(inputArray) {
//     const sortedArr = inputArray.slice().sort((a, b) => a - b);
//     const midSortedArr = sortedArr[Math.floor(sortedArr.length / 2)]

//     for (let i = 0; i < inputArray.length; i++) {
//         if (inputArray[i] === midSortedArr) {
//             return inputArray.indexOf(midSortedArr);
//         }
//     }
// };

function gimme(inputArray) {
    return inputArray.indexOf([...inputArray].sort((a, b) => a - b)[Math.floor(inputArray.length / 2)])
}
//  task 8 https://www.codewars.com/kata/578553c3a1b8d5c40300037c

const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''), 2)
};

// task 9 https://www.codewars.com/kata/585d7d5adb20cf33cb000235
//first solution
// function findUniq(arr) {
//     let setArr = [...new Set(arr)]
//     console.log(setArr)
//     for(let i = 0; i < setArr.length; i++) {
//         if (arr.indexOf(setArr[i]) === arr.lastIndexOf(setArr[i])) {
//             return setArr[i]
//         }
//     }
// }
//second solution
function findUniq(arr) {
    return arr.find(el => arr.indexOf(el) === arr.lastIndexOf(el))
}
//third solution
function findUniq(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        if(arr[i] != arr[i+1] && arr[i + 1] === arr[i + 2]) {
            return arr[i]
        } else if (arr[i] != arr[i+1] && arr[i] === arr[i + 2]) {
            return arr[i + 1]
        } else if (arr[i] === arr[i + 1] && arr[i + 1] != arr[i + 2]) {
            return arr[i + 2]
        }
    }
}
// task 10 https://www.codewars.com/kata/581e014b55f2c52bb00000f8

function decipherThis(str) {
    const splitStr = str.split(' ')
    const arr = [];

    splitStr.forEach(str => {
        if (str.length < 3 && str === ' ') {
            arr.push(str.charCodeAt(0))
        } else {
            let tempStr = str.replace(parseInt(str), String.fromCharCode(parseInt(str))).split('')
            if (tempStr.length > 1) {
                let swap = tempStr[1]
                tempStr[1] = tempStr[tempStr.length - 1]
                tempStr[tempStr.length - 1] = swap
            }
            arr.push(tempStr.join(''))
        }
    })

    return arr.join(' ')

};

// console.log(decipherThis('104olle 119drlo 97t 102hsi 104wo'))

// opposite task 10
function cipherThis(text) {
    const strArr = text.split(' ');
    const output = [];

    strArr.forEach(str => {
        if (str.length === 1) {
            output.push(str.charCodeAt(0));
        }
        else {
            let tempStr = str.split('');
            tempStr[0] = str.charCodeAt(0);
            tempStr[1] = str[str.length - 1];
            tempStr[str.length - 1] = str[1];
            output.push(tempStr.join(''));
        }
    });

    return output.join(' ');
}

//   console.log(cipherThis("hello world at fish how"));
//  task 11 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
function sortArray(array) {
    const odd = array.filter(el => el % 2 !== 0).sort((a, b) => a - b);

    return array.map(item => item % 2 !== 0 ? odd.shift() : item)
}

// console.log(sortArray([5, 3, 2, 8, 1, 4]))