// import DATA from './MOCK_DATA.js';
const DATA = require('./MOCK_DATA');
const assert = require('./assert');

let sortData = [];

const testResults = {
  straightSearch: [],
  binarySearch: [],
  quickSort: [],
  selectionSort: [],
  mergeSort: [],
  insertionSort: [],
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

const quickSort = (arr) => {
  const array = [...arr];
  return array.sort((a, b) => (a.sku < b.sku ? 1 : -1));
};

const selectionSort = (arr) => {
  const array = [...arr];

  for (let i = 0; i < array.length; i += 1) {
    let min = i;

    for (let j = i + 1; j < array.length; j += 1) {
      if (array[j].sku > array[min].sku) {
        min = j;
      }
    }
    if (i !== min) {
      const temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
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
  const array = [...arr];

  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  return merge(left, right);
};

const insertionSort = (arr) => {
  const array = [...arr];
  for (let i = 1; i < array.length; i += 1) {
    let j = i - 1;
    const temp = array[i];
    while (j >= 0 && array[j].sku < temp.sku) {
      array[j + 1] = array[j];
      j -= 1;
    }
    array[j + 1] = temp;
  }
  return array;
};

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

    if (data[mid].sku > id) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
};

// !straightSearch
for (let i = 0; i < 20; i += 1) {
  let start = process.hrtime();
  start = start[0] * 1000000 + start[1];
  // const t0 = performance.now();
  needleList.map((sku) => straightSearch(DATA, sku));
  let finish = process.hrtime();
  finish = finish[0] * 1000000 + finish[1];
  testResults.straightSearch.push(finish - start);
  // const t1 = performance.now();
  // testResults.straightSearch.push(t1 - t0);
}

// !mergeSort
for (let i = 0; i < 20; i += 1) {
  let start = process.hrtime();
  start = start[0] * 1000000 + start[1];
  // const t0 = performance.now();
  sortData = mergeSort(DATA);
  let finish = process.hrtime();
  finish = finish[0] * 1000000 + finish[1];
  testResults.mergeSort.push(finish - start);
  // const t1 = performance.now();
  // testResults.straightSearch.push(t1 - t0);
}

// !insertionSort
for (let i = 0; i < 20; i += 1) {
  let start = process.hrtime();
  start = start[0] * 1000000 + start[1];
  // const t0 = performance.now();
  sortData = insertionSort(DATA);
  let finish = process.hrtime();
  finish = finish[0] * 1000000 + finish[1];
  testResults.insertionSort.push(finish - start);
  // const t1 = performance.now();
  // testResults.straightSearch.push(t1 - t0);
}

// !selectionSort
for (let i = 0; i < 20; i += 1) {
  let start = process.hrtime();
  start = start[0] * 1000000 + start[1];
  // const t0 = performance.now();
  sortData = selectionSort(DATA);
  let finish = process.hrtime();
  finish = finish[0] * 1000000 + finish[1];
  testResults.selectionSort.push(finish - start);
  // const t1 = performance.now();
  // testResults.straightSearch.push(t1 - t0);
}

// !quickSort
for (let i = 0; i < 20; i += 1) {
  let start = process.hrtime();
  start = start[0] * 1000000 + start[1];
  // const t0 = performance.now();
  sortData = quickSort(DATA);
  let finish = process.hrtime();
  finish = finish[0] * 1000000 + finish[1];
  testResults.quickSort.push(finish - start);
  // const t1 = performance.now();
  // testResults.straightSearch.push(t1 - t0);
}

// !binarySearch
for (let i = 0; i < 20; i += 1) {
  let start = process.hrtime();
  start = start[0] * 1000000 + start[1];
  // const t0 = performance.now();
  needleList.map((sku) => binarySearch(sortData, sku));
  let finish = process.hrtime();
  finish = finish[0] * 1000000 + finish[1];
  testResults.binarySearch.push(finish - start);
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
testResults.averageSelectionSortPerformance = averageTime(
  testResults.selectionSort,
);
testResults.averageMergeSortPerformance = averageTime(testResults.mergeSort);
testResults.averageInsertionSortPerformance = averageTime(
  testResults.insertionSort,
);

console.log('Binary search results(ms): ', testResults.binarySearch);
console.log('Straight search results(ms): ', testResults.straightSearch);
console.log('Quick sort results(ms): ', testResults.quickSort);
console.log('Selection sort results(ms): ', testResults.selectionSort);
console.log('Merge sort results(ms): ', testResults.mergeSort);
console.log('Insertion sort results(ms): ', testResults.insertionSort);

console.log(
  'averageBinaryPerformance(s): ',
  testResults.averageBinaryPerformance,
);
console.log(
  'averageStraightPerformance(s): ',
  testResults.averageStraightPerformance,
);
console.log(
  'averageQuickSortPerformance(s): ',
  testResults.averageQuickSortPerformance,
);
console.log(
  'averageSelectionSortPerformance(s): ',
  testResults.averageSelectionSortPerformance,
);
console.log(
  'averageMergeSortPerformance(s): ',
  testResults.averageMergeSortPerformance,
);
console.log(
  'averageInsertionSortPerformance(s): ',
  testResults.averageInsertionSortPerformance,
);
