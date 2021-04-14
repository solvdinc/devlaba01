
// task 1 https://www.codewars.com/kata/5715eaedb436cf5606000381

function solution1(array) {
  let sum = 0;
  for (i = 0; i < array.length; i += 1) {
    if (array[i] > 0) {
      sum += array[i];
    }
  }
  return sum;
}

// task 2 https://www.codewars.com/kata/5a3e1319b6486ac96f000049

function solution2(array) {
  let counter = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (i % 2 !== 0 && Math.abs(array[i] - array[i - 1]) === 1) {
      counter++;
    }
  }
  return counter;
};


// task 3 https://www.codewars.com/kata/5aba780a6a176b029800041c

function solution3(divisor, bound) {
  return bound - bound % divisor;
}

// task 4 https://www.codewars.com/kata/514a6336889283a3d2000001

function solution4(numbersArray) {
  return numbersArray.filter((x) => {
    return x % 2 === 0;
  });
}

// task 5 https://www.codewars.com/kata/5a090c4e697598d0b9000004

function solution5(array) {
  array = array.slice().sort((x, y) => x - y)
  let result = []
  while (array.length) {
    result.push(array.pop())
    if (array.length) result.push(array.shift())
  }
  return result
  }

// task 6 https://www.codewars.com/kata/566044325f8fddc1c000002c

function solution6(string) {
  if(string.length < 2 || string.length > 100)
    return "invalid string";
  let result = [];
  for(let i = 1; i < string.length; i += 2)
  {
    result.push(string[i]);
  }
  return result;
}

// task 7 https://www.codewars.com/kata/545a4c5a61aa4c6916000755

function solution7(inputArray) {
  return inputArray.indexOf(inputArray.slice(0).sort((x, y) => x - y)[1]);
};

// task 8 https://www.codewars.com/kata/578553c3a1b8d5c40300037c

const binaryArrayToNumber = array => parseInt(Number(array.join('')), 2);

// task 9 https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function solution9(array) {
  return array.find(x => array.indexOf(x) === array.lastIndexOf(x));
}

// task 10 https://www.codewars.com/kata/581e014b55f2c52bb00000f8

function solution10(str) {
  return str.split(' ').map((word) => {
    const charCode = word.match(/^[0-9]+/)[0];
    const subString = word.substring(charCode.length);
    return String.fromCharCode(+charCode).concat( (subString.length === 1) 
       ? subString 
       :(subString.charAt(subString.length - 1) + subString.substring(1, subString.length - 1) + subString.charAt(0))
       );
  }).join(' ');
};

// task 11 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

function sortArray(array) {
  let oddList = array.filter(x => x % 2).sort((a, b) => b - a);

  return array.map(x => {
    return x % 2 ? oddList.pop() : x;
  });
}
