// import DATA from './MOCK_DATA.js';
const DATA = require('./MOCK_DATA');
// console.log(DATA);

const testResults = {
  straightSearch: [],
  binarySearch: [],
};

const getAllSku = (data) => {
  const resArr = [];
  data.map((el) => resArr.push(el.sku));
  return resArr;
};

const arrOfAllSku = getAllSku(DATA);

const randomSku = (arr) => {
  const resArr = [];
  let max = arr.length - 1;
  let min = 0;
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

// const needleList = [
//   '83b65687-1774-4172-9e28-44537a619a7e',
//   'd462bb76-81ee-46af-9fdb-ebfe53a93d3f',
//   '6df55f86-e3f5-4d7b-9cd5-906d8d7e804a',
//   '1e63459f-0b18-4acf-9afc-e7287347bbeb',
//   'e04b6074-332f-4661-8f3a-4cdcb3adfb6a',
//   'be77abf7-29b0-4ed1-9379-f5d7576cb5ce',
//   '3c511860-d159-457d-8374-e8205904e6f5',
//   '1e63459f-0b18-4acf-9afc-e7287347bbeb',
//   'e04b6074-332f-4661-8f3a-4cdcb3adfb6a',
//   '9c4a0320-1d82-4a46-83b3-511ddffb7ee6',
//   '1e63459f-0b18-4acf-9afc-e7287347bbeb',
//   'e04b6074-332f-4661-8f3a-4cdcb3adfb6a',
//   'be77abf7-29b0-4ed1-9379-f5d7576cb5ce',
//   '3c511860-d159-457d-8374-e8205904e6f5',
//   '1e63459f-0b18-4acf-9afc-e7287347bbeb',
//   'd462bb76-81ee-46af-9fdb-ebfe53a93d3f',
//   '6df55f86-e3f5-4d7b-9cd5-906d8d7e804a',
//   '1e63459f-0b18-4acf-9afc-e7287347bbeb',
// ];

const simpleSort = (arr) => {
  const array = [...arr];
  return array.sort((a, b) => (a.sku > b.sku ? 1 : -1));
};

const straightSearch = (arr, id) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].sku === id) {
      return arr[i];
    }
  }
};

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

const sortData = simpleSort(DATA);

const binarySearch = (data, id) => {
  let low = 0;
  let high = data.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (data[mid].sku === id) {
      return data[mid];
    } else if (data[mid].sku > id) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
};

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

const averageTime = (arr) => {
  return +(arr.reduce((acc, el) => acc + el, 0) / arr.length).toFixed(5);
};

testResults['averageStraightPerformance'] = averageTime(
  testResults.straightSearch,
);
testResults['averageBinaryPerformance'] = averageTime(testResults.binarySearch);

console.log('Binary search results(ms): ', testResults.binarySearch);
console.log('Straight search results(ms): ', testResults.straightSearch);
console.log(
  'averageBinaryPerformance(ms): ',
  testResults.averageBinaryPerformance,
);
console.log(
  'averageStraightPerformance(ms): ',
  testResults.averageStraightPerformance,
);
