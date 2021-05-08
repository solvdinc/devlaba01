const data = require('./MOCK_DATA');

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
    '1e63459f-0b18-4acf-9afc-e7287347bbeb',
];

//Search
function linearSearch(arr, sku) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].sku === sku) {
            return arr[i]
        }
    }

    return null;
}


function binarySearch(arr, sku) {
    let first = 0;
    let last = arr.length - 1;
    let middle;

    while (first <= last) {
        middle = Math.floor(Number(first + last) / 2);
        const guess = arr[middle];

        if (arr[middle].sku === sku) {
            return arr[middle];
        }
        if (arr[middle].sku > sku) {
            last = middle - 1;
        } else {
            first = middle + 1;
        }
    }

    return null;
}


//Sorting
function simpleSorting(arr) {
    return [...arr].sort((a, b) => (a.sku > b.sku ? 1 : -1));
}

function bubbleSorting(arr) {
    const A = [...arr];
    let n = A.length;
    for (let i = 0; i < n; i += 1) {
        for (let j = 0; j < n - 1; j += 1) {
            if (A[j].sku > A[j + 1].sku) {
                let temp = A[j];
                A[j] = A[j + 1];
                A[j + 1] = temp;
            }
        }
    }

    return A;
}

function selectionSorting(arr) {
    const A = [...arr];
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (A[j].sku < A[min].sku) {
                min = j;
            }
        }
        let temp = A[min];
        A[min] = A[i];
        A[i] = temp;
    }
    return A;
}


function insertionSorting(arr) {
    let A = [...arr];
    let n = A.length;
    for (let i = 0; i < n; i++) {
        let temp = A[i];
        let j = i - 1;
        while (j >= 0 && A[j].sku > temp) {
            A[j + 1] = A[j];
            j--;
        }
        A[j + 1] = temp;
    }
    return A;
}

const sortedArray = simpleSorting(data);
const result = (func, data) => needleList.map((sku) => func(data, sku));


console.time("linearSearch");
result(linearSearch, data);
console.timeEnd("linearSearch");

console.time("binarySearch");
result(binarySearch, sortedArray);
console.timeEnd("binarySearch");

console.time("simpleSorting");
result(simpleSorting, data);
console.timeEnd("simpleSorting");

console.time("bubbleSorting");
result(bubbleSorting, data);
console.timeEnd("bubbleSorting");

console.time("insertionSorting");
result(insertionSorting, data);
console.timeEnd("insertionSorting");

console.time("selectionSort");
result(selectionSorting, data);
console.timeEnd("selectionSort");


