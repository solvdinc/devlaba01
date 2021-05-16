const fs = require('fs');
const { PerformanceObserver, performance } = require('perf_hooks');
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

function straightSearch(arr, sku) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].sku === sku) {
      return arr[i]
    }
  }

  return null;
}

function binarySearch(array, sku) {
  let startIndex = 0;
  let lastIndex = array.length - 1;
  let middle;

  while (startIndex <= lastIndex) {
    middle = Math.floor(Number(startIndex + lastIndex) / 2);
    const guess = array[middle];

    if (array[middle].sku === sku) {
      return array[middle];
    }
    if (array[middle].sku > sku) {
      lastIndex = middle - 1;
    } else {
      startIndex = middle + 1;
    }
  }

  return null;
}

function bubbleSorting(array) {
  const A = [...array];
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

//Tests

const key = 'sku';

function test(func) {
  let time = performance.now();
  return performance.now() - time;
}

const straightSearchTime = test(function () {
  needleList.forEach((el) => {
    straightSearch(data, el, key);
  });
});

const binarySearchTime = test(function () {
  needleList.forEach((el) => {
    binarySearch(data, el, key);
  });
});

const bubbleSortingTime = test(() => {
  bubbleSorting([...data], key);
})

const results = [{
  type: "Straight search",
  time: `${straightSearchTime} milliseconds`,
},
{
  type: "Binary search",
  time: `${binarySearchTime} milliseconds`,
},
{
  type: "Bubble sorting",
  time: `${bubbleSortingTime} milliseconds`,
}
]

console.log(JSON.stringify(results, null, 2));
fs.writeFile('result.log', JSON.stringify(results, null, 2), function (err) {
  if (err) throw err;
});
