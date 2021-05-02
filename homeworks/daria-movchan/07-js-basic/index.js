//task 1 https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            result += arr[i];
        }
    }
    return result;
}

//task 2 https://www.codewars.com/kata/5a3e1319b6486ac96f000049
function pairs(ar) {
    let counter = 0;
    for (let i = 0; i < ar.length; i += 2) {
        if (ar[i] + 1 === ar[i + 1]) {
            counter++;
        } else if (ar[i] === ar[i + 1] + 1) {
            counter++;
        }
    }
    return counter;
}

//task 3 https://www.codewars.com/kata/5aba780a6a176b029800041c
function maxMultiple(divisor, bound) {
    return bound - (bound % divisor);
}

//task 4 https://www.codewars.com/kata/514a6336889283a3d2000001
function getEvenNumbers(numbersArray) {
    return numbersArray.filter(num => num % 2 === 0);
}

//task 5 https://www.codewars.com/kata/5a090c4e697598d0b9000004

//task 6 https://www.codewars.com/kata/566044325f8fddc1c000002c
function evenChars(string) {
    const result = string.split('');
    if (string.length < 2 || string.length > 100) {
        return "invalid string";
    }
    return result.filter((a, b) => b % 2);
}

//task 7 https://www.codewars.com/kata/545a4c5a61aa4c6916000755

//task 8 https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''), 2);
};

//task 9 https://www.codewars.com/kata/585d7d5adb20cf33cb000235

//task 10 https://www.codewars.com/kata/581e014b55f2c52bb00000f8

//task 11 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
