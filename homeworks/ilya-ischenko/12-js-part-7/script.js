/* eslint max-classes-per-file: ["error", 3] */

const fs = require('fs');
const data = require('./MOCK_DATA');

const sortedData = selectionSort(data);

// STRAIGHT SEARCH O(n)
function straightSearch(sku) {
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].sku === sku) {
      return data[i];
    }
  }

  return null;
}

// BINARY SEARCH O(log2n)) - NOT 2N, JUST log base 2
function binarySearch(sku) {
  let low = 0;
  let high = sortedData.length - 1;

  while (low <= high) {
    const mid = Math.floor(Number(low + high) / 2);
    const guess = sortedData[mid];

    if (guess.sku === sku) {
      return guess;
    }
    if (guess.sku > sku) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}

// BUBBLE SORT O(n^2)
function bubbleSort(arr) {
  const copyArr = [...arr];

  for (let i = 0; i < copyArr.length; i += 1) {
    for (let j = 0; j < copyArr.length - 1; j += 1) {
      if (copyArr[j].sku > copyArr[j + 1].sku) {
        const temp = copyArr[j];
        copyArr[j] = copyArr[j + 1];
        copyArr[j + 1] = temp;
      }
    }
  }

  return copyArr;
}

// SELECTION SORT O(n^2)
function selectionSort(arr) {
  const copyArr = [...arr];

  for (let i = 0; i < copyArr.length; i += 1) {
    let min = i;
    for (let j = i + 1; j < copyArr.length; j += 1) {
      if (copyArr[min].sku > copyArr[j].sku) {
        min = j;
      }
    }
    const temp = copyArr[i];
    copyArr[i] = copyArr[min];
    copyArr[min] = temp;
  }

  return copyArr;
}

// NATIVE SORT
function nativeSort([...arr]) {
  const sorted = arr.sort((a, b) => (a.sku > b.sku ? 1 : -1));
  return sorted;
}

// QUICK SORT
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[0];
  const less = [];
  const greater = [];

  for (let i = 1; i < arr.length; i += 1) {
    if (pivot.sku < arr[i].sku) {
      greater.push(arr[i]);
    } else {
      less.push(arr[i]);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
}

const results = {};
class Measure {
  constructor(algName) {
    this.results = [];
    this.algName = algName;
  }

  saveResults() {
    const average = this.results.reduce((a, b) => a + b) / 20;
    this.results.push({ average });
    results[this.algName.name] = this.results;
    return this.results;
  }
}

class SortMeasure extends Measure {
  makeMeasure() {
    if (JSON.stringify(this.algName(data)) === JSON.stringify(sortedData)) {
      this.checkResult = true;
    } else {
      this.checkResult = false;
    }

    for (let i = 0; i < data.length; i += 50) {
      const start = process.hrtime();
      this.algName(data);
      const end = process.hrtime(start);
      this.results.push(end[1]);
    }

    super.saveResults();

    this.results.push({ checkResult: this.checkResult });
  }
}

class SearchMeasure extends Measure {
  makeMeasure() {
    for (let i = 0; i < data.length; i += 50) {
      const start = process.hrtime();
      this.algName(data[i].sku);
      const end = process.hrtime(start);
      this.results.push(end[1]);
    }
    super.saveResults();
  }
}

new SortMeasure(bubbleSort).makeMeasure();
new SortMeasure(selectionSort).makeMeasure();
new SortMeasure(quickSort).makeMeasure();
new SortMeasure(nativeSort).makeMeasure();
new SearchMeasure(straightSearch).makeMeasure();
new SearchMeasure(binarySearch).makeMeasure();

fs.writeFileSync('log.js', (JSON.stringify(results, null, 2)));
