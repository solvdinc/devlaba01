const userList = require('./MOCK_DATA');

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

const straightSearch = (array, value) => {
  for (let index = 0; index < array.length; index += 1) {
    const user = array[index];
    if (user.sku === value) {
      return user;
    }
  }
  return false;
};

const binarySearch = (array, value) => {
  const midIndex = Math.floor(array.length / 2);
  const midValue = array[midIndex];
  const { sku } = { ...midValue };

  if (value === sku) {
    return midValue;
  }
  if (array.length > 1 && value < midValue.sku) {
    return binarySearch(array.splice(0, midIndex), value);
  }
  if (array.length > 1 && value > midValue.sku) {
    return binarySearch(array.splice(midIndex + 1, array.length), value);
  }

  return false;
};

const quickSort = (array) => {
  if (array.length < 2) return array;

  const pivot = array[array.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < array.length - 1; i += 1) {
    if (array[i].sku < pivot.sku) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

const test = (cb, list) => needleList.map((sku) => cb(list, sku));

console.time('straightSearch');
console.log('straightSearch: ', test(straightSearch, userList));
console.timeLog('straightSearch', '\n');

const sortedUserList = quickSort(userList);

console.time('binarySearch');
console.log('binarySearch: ', test(binarySearch, sortedUserList));
console.timeLog('binarySearch', '\n');

// binarySearch(sortedUserList, 'e04b6074-332f-4661-8f3a-4cdcb3adfb6a');
