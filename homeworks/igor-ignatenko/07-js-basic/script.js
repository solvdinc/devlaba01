// task 1 https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i]
        }
    }

    return sum
}

// task 2 https://www.codewars.com/kata/5a3e1319b6486ac96f000049

function pairs(ar) {
    let count = 0;

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
function findUniq(arr) {
    return arr.slice(0, 3).filter(el => el === arr[0]).length > 1 ? arr.find(el => el !== arr[0]) : arr[0];
}
console.log(findUniq([1, 2, 1, 1, 1, 1]))
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

// optional 1 https://www.codewars.com/kata/515bb423de843ea99400000a
// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
    return this.collection.length
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
    return Math.ceil(this.collection.length / this.itemsPerPage);
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
    if (pageIndex < 0 || pageIndex >= this.pageCount()) {
        return -1;
    } else if (pageIndex !== this.pageCount() - 1) {
        return this.itemsPerPage;
    }

    return this.collection.length % this.itemsPerPage;
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
    if (itemIndex < 0 || itemIndex >= this.collection.length) {
        return -1;
    }

    return Math.floor(itemIndex / this.itemsPerPage);
}

let helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f', 'f'], 4);

// optional 2 https://www.codewars.com/kata/52597aa56021e91c93000cb0

var moveZeros = function (arr) {
    let arrayZero = [];
    let arrayNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] === 0 ? arrayZero.push(arr[i]) : arrayNumbers.push(arr[i])
    }
    return arrayNumbers.concat(arrayZero)
}
// optional 3  https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3

function findUniq(arr) {
    const setedArr = arr.map(el => standardize(el));
    const partOfArr = setedArr.slice(0, 3)
    const filteredPart = partOfArr.filter(el => el === partOfArr[0])

    if (filteredPart.length > 1) {
        return arr[setedArr.indexOf(setedArr.find(el => el != filteredPart[0]))]
    } else {
        return arr[0]
    }
}

function standardize(el) {
    return [...new Set(el.toLowerCase().split('').sort((a, b) => a > b))].join('')
}