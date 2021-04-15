// task 1 https://www.codewars.com/kata/opposite-number
function solution_task1(num) {
  if (typeof num === "number") {
    return -num;
  }
}
solution_task1(5);

// task 2 https://www.codewars.com/kata/basic-mathematical-operations
function solution_task2(string, value1, value2) {
  if (string === "+") {
    return Math.round(value1 + value2);
  } else if (string === "-") {
    return Math.round(value1 - value2);
  } else if (string === "*") {
    return Math.round(value1 * value2);
  } else if (string === "/") {
    return Math.round(value1 / value2);
  } else {
    return "fault";
  }
}
solution_task2("/", 300020, 23);

// task 3 codewars.com/kata/printing-array-elements-with-comma-delimiters
function solution_task3(array) {
  return array.join(",");
}
solution_task3(["h", "o", "l", "a"]);

// task 4 http://www.codewars.com/kata/transportation-on-vacation
function solution_task4(days) {
  let rent = 40;
  if (days >= 7) {
    return days * rent - 50;
  } else if (days >= 3) {
    return days * rent - 20;
  }
}
solution_task4(7);

// task 5  https://www.codewars.com/kata/calculating-with-functions
function stringToNum(num, func) {
  return func === undefined ? num : func(num);
}
function zero(func) {
  return stringToNum(0, func);
}
function one(func) {
  return stringToNum(1, func);
}
function two(func) {
  return stringToNum(2, func);
}
function three(func) {
  return stringToNum(3, func);
}
function four(func) {
  return stringToNum(4, func);
}
function five(func) {
  return stringToNum(5, func);
}
function six(func) {
  return stringToNum(6, func);
}
function seven(func) {
  return stringToNum(7, func);
}
function eight(func) {
  return stringToNum(8, func);
}
function nine(func) {
  return stringToNum(9, func);
}
function plus(oRight) {
  return function (oLeft) {
    return oLeft + oRight;
  };
}
function minus(oRight) {
  return function (oLeft) {
    return oLeft - oRight;
  };
}
function times(oRight) {
  return function (oLeft) {
    return oLeft * oRight;
  };
}
function dividedBy(oRight) {
  return function (oLeft) {
    return Math.round(oLeft / oRight);
  };
}
seven(times(five()));

// task 6 https://www.codewars.com/kata/get-the-middle-character
function solution_task6(str) {
  const strLenght = str.length;
  if (strLenght % 2 === 0) {
    return str[strLenght / 2 - 1] + str[strLenght / 2];
  } else {
    return str[(strLenght - 1) / 2];
  }
}
solution_task6("testing");

//task 7 https://www.codewars.com/kata/partition-on
function solution_task7(pred, items) {
  for (let i = 0; i < items.length; i++) {
    if (pred(items[i])) {
      return i;
    }
  }
}
const isEven = (item) => item % 2 === 0;
const evenArr = (item) => item % 2 > 0;
solution_task7(isEven, [1, 3, 1, 2]);

//task 8 https://www.codewars.com/kata/word-count
function solution_task8(str) {
  const regularStr = new RegExp(/[^\s]+/g);
  const newStr = str.match(regularStr);
  return newStr.length;
}
solution_task8("No results for search term `s`");

//task 9 https://www.codewars.com/kata/find-the-odd-int/
function solution_task9(arrOdd) {
  for (let i = 0; i < arrOdd.length; i++) {
    let count = 0;
    for (let j = 0; j < arrOdd.length; j++) {
      if (arrOdd[i] === arrOdd[j]) {
        count++;
      }
    }
    if (count % 2 !== 0) {
      return arrOdd[i];
    }
  }
}
solution_task9([-3, 1, 3, 1, 0, 5, -4, 3, -4, 2, 5, 3, 0, -3, 2, 9, 9]);

//task 10 https://www.codewars.com/kata/find-the-parity-outlier
function solution_task10(arrOddInt) {
  let arrOdd = arrOddInt.filter((value) => value % 2 === 0);
  let arrInt = arrOddInt.filter((value) => value % 2 > 0);
  return arrOddInt.length === 1 ? arrOdd[0] : arrInt[0];
}
solution_task10([160, 3, 1719, 19, 11, 13, -21]);

//task 11 https://www.codewars.com/kata/zipwith
function solution_task11(func, a, b) {
  const arrL = Math.min(a.length, b.length);
  const result = [];
  for (let i = 0; i < arrL; i++) {
    result.push(func(a[i], b[i]));
  }
  return result;
}
solution_task11((a, b) => a + b, [0, 1, 2, 3], [0, 1, 2, 3]);

//task 12 https://www.codewars.com/kata/filter-the-number
function solution_task12(num) {
  let regExp = new RegExp(/\d+/g);
  let newNum = num.match(regExp).join("");
  return newNum;
}
solution_task12("58945-03nk5v d3fu");

//task 13  https://www.codewars.com/kata/n-th-fibonacci
function solution_task13(num) {
  let a = 0;
  let b = 1;
  for (let i = 2; i <= num; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return a;
}
solution_task13(4);

//task 14 https://www.codewars.com/kata/cat-and-mouse-2d-version/
function solution_task14(map, moves) {
  let mapArr = map.split("\n");
  let catX = mapArr.map((el) => el.indexOf("C"));
  let mouseX = mapArr.map((el) => el.indexOf("m"));
  let catY = catX.findIndex((el) => el >= 0);
  let mouseY = mouseX.findIndex((el) => el >= 0);
  let catchM =
    Math.abs(mouseX[mouseY] - catX[catY]) +
    Math.abs(catX[catY] - mouseX[mouseY]);
  if (catchM <= moves) {
    return "Caught";
  } else if (catchM >= moves) {
    return "Escaped";
  } else {
    return "boring without two animals";
  }
}
solution_task14(
  `
    ...C.....
    .........
    .....m...`,
  5
);

//task 15  https://www.codewars.com/kata/duplicate-encoder
function solution_task15(string) {
  return string
    .toLowerCase()
    .split("")
    .map(function (currentValue, index, array) {
      return array.indexOf(currentValue) === array.lastIndexOf(currentValue)
        ? "("
        : ")";
    })
    .join("");
}
solution_task15("(( @");

// task 17 https://www.codewars.com/kata/576757b1df89ecf5bd00073b
function solution_task17(floor) {
  let result = [];
  for (let i = 1; i <= floor; i++) {
    result.push(
      " ".repeat(floor - i) + "*".repeat(2 * i - 1) + " ".repeat(floor - i)
    );
  }
  return result;
}
solution_task17(10);

// task 18 https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
function solution_task18(str) {
  return str
    .split("")
    .map((item, i, arr) => {
      let arrStr = arr.slice();
      arrStr[i] = arrStr[i].toUpperCase();
      return arrStr.join("");
    })
    .filter((w, i) => w[i] !== " ");
}
solution_task18("hello");

// task 19 https://www.codewars.com/kata/59d398bb86a6fdf100000031
function solution_task19(string, N) {
  let arr = [];
  let strArr = string.split(" ").join("");
  for (let i = 0; i < strArr.length; i += N) {
    arr.push(strArr.slice(i, i + N));
  }
  return arr.join(" ");
}
solution_task19("This is an example string", 5);

// task 20 https://www.codewars.com/kata/514a024011ea4fb54200004b
function solution_task20(domain) {
  let arrReg = new RegExp(/.+:\/\/|www[0-9]|\..+/g);
  let arrD = domain.replace(arrReg, "");
  return arrD;
}
solution_task20("http://github.com/carbonfive/raygun");
