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

const quickSort = (data) => {
  if (data.length < 2) return data;

  const current = data[data.length - 1];
  const left = [];
  const right = [];

  data.forEach((item) => {
    if (item < current) {
      left.push(item);
    } else {
      right.push(item);
    }
  });

  return [...left, current, ...right];
};

const sortedSku = quickSort(needleList);

function bubbleSort(data) {
  let swap;
  let elements = data.length - 1;
  do {
    swap = false;
    for (let i = 0; i < elements; i += 1) {
      if (data[i] > data[i + 1]) {
        const temp = data[i];
        data[i] = data[i + 1];
        data[i + 1] = temp;
        swap = true;
      }
    }
    elements -= 1;
  } while (swap);
  return data;
}

function binarySearch(sortedData, item) {
  let start = 0;
  let end = sortedData.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    if (sortedData[middle] === item) {
      return middle;
    } if (sortedData[middle] < item) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}

function straightSearch(data, item) {
  for (let i = 0; i < data.length; i += 1) {
    if (data[i] === item) {
      return data[i];
    }
  }
  return false;
}

function calcAverageTime(sec, nans) {
  return (sec * 1000000000 + nans) / 100000000;
}

// quickSort
let start = process.hrtime();
for (let i = 0; i < 100; i += 1) {
  quickSort(needleList);
}
let end = process.hrtime(start);
console.log(`quickSort in average took(ms): ${calcAverageTime(end[0], end[1])}\n`);

// sort()
start = process.hrtime();
for (let i = 0; i < 100; i += 1) {
  needleList.sort();
}
end = process.hrtime(start);
console.log(`sort() in average took(ms): ${calcAverageTime(end[0], end[1])}\n`);

// bubbleSort
start = process.hrtime();
for (let i = 0; i < 100; i += 1) {
  bubbleSort(needleList);
}
end = process.hrtime(start);
console.log(`bubbleSort in average took(ms): ${calcAverageTime(end[0], end[1])}\n`);

// binarySearch
start = process.hrtime();
for (let i = 0; i < 100; i += 1) {
  needleList.forEach((sku) => binarySearch(sortedSku, sku));
}
end = process.hrtime(start);
console.log(`binarySearch in average took(ms): ${calcAverageTime(end[0], end[1])}\n`);

// straightSearch
start = process.hrtime();
for (let i = 0; i < 100; i += 1) {
  needleList.forEach((sku) => straightSearch(sortedSku, sku));
}
end = process.hrtime(start);
console.log(`straightSearch in average took(ms): ${calcAverageTime(end[0], end[1])}\n`);
