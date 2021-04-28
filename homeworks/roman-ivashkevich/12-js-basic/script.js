// import DATA from './MOCK_DATA.js';
const DATA = require('./MOCK_DATA');
const assert = require('./assert');

const duplicateData = [...DATA];

let sortData = [];

const testResults = {
  straightSearch: [],
  binarySearch: [],
  quickSort: [],
  selectionSort: [],
  mergeSort: [],
  insertionSort: [],
  simpleQuickSort: [],
};

const getAllSku = (data) => {
  const resArr = [];
  data.map((el) => resArr.push(el.sku));
  return resArr;
};

const arrOfAllSku = getAllSku(DATA);

const randomSku = (arr) => {
  const resArr = [];
  const max = arr.length - 1;
  const min = 0;
  while (resArr.length !== 20) {
    const randIndex = Math.floor(Math.random() * (max - min) + min);

    if (resArr.includes(arr[randIndex])) {
      continue;
    }

    resArr.push(arr[randIndex]);
  }
  return resArr;
};

const needleList = randomSku(arrOfAllSku);

const simpleQuickSort = (arr) => arr.sort((a, b) => (a.sku < b.sku ? 1 : -1));

const quickSort = (arr) => {
  const less = [];
  const greater = [];

  if (arr.length < 2) return arr;

  const mid = arr[Math.floor(arr.length - 1 / 2)];

  arr.forEach((el) => {
    if (el.sku > mid.sku) {
      less.push(el);
    } else if (el.sku < mid.sku) {
      greater.push(el);
    }
  });
  return [...quickSort(less), mid, ...quickSort(greater)];
};

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    let min = i;

    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[j].sku > arr[min].sku) {
        min = j;
      }
    }
    if (i !== min) {
      const temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
};

const merge = (arr1, arr2) => {
  const result = [];

  while (arr1.length && arr2.length) {
    // eslint-disable-next-line no-unused-expressions
    if (arr1[0].sku > arr2[0].sku) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }

  return [...result, ...arr1, ...arr2];
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i += 1) {
    let j = i - 1;
    const temp = arr[i];
    while (j >= 0 && arr[j].sku < temp.sku) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = temp;
  }
  return arr;
};

assert(
  'Quick with simpleQuick',
  JSON.stringify(quickSort(DATA)) === JSON.stringify(simpleQuickSort(DATA)),
);
assert(
  'Quick with selection',
  JSON.stringify(quickSort(DATA)) === JSON.stringify(selectionSort(DATA)),
);
assert(
  'Quick with merge',
  JSON.stringify(quickSort(DATA)) === JSON.stringify(mergeSort(DATA)),
);
assert(
  'Quick with insertion',
  JSON.stringify(quickSort(DATA)) === JSON.stringify(insertionSort(DATA)),
);

const straightSearch = (arr, id) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].sku === id) {
      return arr[i];
    }
  }
};

const binarySearch = (data, id) => {
  let low = 0;
  let high = data.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (data[mid].sku === id) {
      return data[mid];
    }

    if (data[mid].sku < id) {
      high = mid + 1;
    } else {
      low = mid - 1;
    }
  }
};

// !straightSearch
for (let i = 0; i < 20; i += 1) {
  const start = process.hrtime();
  // const t0 = performance.now();
  needleList.map((sku) => straightSearch(DATA, sku));
  const finish = process.hrtime(start);
  testResults.straightSearch.push(finish[1]);
  // const t1 = performance.now();
  // testResults.straightSearch.push(t1 - t0);
}

// !mergeSort
for (let i = 0; i < 20; i += 1) {
  let start = process.hrtime();
  start = start[0] * 1000000 + start[1];
  // const t0 = performance.now();
  sortData = mergeSort(duplicateData);
  let finish = process.hrtime();
  finish = finish[0] * 1000000 + finish[1];
  testResults.mergeSort.push(finish - start);
  // const t1 = performance.now();
  // testResults.straightSearch.push(t1 - t0);
}

