// task 1 https://www.codewars.com/kata/5715eaedb436cf5606000381
function solution1() {
  function positiveSum(arr) {
    return arr.reduce((acc, el) => (el > 0 ? el + acc : acc), 0);
  }

  positiveSum([1, -4, 7, 12]);
}

// task 2 https://www.codewars.com/kata/5a3e1319b6486ac96f000049
function solution2() {
  function pairs(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i += 2) {
      if (Math.abs(arr[i] - arr[i + 1]) === 1) {
        count += 1;
      }
    }
    return count;
  }

  pairs([1, 2, 5, 8, -4, -3, 7, 6, 5]);
}

// task 3 https://www.codewars.com/kata/5aba780a6a176b029800041c
function solution3() {
  function maxMultiple(divisor, bound) {
    if (bound % divisor === 0) {
      return bound;
    }
    return maxMultiple(divisor, bound - 1);
  }

  maxMultiple(2, 7);
}

// task 4 https://www.codewars.com/kata/514a6336889283a3d2000001
function solution4() {
  function getEvenNumbers(numbersArray) {
    return numbersArray.filter((el) => el % 2 === 0);
  }

  getEvenNumbers([2, 4, 5, 6]);
}

// task 5 https://www.codewars.com/kata/5a090c4e697598d0b9000004
function solution5() {
  function solve(arr) {
    const maxMinArr = [];
    const sortArr = [...arr];
    sortArr.sort((a, b) => b - a);

    while (sortArr.length > 1) {
      const max = Math.max(...sortArr);
      const min = Math.min(...sortArr);
      maxMinArr.push(max, min);

      sortArr.splice(sortArr.indexOf(max), 1);
      sortArr.splice(-1);
    }

    return [...maxMinArr, ...sortArr];
  }

  solve([15, 11, 10, 7, 12]);
}

// task 6 https://www.codewars.com/kata/566044325f8fddc1c000002c
function solution6() {
  function evenChars(string) {
    if (string.length < 2 || string.length > 100) {
      return 'invalid string';
    }

    return string.split('').filter((el, index) => index % 2 === 1);
  }

  evenChars('abcdefghijklm');
}

// task 7 https://www.codewars.com/kata/545a4c5a61aa4c6916000755
function solution7() {
  const gimme = (inputArray) => {
    const max = Math.max(...inputArray);
    const min = Math.min(...inputArray);
    return inputArray.findIndex((el) => el > min && el < max);
  };

  gimme([2, 3, 1]);
}

// task 8 https://www.codewars.com/kata/578553c3a1b8d5c40300037c
function solution8() {
  const binaryArrayToNumber = (arr) => parseInt(arr.join(''), 2);

  binaryArrayToNumber([0, 0, 0, 1]);
}

// task 9 https://www.codewars.com/kata/585d7d5adb20cf33cb000235
function solution9() {
  function findUniq(arr) {
    const resObj = arr.reduce((acc, el) => {
      acc[el] = acc[el] || 0;
      acc[el] += 1;
      return acc;
    }, {});

    return Number(Object.keys(resObj).filter((key) => resObj[key] === 1));
  }

  findUniq([1, 1, 1, 2, 1, 1]);
}

// task 10 https://www.codewars.com/kata/581e014b55f2c52bb00000f8
function solution10() {
  function decipherThis(str) {
    const arr = str.split(' ');

    const arrOfNumbers = arr.map((el) => parseInt(el, 10));

    const arrOfCharsFromNumbers = arr.map((el) => String.fromCharCode(parseInt(el, 10)));

    // replace numbers to chars
    const preDecipherArr = arr.map((el, i) =>
      el.replace(arrOfNumbers[i], arrOfCharsFromNumbers[i]),
    );

    //  swap second and last char
    const decipherArr = preDecipherArr.map((el) => {
      if (el.length > 2) {
        const tempArr = el.split('');
        const [_, temp] = tempArr;
        tempArr[1] = tempArr[tempArr.length - 1];
        tempArr[tempArr.length - 1] = temp;
        return tempArr.join('');
      }
      return el;
    });
    return decipherArr.join(' ');
  }

  decipherThis('72olle 103doo 100ya');
}

// task 11 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
function solution11() {
  function sortArray(array) {
    const arr = [...array];
    for (let i = 0; i < arr.length; i += 1) {
      let temp;
      for (let j = 0; j < arr.length; j += 1) {
        if (Math.abs(arr[i]) % 2 === 1 && Math.abs(arr[j]) % 2 === 1 && arr[i] < arr[j]) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }

  sortArray([5, 8, 6, 3, 4]);
}

// task 12 https://www.codewars.com/kata/515bb423de843ea99400000a
function solution12() {
  // The constructor takes in an array of items and a integer indicating how many
  // items fit within a single page
  function PaginationHelper(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  // returns the number of items within the entire collection
  PaginationHelper.prototype.itemCount = function () {
    return this.collection.length;
  };

  // returns the number of pages
  PaginationHelper.prototype.pageCount = function () {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  };

  // returns the number of items on the current page. page_index is zero based.
  // this method should return -1 for pageIndex values that are out of range
  PaginationHelper.prototype.pageItemCount = function (pageIndex) {
    const pages = this.pageCount() - 1;
    if (pageIndex > pages || pageIndex < 0) return -1;
    return this.collection.slice(pageIndex * this.itemsPerPage, (pageIndex + 1) * this.itemsPerPage)
      .length;
  };

  // determines what page an item is on. Zero based indexes
  // this method should return -1 for itemIndex values that are out of range
  PaginationHelper.prototype.pageIndex = function (itemIndex) {
    const items = this.itemCount();
    if (itemIndex > items - 1 || itemIndex < 0) return -1;
    return Math.floor(itemIndex / this.itemsPerPage);
  };

  const helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
  helper.pageCount(); // should == 2
  helper.itemCount(); // should == 6
  helper.pageItemCount(0); // should == 4
  helper.pageItemCount(1); // last page - should == 2
  helper.pageItemCount(2); // should == -1 since the page is invalid

  // pageIndex takes an item index and returns the page that it belongs on
  helper.pageIndex(5); // should == 1 (zero based index)
  helper.pageIndex(2); // should == 0
  helper.pageIndex(20); // should == -1
  helper.pageIndex(-10); // should == -1
}

// task 13 https://www.codewars.com/kata/52597aa56021e91c93000cb0
function solution13() {
  const moveZeros = (arr) => {
    const digitArr = arr.filter((el) => el !== 0);

    const zeroArr = arr.filter((el) => el === 0);

    return digitArr.concat(zeroArr);
  };

  moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]);
}

// task 14 https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3
function solution14() {
  function findUniq(arr) {
    const newArr = arr.map((el) =>
      Array.from(new Set(el.toLowerCase().split('').sort().join('').trim())).join(''),
    );
    const arr1 = newArr.reduce((acc, el) => {
      acc[el] = acc[el] || 0;
      acc[el] += 1;
      return acc;
    }, {});

    const unique = Object.keys(arr1).find((el) => arr1[el] === 1);
    const findIndex = newArr.indexOf(unique);
    return arr[findIndex];
  }

  findUniq(['Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter']);
}
