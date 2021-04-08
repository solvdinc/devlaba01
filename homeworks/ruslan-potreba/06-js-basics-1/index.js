// https://www.codewars.com/kata/opposite-number 1 [done]

function oppositeNumber(number) {
    return -number
}

// https://www.codewars.com/kata/basic-mathematical-operations 2 [done]

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2
        case '-':
            return value1 - value2
        case '/':
            return value1 / value2
        case '*':
            return value1 * value2
        default:
            return "Something's wrong. Try again"
    }
}

// https://www.codewars.com/kata/printing-array-elements-with-comma-delimiters 3 [done]

function printArray(array) {
    return array.join(',')
}

// https://www.codewars.com/kata/transportation-on-vacation 4 [done]

function rentalCarCost(daysAmount) {
    let finalCost
    if (daysAmount <= 2) {
        finalCost = 40 * daysAmount
    } else if (daysAmount <= 6) {
        finalCost = 40 * daysAmount - 20
    } else if (daysAmount >= 7) {
        finalCost = 40 * daysAmount - 50
    }
    return finalCost
}

//www.codewars.com/kata/calculating-with-functions 5 [done]

http: function calcWithFunctions() {
    function zero(operator) {
        if (operator) {
            return Math.trunc(eval(`0 ${operator}`))
        } else {
            return eval(`0`)
        }
    }

    function one(operator) {
        if (operator) {
            return Math.trunc(eval(`1 ${operator}`))
        } else {
            return eval(`1`)
        }
    }

    function two(operator) {
        if (operator) {
            return Math.trunc(eval(`2 ${operator}`))
        } else {
            return eval(`2`)
        }
    }

    function three(operator) {
        if (operator) {
            return Math.trunc(eval(`3 ${operator}`))
        } else {
            return eval(`3`)
        }
    }

    function four(operator) {
        if (operator) {
            return Math.trunc(eval(`4 ${operator}`))
        } else {
            return eval(`4`)
        }
    }

    function five(operator) {
        if (operator) {
            return Math.trunc(eval(`5 ${operator}`))
        } else {
            return eval(`5`)
        }
    }

    function six(operator) {
        if (operator) {
            return Math.trunc(eval(`6 ${operator}`))
        } else {
            return eval(`6`)
        }
    }

    function seven(operator) {
        if (operator) {
            return Math.trunc(eval(`7 ${operator}`))
        } else {
            return eval(`7`)
        }
    }

    function eight(operator) {
        if (operator) {
            return Math.trunc(eval(`8 ${operator}`))
        } else {
            return eval(`8`)
        }
    }

    function nine(operator) {
        if (operator) {
            return Math.trunc(eval(`9 ${operator}`))
        } else {
            return eval(`9`)
        }
    }

    function plus(value) {
        return `+ ${value}`
    }

    function minus(value) {
        return `- ${value}`
    }

    function times(value) {
        return `* ${value}`
    }

    function dividedBy(value) {
        return `/ ${value}`
    }

    return console.log(six(times(eight())))
}

// http://www.codewars.com/kata/get-the-middle-character 6 [done]

function getMiddle(s) {
    const isStringDividableByTwo = s.length % 2
    const stringDividedByTwoIndex = parseInt(s.length / 2, 10)
    switch (!!isStringDividableByTwo) {
        case true:
            return s[stringDividedByTwoIndex]
        case false:
            return s[stringDividedByTwoIndex - 1] + s[stringDividedByTwoIndex]
        default:
            return s
    }
}

// http://www.codewars.com/kata/partition-on 7

// http://www.codewars.com/kata/word-count 8 [done]

function countWords(str) {
    str = str.trim()
    if (str === '') {
        return 0
    } else {
        return str.split(/\s+/).length
    }
}

// https://www.codewars.com/kata/find-the-odd-int/ 9 [done]

function findOdd(array) {
    for (let i = 0; i < array.length; ++i) {
        let counter = 0
        for (let j = 0; j < array.length; ++j) {
            if (array[i] === array[j]) {
                ++counter
            }
        }
        if (counter % 2 !== 0) {
            return array[i]
        }
    }
    return 0
}

// https://www.codewars.com/kata/find-the-parity-outlier 10 [done]

function findOutlier(integers) {
    let oddArray = []
    let evenArray = []
    for (let i = 0; i < integers.length; ++i) {
        if (integers[i] % 2 !== 0) {
            oddArray.unshift(integers[i])
        } else {
            evenArray.unshift(integers[i])
        }
    }

    if (oddArray.length > evenArray.length) {
        return evenArray.toString()
    } else {
        return oddArray.toString()
    }
}

// https://www.codewars.com/kata/zipwith 11 [done]

function zipWith(funcToApply, arrayOne, arrayTwo) {
    const finalArray = []
    for (let i = 0; i < Math.min(arrayOne.length, arrayTwo.length); ++i) {
        finalArray.push(funcToApply(arrayOne[i], arrayTwo[i]))
    }
    return finalArray
}

// https://www.codewars.com/kata/filter-the-number 12 [done]

function filterString(string) {
    const numberRegExp = /\d+/
    const stringToArray = [...string]
    const finalArray = []
    for (let i = 0; i < stringToArray.length; ++i) {
        if (stringToArray[i].match(numberRegExp)) {
            finalArray.push(stringToArray[i])
        }
    }
    return Number(finalArray.join(''))
}

// https://www.codewars.com/kata/n-th-fibonacci 13 [done]

function nthFibo(n) {
    let fiboArray = [0, 1]
    for (let i = 2; i < n + 1; ++i) {
        fiboArray.push(
            fiboArray[fiboArray.length - 1] + fiboArray[fiboArray.length - 2]
        )
    }
    return fiboArray[n - 1]
}

// https://www.codewars.com/kata/cat-and-mouse-2d-version/ 14

// https://www.codewars.com/kata/duplicate-encoder 15

// https://www.codewars.com/kata/5693239fb761dc8670000001 16

// https://www.codewars.com/kata/576757b1df89ecf5bd00073b 17

// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029 18 [done]

function wave(str) {
    const finalArray = []
    const stringToLowerCase = str.toLowerCase()
    for (let i = 0; i < stringToLowerCase.length; ++i) {
        let temporarySplit = stringToLowerCase.split('')
        if (temporarySplit[i] !== ' ') {
            temporarySplit[i] = temporarySplit[i].toUpperCase()
            finalArray.push(temporarySplit.join(''))
        }
    }
    return finalArray
}

// https://www.codewars.com/kata/59d398bb86a6fdf100000031 19 [done]

function stringBreakers(n, string) {
    const stringWithNoSpaces = string.split(' ').join('')
    const finalString = []
    for (let i = 0; i < stringWithNoSpaces.length; i += n) {
        finalString.push(stringWithNoSpaces.substring(i, i + n))
    }
    return finalString.join('\n')
}

// https://www.codewars.com/kata/514a024011ea4fb54200004b 20 [ready]

function domainName(url) {
    let domainName = url
        .replace('http://', '')
        .replace('https://', '')
        .replace('www.', '')
        .split('.')[0]
    return domainName
}
