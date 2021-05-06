const dataList = require("./MOCK_DATA");

const needleList = [
  "d462bb76-81ee-46af-9fdb-ebfe53a93d3f",
  "6df55f86-e3f5-4d7b-9cd5-906d8d7e804a",
  "1e63459f-0b18-4acf-9afc-e7287347bbeb",
  "e04b6074-332f-4661-8f3a-4cdcb3adfb6a",
  "be77abf7-29b0-4ed1-9379-f5d7576cb5ce",
  "3c511860-d159-457d-8374-e8205904e6f5",
  "1e63459f-0b18-4acf-9afc-e7287347bbeb",
  "e04b6074-332f-4661-8f3a-4cdcb3adfb6a",
  "9c4a0320-1d82-4a46-83b3-511ddffb7ee6",
  "1e63459f-0b18-4acf-9afc-e7287347bbeb",
  "e04b6074-332f-4661-8f3a-4cdcb3adfb6a",
  "be77abf7-29b0-4ed1-9379-f5d7576cb5ce",
  "3c511860-d159-457d-8374-e8205904e6f5",
  "1e63459f-0b18-4acf-9afc-e7287347bbeb",
  "d462bb76-81ee-46af-9fdb-ebfe53a93d3f",
  "6df55f86-e3f5-4d7b-9cd5-906d8d7e804a",
  "1e63459f-0b18-4acf-9afc-e7287347bbeb",
];

function bubbleSort(arr) {
  const bubbleArr = [...arr];
  for (let i = 0; i < bubbleArr.length - 1; i++) {
    for (let j = 0; j < bubbleArr.length - 1; j++) {
      if (bubbleArr[j + 1].sku < bubbleArr[j].sku) {
        let temp = bubbleArr[j + 1];
        bubbleArr[j + 1] = bubbleArr[j];
        bubbleArr[j] = temp;
      }
    }
  }
  return bubbleArr;
}

function quickSort(arr) {
  const quickArr = [...arr];
  if (quickArr.length < 2) {
    return quickArr;
  }
  let pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < quickArr.length; i++) {
    if (pivot.sku > quickArr[i].sku) {
      left.push(quickArr[i]);
    } else {
      right.push(quickArr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

function selectionSort(arr) {
  const selectionArr = [...arr];
  for (let i = 0; i < selectionArr.length; i++) {
    let min = i;
    for (let j = i + 1; j < selectionArr.length; j++) {
      if (selectionArr[min].sku > selectionArr[j].sku) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = selectionArr[i];
      selectionArr[i] = selectionArr[min];
      selectionArr[min] = temp;
    }
  }
  return selectionArr;
}
const sortArr = quickSort(dataList);

function binarySearch(array, value) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    const middleElement = array[middle];

    if (value === middleElement.sku) {
      return value;
    }
    if (value > middleElement.sku) {
      start = middle + 1;
    }
    if (value < middleElement.sku) {
      end = middle - 1;
    }
  }
  return false;
}
function straightSearch(value) {
  for (let i = 0; i < dataList.length; i++) {
    if (dataList[i].sku === value) {
      return i;
    }
  }
  return null;
}

const result = (func, data) => needleList.map((sku) => func(data, sku));

console.time("startBinary");
result(binarySearch, sortArr);
console.timeEnd("startBinary");

console.time("straightSearch");
result(straightSearch, dataList);
console.timeEnd("straightSearch");

console.time("bubbleSort");
result(bubbleSort, dataList);
console.timeEnd("bubbleSort");

console.time("quickSort");
result(quickSort, dataList);
console.timeEnd("quickSort");

console.time("selectionSort");
result(selectionSort, dataList);
console.timeEnd("selectionSort");
