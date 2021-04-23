// https://www.codewars.com/kata/5715eaedb436cf5606000381 [1] done

function positiveSum(arr) {
    let sumOfPositive = 0
    arr.forEach((element) => {
        if (element >= 0) {
            sumOfPositive += element
        }
    })
    return sumOfPositive
}

// https://www.codewars.com/kata/5a3e1319b6486ac96f000049 [2] done

function pairs(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i] + 1 === arr[i + 1] || arr[i] - arr[i + 1] === 1) {
            ++count
        } else {
            continue
        }
    }
    return count
}

// https://www.codewars.com/kata/5aba780a6a176b029800041c [3] done

function maxMultiple(divisor, bound) {
    return Math.floor(bound / divisor) * divisor
    // old 'force' solution
    // const numbersIntoArray = Array.from(Array(bound + 1).keys())
    // numbersIntoArray.shift()
    // let largestIntDividable = 0
    // numbersIntoArray.forEach((element) => {
    //     if (
    //         element % divisor === 0 &&
    //         element <= bound &&
    //         element > largestIntDividable
    //     ) {
    //         largestIntDividable = element
    //     }
    // })
    // return largestIntDividable
}

// https://www.codewars.com/kata/514a6336889283a3d2000001 [4] done

function getEvenNumbers(numbersArray) {
    return numbersArray.filter((number) => number % 2 === 0)
}

// https://www.codewars.com/kata/5a090c4e697598d0b9000004 [5] done

function solve(array) {
    const finalArray = []
    for (let i = 0; i < array.length; ) {
        if (array.length === 1) {
            finalArray.push(array[i])
            break
        }
        finalArray.push(Math.max(...array))
        finalArray.push(Math.min(...array))
        array.splice(array.indexOf(Math.max(...array)), 1)
        array.splice(array.indexOf(Math.min(...array)), 1)
    }
    return finalArray
}

// https://www.codewars.com/kata/566044325f8fddc1c000002c [6] done

function evenChars(string) {
    if (string.length < 2 || string.length >= 100) {
        return 'invalid string'
    } else {
        return [...string.split('')].filter((element, index) => {
            return index % 2 !== 0
        })
    }
}

// https://www.codewars.com/kata/545a4c5a61aa4c6916000755 [7] done

function gimme(inputArray) {
    const arrayMax = Math.max(...inputArray)
    const arrayMin = Math.min(...inputArray)
    for (let i = 0; i < inputArray.length; ++i) {
        if (inputArray[i] > arrayMin && inputArray[i] < arrayMax) {
            return inputArray.indexOf(inputArray[i])
        }
    }
}

// https://www.codewars.com/kata/578553c3a1b8d5c40300037c [8] done

function binaryArrayToNumber(array) {
    return parseInt(array.join(''), 2)
}

// https://www.codewars.com/kata/585d7d5adb20cf33cb000235 [9] done

function findUniq(array) {
    return array.find(
        (element) => array.indexOf(element) === array.lastIndexOf(element)
    )
}

// https://www.codewars.com/kata/581e014b55f2c52bb00000f8 [10] done

function decipherThis(string) {
    const finalString = []
    const replacedStringToArray = string
        .replace(/(\d)+/gi, (code) => String.fromCharCode(code))
        .split(' ')

    for (let i = 0; i < replacedStringToArray.length; ++i) {
        const splittedElement = replacedStringToArray[i].split('')
        const secondLetter = splittedElement[1]
        const lastLetter = splittedElement[splittedElement.length - 1]
        splittedElement[1] = lastLetter
        splittedElement[splittedElement.length - 1] = secondLetter
        finalString.push(splittedElement.join(''))
    }

    return finalString.join(' ')
}

// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d [11] done

function sortArray(array) {
    let oddArray = []
    const evenArray = []
    const evenIndexArray = []

    function addEvenNumbersIntoOddArray(index, item, arrayToAddInto) {
        return arrayToAddInto.splice(index, 0, item)
    }

    for (let i = 0; i < array.length; ++i) {
        if (array[i] % 2 === 0) {
            evenArray.push(array[i])
            evenIndexArray.push(i)
        } else {
            oddArray.push(array[i])
        }
    }

    oddArray = oddArray.sort((a, b) => {
        return a - b
    })

    for (let i = 0; i < evenArray.length; i++) {
        addEvenNumbersIntoOddArray(evenIndexArray[i], evenArray[i], oddArray)
    }
    return oddArray
}
