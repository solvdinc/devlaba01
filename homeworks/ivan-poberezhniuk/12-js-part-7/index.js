const userList = require('./MOCK_DATA');

const sortedUserList = userList.sort((a, b) => a.sku.localeCompare(b.sku));
const searchValue = 'c0f8ff00-9440-438e-8713-fa74f15a927d';

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

  if (value === midValue.sku) {
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

console.time('straightSearch');
console.log('straightSearch: ', straightSearch(userList, searchValue));
console.timeLog('straightSearch', '\n');

console.time('binarySearch');
console.log('binarySearch: ', binarySearch(sortedUserList, searchValue));
console.timeLog('binarySearch', '\n');
