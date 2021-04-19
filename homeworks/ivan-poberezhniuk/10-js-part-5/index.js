// Task 1 https://www.codewars.com/kata/55e7650c8d894146be000095/javascript
const validateMessage = (msg) => {
  if (msg === null) throw ReferenceError(`Message is null!`);
  if (typeof msg !== `string`)
    throw TypeError(`Message should be of type string but was of type ${typeof msg}!`);
  if (msg.length === 0) throw RangeError(`Message contains 0 characters!`);
  if (msg.length >= 264) throw RangeError(`Message contains ${msg.length} characters!`);
  if (msg.includes(`<`) && msg.includes(`>`)) return false;

  return true;
};

// Task 2 https://github.com/qaprosoft/devlaba01/blob/master/lectures/10-js-part-5/task.md#3-settimeoutsetinterval
const sayJoke = async (apiUrl, jokeId) => {
  const mixins = {
    saySetup() {
      return this.setup;
    },
    sayPunchLine() {
      return this.punchLine;
    },
  };

  const response = await fetch(apiUrl).then((res) => res.json());
  if (!response.jokes) throw new Error(`No jokes at url: ${apiUrl}`);

  const searchedJoke = response.jokes.filter((joke) => joke.id === jokeId)[0];
  if (!searchedJoke) throw new Error(`No jokes found id: ${jokeId}`);

  return { ...mixins, ...searchedJoke };
};

// Task 3 setTimeout/setInterval
// https://github.com/qaprosoft/devlaba01/blob/master/lectures/10-js-part-5/task.md#3-settimeoutsetinterval
let sec = 0;

const timer = setInterval(() => {
  sec += 1;
  if (sec >= 5) {
    clearInterval(timer);
  }
  console.log(`Elapsed time: ${sec} sec`);
}, 1000);

// Task 6 Digit or not
// https://github.com/qaprosoft/devlaba01/blob/master/lectures/10-js-part-5/task.md#6-digit-or-not
const DigitOrNot = (str) => !!str.match(/^\d+/);

console.log('Digit. Should be true:', DigitOrNot('2021')); // true
console.log('Word. Should be false:', DigitOrNot('solvd')); // false
console.log('Combined, starts with \\d. Should be true:', DigitOrNot('2021solvd')); // true
console.log('Combined, starts with \\w. Should be false:', DigitOrNot('solvd2021')); // false

// Task 7 Check if this entry is a phone number, e.g. set the format of your country:
// https://github.com/qaprosoft/devlaba01/blob/master/lectures/10-js-part-5/task.md#7-optional-advanced

const checkPhoneNUmber = (phoneNumber) => {
  const regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/g;
  return phoneNumber.match(regex);
};

console.log(checkPhoneNUmber('+380 2222222222'));
console.log(checkPhoneNUmber('+380 222aas   ;;sldp2222asd222'));
console.log(checkPhoneNUmber('1123+380 2222askdmas 222222'));
console.log(checkPhoneNUmber('as++++23da3+s+375 xx-xxx-xx-xx'));
console.log(checkPhoneNUmber('+38(099)-75-39-91'));
