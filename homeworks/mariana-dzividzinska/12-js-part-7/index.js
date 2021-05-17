const fs = require('fs');
const {
  performance,
} = require('perf_hooks');
const inputData = require('./MOCK_DATA');

function straightSearch(array, findValue, propName) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i][propName] === findValue) {
      return array[i];
    }
  }
  return -1;
}

function binarySearch(array, findValue, propName, startIndex = 0, lastIndex = array.length - 1) {
  if (startIndex > lastIndex) {
    return -1;
  }

  const middleIndex = Math.floor(Number(startIndex + lastIndex) / 2);

  if (array[middleIndex][propName] === findValue) {
    return array[middleIndex];
  }
  if (array[middleIndex][propName] < findValue) {
    return binarySearch(array, findValue, propName, middleIndex + 1, lastIndex);
  }
  return binarySearch(array, findValue, propName, startIndex, middleIndex - 1);
}

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function partition(array, low, high, propName) {
  const pivot = array[Math.floor((low + high) / 2)][propName];
  let i = low;
  let j = high;
  while (i <= j) {
    while (array[i][propName] < pivot) {
      i += 1;
    }
    while (array[j][propName] > pivot) {
      j -= 1;
    }

    if (i <= j) {
      swap(array, i, j);
      i += 1;
      j -= 1;
    }
  }
  return i;
}

function quicksort(array, propName, low = 0, high = array.length - 1) {
  if (array.length > 1) {
    const index = partition(array, low, high, propName);

    if (low < index - 1) {
      quicksort(array, propName, low, index - 1);
    }

    if (index < high) {
      quicksort(array, propName, index, high);
    }
  }
  return array;
}

function bubbleSort(array, propName) {
  for (let i = 0; i < array.length - 1; i += 1) {
    for (let j = 0; j < array.length - 1 - i; j += 1) {
      if (array[j][propName] > array[j + 1][propName]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

// Tests

function assert(name, ex) {
  if (!!ex !== true) {
    console.error(`${name}: Failed`);
    return;
  }
  console.info(`${name}: OK`);
}

const isEqualArray = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i += 1) {
    if (JSON.stringify(array1[i]) !== JSON.stringify(array2[i])) {
      return false;
    }
  }
  return true;
};

function searchTest(name, array, func, findValue, propName) {
  const expectedVal = array.find((el) => el[propName] === findValue);
  const actualVal = func(array, findValue, propName);

  assert(name, JSON.stringify(expectedVal) === JSON.stringify(actualVal));
}

function sortTest(name, array, func, propName) {
  const expectedRes = [...array].sort((el1, el2) => (el1[propName] > el2[propName] ? 1 : -1));
  const actualRes = func(array, propName);

  assert(name, isEqualArray(actualRes, expectedRes));
}

function measureTest(func) {
  const time = performance.now();
  func();
  return performance.now() - time;
}

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
const skuPropName = 'sku';
const sorted = quicksort(inputData, 'sku');

needleList.forEach((el) => {
  console.log(`Find sku ${el}`);
  searchTest('Straight search test', inputData, straightSearch, el, skuPropName);
  searchTest('Binary search test', sorted, binarySearch, el, skuPropName);
});
console.log();

sortTest('Bubble sort test', inputData, bubbleSort, skuPropName);
sortTest('Quick sort test', inputData, bubbleSort, skuPropName);

const straightSearchExecutionTime = measureTest(() => {
  needleList.forEach((el) => {
    straightSearch(inputData, el, skuPropName);
  });
});

const binarySearchExecutionTime = measureTest(() => {
  needleList.forEach((el) => {
    binarySearch(inputData, el, skuPropName);
  });
});

const bubbleSortExecutionTime = measureTest(() => {
  bubbleSort([...inputData], skuPropName);
});

const quickSortExecutionTime = measureTest(() => {
  quicksort([...inputData], skuPropName);
});

const result = [
  {
    act: 'Straight search',
    time: `${straightSearchExecutionTime} milliseconds`,
    needleList,
  },
  {
    act: 'Binary search',
    time: `${binarySearchExecutionTime} milliseconds`,
    needleList,
  },
  {
    act: 'Bubble sort',
    time: `${bubbleSortExecutionTime} milliseconds`,
  },
  {
    act: 'Quick sort',
    time: `${quickSortExecutionTime} milliseconds`,
  },
];
fs.writeFile('result.log', JSON.stringify(result, null, 1), (err) => {
  if (err) throw err;
});
console.log(JSON.stringify(result, null, 1));
