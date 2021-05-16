// task 10 https://www.codewars.com/kata/581e014b55f2c52bb00000f8
function decipherThis(str) {
  const newStr = str.split(' ');
  const arr = [];
  newStr.forEach((item) => {
    if (item.length <= 2 && item === ' ') {
      arr.push(item.charCodeAt(0));
    } else {
      const word = item.replace(/\d+/g, ((firstLetter) => String.fromCharCode(firstLetter))).split('');
      if (word.length > 1) {
        [word[1], word[word.length - 1]] = [word[word.length - 1], word[1]];
      }
      arr.push(word.join(''));
    }
  });
  return arr.join(' ');
}
console.log(decipherThis());

// optional
// task 1 https://www.codewars.com/kata/515bb423de843ea99400000a
function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

PaginationHelper.prototype.itemCount = function() {
  return this.collection.length;
};

PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.itemCount() / this.itemsPerPage);
};

PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  if (pageIndex < this.pageCount() - 1) {
    return this.itemsPerPage;
  }
  if (pageIndex === this.pageCount() - 1) {
    return this.itemCount() - pageIndex * this.itemsPerPage;
  } return -1;
};

PaginationHelper.prototype.pageIndex = function(itemIndex) {
  if (itemIndex >= 0 && itemIndex < this.itemCount()) {
    return Math.floor(itemIndex / this.itemsPerPage);
  } return -1;
};

// task 2 https://www.codewars.com/kata/52597aa56021e91c93000cb0
function moveZeros(arr) {
  let count = 0;
  const newArr = arr.slice();
  for (let i = 0; i < newArr.length; i += 1) {
    if (newArr[i] !== 0) {
      [newArr[i], newArr[count]] = [newArr[count], newArr[i]];
      count += 1;
    }
  }
  return newArr;
}
console.log(moveZeros());
