const fs = require('fs');
const data = require('./MOCK_DATA');
const assert = require('./assert')
const result = {};

const needleList = [
    'd462bb76-81ee-46af-9fdb-ebfe53a93d3f',
    '6df55f86-e3f5-4d7b-9cd5-906d8d7e804a',
    '1e63459f-0b18-4acf-9afc-e7287347bbeb',
    'e04b6074-332f-4661-8f3a-4cdcb3adfb6a',
    'be77abf7-29b0-4ed1-9379-f5d7576cb5ce',
    '3c511860-d159-457d-8374-e8205904e6f5',
    '1e63459f-0b18-4acf-9afc-e7287347bbeb',
    'e04b6074-332f-4661-8f3a-4cdcb3adfb6a',
    '9c4a0320-1d82-4a46-83b3-511ddffb7ee6',
    '1e63459f-0b18-4acf-9afc-e7287347bbeb',
    'e04b6074-332f-4661-8f3a-4cdcb3adfb6a',
    'be77abf7-29b0-4ed1-9379-f5d7576cb5ce',
    '3c511860-d159-457d-8374-e8205904e6f5',
    '1e63459f-0b18-4acf-9afc-e7287347bbeb',
    'd462bb76-81ee-46af-9fdb-ebfe53a93d3f',
    '6df55f86-e3f5-4d7b-9cd5-906d8d7e804a',
    '83b65687-1774-4172-9e28-44537a619a7e',
]

function simpleSort(data) {
    return [...data].sort((a, b) => (a.sku > b.sku ? 1 : -1));
}

function quickSort(data) {
    const copyData = [...data]
    if (copyData.length < 2) {
        return copyData;
    }
    const left = [];
    const right = [];
    const pivot = copyData[0];

    for (let i = 1; i < copyData.length; i++) {
        if (pivot.sku > copyData[i].sku) {
            left.push(copyData[i]);
        } else {
            right.push(copyData[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

function bubbleSort(data) {
    const copyData = [...data];

    for (let i = 0; i < copyData.length; i++) {
        for (let j = 0; j < copyData.length - 1; j++) {
            if (copyData[j].sku > copyData[j + 1].sku) {
                const temp = copyData[j];
                copyData[j] = copyData[j + 1];
                copyData[j + 1] = temp;
            }
        }
    }

    return copyData;
}

function selectionSort(data) {
    const copyData = [...data];

    for (let i = 0; i < copyData.length; i++) {
        min = i;
        for (let j = i + 1; j < copyData.length; j++) {
            if (copyData[min].sku > copyData[j].sku) {
                min = j;
            }
        }
        const temp = copyData[i];
        copyData[i] = copyData[min];
        copyData[min] = temp;
    }

    return copyData;
}


function straightSearch(data, sku) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].sku === sku) {
            return data[i].sku
        }
    }
    return null
}

function binarySearch(data, item) {
    let startIndex = 0;
    let maxIndex = data.length - 1;

    while (startIndex <= maxIndex) {
        const midNumberIndex = Math.floor((startIndex + maxIndex) / 2);
        const guess = data[midNumberIndex];

        if (guess.sku === item) {
            return guess;
        }
        if (guess.sku > item) {
            maxIndex = midNumberIndex - 1;
        } else {
            startIndex = midNumberIndex + 1;
        }
    }
    return null;
}

function checkSort(bodyFunc) {
    result[bodyFunc.name] = [];
    if (!assert(bodyFunc, data)) {
        return result[bodyFunc.name].push('Failed');
    }

    let start = process.hrtime();
    bodyFunc(data);
    let finish = process.hrtime(start);
    result[bodyFunc.name].push(finish[1]);
}

function checkSearch(bodyFunc) {
    result[bodyFunc.name] = [];
    const sortedData = [...data].sort((a, b) => (a.sku > b.sku ? 1 : -1));
    let sum = 0;

    for (let i = 0; i < needleList.length; i++) {
        if (!assert(bodyFunc, data, needleList[i])) {
            result[bodyFunc.name].push('Failed');
        } else {
            let start = process.hrtime();
            bodyFunc(sortedData, needleList[i]);
            let finish = process.hrtime(start);
            result[bodyFunc.name].push(finish[1]);
            sum += finish[1];
        }
    }
    result[bodyFunc.name].push({ 'avarage': ~~(sum / needleList.length) });
}

checkSort(simpleSort);
checkSort(quickSort);
checkSort(bubbleSort);
checkSort(selectionSort);
checkSearch(straightSearch);
checkSearch(binarySearch);

fs.writeFileSync('result.js', JSON.stringify(result, null, 2));
