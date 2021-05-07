/* eslint-disable no-console */
const productList = require('./MOCK_DATA');

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

const linearSearch = (data, sku) => {
  for (let i = 0; i < data.length; i += 1) {
    const product = data[i];
    if (product.sku === sku) {
      return product;
    }
  }
  return null;
};

const binarySearch = (arr, el) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const middleIndex = Math.floor((start + end) / 2);
    const middleVal = arr[middleIndex];
    if (el === middleVal.sku) {
      return middleVal;
    }
    if (el > middleVal.sku) {
      start = middleIndex + 1;
    }
    if (el < middleVal.sku) {
      end = middleIndex - 1;
    }
  }

  return null;
};

const findProducts = (searchFunc, array) => {
  const res = [];
  for (let i = 0; i < needleList.length; i += 1) {
    const result = searchFunc(array, needleList[i]);
    if (result) {
      res.push(result);
    }
  }
  return `Number of finded results: ${res.length}`;
};

console.time('Elapsed time with Linear Search');
console.log(findProducts(linearSearch, productList));
console.timeLog('Elapsed time with Linear Search');

const filterMethod = () => {
  const resFilter = [];
  for (let i = 0; i < needleList.length; i += 1) {
    const filtered = productList.filter((obj) => obj.sku === needleList[i]);
    resFilter.push(filtered);
  }
  return `Number of finded results: ${resFilter.flat().length}`;
};
console.time('Elapsed time with array Filter method Search');
console.log(filterMethod());
console.timeLog('Elapsed time with array Filter method Search');

console.time('Elapsed time with Binary Search including Sorting');
const collator = new Intl.Collator('co');
const sorted = [...productList].sort((a, b) => collator.compare(a.sku, b.sku));
console.log(findProducts(binarySearch, sorted));
console.timeLog('Elapsed time with Binary Search including Sorting');

const sortedArr = productList.sort((a, b) => (a.sku > b.sku) - (a.sku < b.sku));
console.time('Elapsed time with Binary Search');
console.log(findProducts(binarySearch, sortedArr));
console.timeLog('Elapsed time with Binary Search');
