const assert = require('./assert');
const DATA = require('./MOCK_DATA');

function getRandomSku(data, length) {
  const allSku = [];
  data.map((item) => allSku.push(item.sku));
  const skues = [];
  while (skues.length !== length) {
    const index = Math.floor(Math.random() * allSku.length);
    if (skues.indexOf(allSku[index] === -1)) {
      skues.push(allSku[index]);
    }
  }
  return skues;
}

const needleList = getRandomSku(DATA, 15);

function quickSort(data) {
  if (data.length < 2) {
    return data;
  }

  const current = data[0];
  const left = [];
  const right = [];

  for (let i = 1; i < data.length; i += 1) {
    if (current.sku > data[i].sku) {
      left.push(data[i]);
    } else {
      right.push(data[i]);
    }
  }

  return [...quickSort(left), current, ...quickSort(right)];
}

function bubbleSort(data) {
  const copyOfData = [...data];
  let swap;
  let elements = copyOfData.length - 1;
  do {
    swap = false;
    for (let i = 0; i < elements; i += 1) {
      if (copyOfData[i].sku > copyOfData[i + 1].sku) {
        const temp = copyOfData[i];
        copyOfData[i] = copyOfData[i + 1];
        copyOfData[i + 1] = temp;
        swap = true;
      }
    }
    elements -= 1;
  } while (swap);
  return copyOfData;
}

function simpleSort(data) {
  return [...data].sort((a, b) => (a.sku > b.sku ? 1 : -1));
}

function binarySearch(data, item) {
  let start = 0;
  let end = data.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    if (data[middle].sku === item) {
      return middle;
    } if (data[middle].sku < item) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}

function straightSearch(data, item) {
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].sku === item) {
      return data[i];
    }
  }
  return false;
}

function calcAverageTime(sec, nans) {
  return (sec * 1000000000 + nans) / 100000000;
}

const sortedSku = quickSort(DATA);

// quickSort
let start = process.hrtime();
for (let i = 0; i < 100; i += 1) {
  quickSort(DATA);
}
let end = process.hrtime(start);
console.log(`quickSort in average took(ms): ${calcAverageTime(end[0], end[1]).toFixed(3)}\n`);

// simpleSort
assert(
  'simpleSort is',
  JSON.stringify(quickSort(DATA)) === JSON.stringify(simpleSort(DATA)),
);

start = process.hrtime();
for (let i = 0; i < 100; i += 1) {
  simpleSort(DATA);
}
end = process.hrtime(start);
console.log(`simpleSort in average took(ms): ${calcAverageTime(end[0], end[1]).toFixed(3)}\n`);

// bubbleSort
assert(
  'bubbleSort is',
  JSON.stringify(quickSort(DATA)) === JSON.stringify(bubbleSort(DATA)),
);

start = process.hrtime();
for (let i = 0; i < 100; i += 1) {
  bubbleSort(DATA);
}
end = process.hrtime(start);
console.log(`bubbleSort in average took(ms): ${calcAverageTime(end[0], end[1]).toFixed(3)}\n`);

// binarySearch
start = process.hrtime();
for (let i = 0; i < 100; i += 1) {
  needleList.forEach((sku) => binarySearch(sortedSku, sku));
}
end = process.hrtime(start);
console.log(`binarySearch in average took(ms): ${calcAverageTime(end[0], end[1]).toFixed(3)}\n`);

// straightSearch
start = process.hrtime();
for (let i = 0; i < 100; i += 1) {
  needleList.forEach((sku) => straightSearch(sortedSku, sku));
}
end = process.hrtime(start);
console.log(`straightSearch in average took(ms): ${calcAverageTime(end[0], end[1]).toFixed(3)}\n`);