// !insertionSort
for (let i = 0; i < 20; i += 1) {
  const start = process.hrtime();
  // const t0 = performance.now();
  sortData = insertionSort(duplicateData);
  const finish = process.hrtime(start);
  testResults.insertionSort.push(finish[1]);
  // const t1 = performance.now();
  // testResults.straightSearch.push(t1 - t0);
}

// !selectionSort
for (let i = 0; i < 20; i += 1) {
  const start = process.hrtime();
  // const t0 = performance.now();
  sortData = selectionSort(duplicateData);
  const finish = process.hrtime(start);
  testResults.selectionSort.push(finish[1]);
  // const t1 = performance.now();
  // testResults.straightSearch.push(t1 - t0);
}

// !quickSort
for (let i = 0; i < 20; i += 1) {
  const start = process.hrtime();
  // const t0 = performance.now();
  sortData = quickSort(duplicateData);
  const finish = process.hrtime(start);
  testResults.quickSort.push(finish[1]);
  // const t1 = performance.now();
  // testResults.straightSearch.push(t1 - t0);
}

// !simpleQuickSort
for (let i = 0; i < 20; i += 1) {
  const start = process.hrtime();
  // const t0 = performance.now();
  sortData = simpleQuickSort(duplicateData);
  const finish = process.hrtime(start);
  testResults.simpleQuickSort.push(finish[1]);
  // const t1 = performance.now();
  // testResults.straightSearch.push(t1 - t0);
}

// !binarySearch
for (let i = 0; i < 20; i += 1) {
  const start = process.hrtime();
  // const t0 = performance.now();
  needleList.map((sku) => binarySearch(sortData, sku));
  const finish = process.hrtime(start);
  testResults.binarySearch.push(finish[1]);
  // const t1 = performance.now();
  // testResults.binarySearch.push(t1 - t0);
}

const averageTime = (arr) =>
  +(arr.reduce((acc, el) => acc + el, 0) / arr.length / 1000000).toFixed(5);

testResults.averageStraightPerformance = averageTime(
  testResults.straightSearch,
);
testResults.averageBinaryPerformance = averageTime(testResults.binarySearch);

testResults.averageQuickSortPerformance = averageTime(testResults.quickSort);
testResults.averageSimpleQuickSortPerformance = averageTime(
  testResults.simpleQuickSort,
);
testResults.averageSelectionSortPerformance = averageTime(
  testResults.selectionSort,
);
testResults.averageMergeSortPerformance = averageTime(testResults.mergeSort);
testResults.averageInsertionSortPerformance = averageTime(
  testResults.insertionSort,
);

console.log('Binary search results(ns): ', testResults.binarySearch);
console.log('Straight search results(ns): ', testResults.straightSearch);
console.log('Quick sort results(ns): ', testResults.quickSort);
console.log('Selection sort results(ns): ', testResults.selectionSort);
console.log('Merge sort results(ns): ', testResults.mergeSort);
console.log('Insertion sort results(ns): ', testResults.insertionSort);
console.log('Simple quick sort results(ns): ', testResults.simpleQuickSort);

console.log(
  'averageBinaryPerformance(ms): ',
  testResults.averageBinaryPerformance,
);
console.log(
  'averageStraightPerformance(ms): ',
  testResults.averageStraightPerformance,
);
console.log(
  'averageQuickSortPerformance(ms): ',
  testResults.averageQuickSortPerformance,
);
console.log(
  'averageSelectionSortPerformance(ms): ',
  testResults.averageSelectionSortPerformance,
);
console.log(
  'averageMergeSortPerformance(ms): ',
  testResults.averageMergeSortPerformance,
);
console.log(
  'averageInsertionSortPerformance(ms): ',
  testResults.averageInsertionSortPerformance,
);
console.log(
  'averageSimpleQuickSortPerformance(ms): ',
  testResults.averageSimpleQuickSortPerformance,
);
