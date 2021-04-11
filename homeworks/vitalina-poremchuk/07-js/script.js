//task 1 https://www.codewars.com/kata/5715eaedb436cf5606000381
function solution_task1(arr) {
  return arr.reduce((item, index) => (index > 0 ? item + index : item), 0);
}
solution_task1([1, -4, 7, 12]);

//task 2 https://www.codewars.com/kata/5a3e1319b6486ac96f000049
function solution_task2(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] + 1 === arr[i + 1] || arr[i] - 1 === arr[i + 1]) {
      count++;
    }
  }
  return count;
}
solution_task2([1, 2, 5, 8, -4, -3, 7, 6, 5]);

//task 3 https://www.codewars.com/kata/5aba780a6a176b029800041c
function solution_task3(divisor, bound) {
  return Math.floor(bound / divisor) * divisor;
}
solution_task3(10, 50);

//task 4 https://www.codewars.com/kata/514a6336889283a3d2000001
function solution_task4(arr) {
  return arr.filter((int) => int % 2 === 0);
}
solution_task4([2, 4, 5, 6]);

//task 5 https://www.codewars.com/kata/5a090c4e697598d0b9000004
function solution_task5(arr) {
  const rearrange = arr.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < arr.length; i += 2) {
    rearrange.splice(i, 0, rearrange.pop());
  }
  return rearrange;
}
solution_task5([15, 11, 10, 7, 12, 3]);

//task 6 https://www.codewars.com/kata/566044325f8fddc1c000002c
function solution_task6(str) {
  if (str.length <= 2 || str.length >= 100) {
    return "invalid string";
  }
}
solution_task6("abcdefghijklm");

//task 7 https://www.codewars.com/kata/545a4c5a61aa4c6916000755
function solution_task7(str) {
  const num = [...str].sort((a, b) => a - b);
  return str.indexOf(num[1]);
}
solution_task7([5, 10, 14]);

//task 8 https://www.codewars.com/kata/578553c3a1b8d5c40300037c
function solution_task8(arr) {
  return Number.parseInt(arr.join(""), 2);
}
solution_task8([1, 0, 1, 1]);

//task 9 https://www.codewars.com/kata/585d7d5adb20cf33cb000235
function solution_task9(arr) {
  return arr.find((item) => arr.indexOf(item) === arr.lastIndexOf(item));
}
solution_task9([0, 0, 0.55, 0, 0]);

//task 10 https://www.codewars.com/kata/581e014b55f2c52bb00000f8s
function solution_task10(str) {
  const charCod = {
    65: "A",
    66: "B",
    67: "C",
    68: "D",
    69: "E",
    70: "F",
    71: "G",
    72: "H",
    73: "I",
    74: "J",
    75: "K",
    76: "L",
    77: "M",
    78: "N",
    79: "O",
    80: "P",
    81: "Q",
    82: "R",
    83: "S",
    84: "T",
    85: "U",
    86: "V",
    87: "W",
    88: "X",
    89: "Y",
    90: "Z",
    97: "a",
    98: "b",
    99: "c",
    100: "d",
    101: "e",
    102: "f",
    103: "g",
    104: "h",
    105: "i",
    106: "j",
    107: "k",
    108: "l",
    109: "m",
    110: "n",
    111: "o",
    112: "p",
    113: "q",
    114: "r",
    115: "s",
    116: "t",
    117: "u",
    118: "v",
    119: "w",
    120: "x",
    121: "y",
    119: "w",
    120: "x",
    121: "y",
    122: "z",
  };

  const words = str.split(" ");
  const cipher = words.map((word) => {
    const charCode = String(word.match(/(\d+)/g).map(Number));
    return word.replace(charCode, charCod[charCode]);
  });

  const result = cipher.map((arr, i) => {
    const wordArr = arr.split("");
    const word = wordArr[1];
    wordArr[1] = wordArr[wordArr.length - 1];
    wordArr[wordArr.length - 1] = word;
    return wordArr.join("");
  });
  return result.join(" ");
}
solution_task10("72olle 103doo 100ya");

//task 11 https://www.codewars.com/kata/585d7d5adb20cf33cb000235
function solution_task11(arr) {
  const oddNum = arr.filter((odd) => odd % 2).sort((a, b) => a - b);
  return arr.map((num) => (num % 2 ? oddNum.shift() : num));
}
solution_task11([5, 8, 6, 3, 4]);
