// TASK 1 https://www.codewars.com/kata/55e7650c8d894146be000095/javascript
function validateMessage(msg) {
  if (msg === null) {
    throw ReferenceError('Message is null!');
  }

  if (typeof msg !== 'string') {
    throw TypeError(`Message should be of type string but was of type ${typeof msg}!`);
  }

  if (msg.length > 255 || msg.length === 0) {
    throw RangeError(`Message contains ${msg.length} characters!`);
  }

  /*
    сработала только проверка на всё кроме цифр,
    не знаю почему, но проверки типа:
    msg.match(/<\w+>/),
    msg.match(/<\w+>/) || msg.match(/<\s0*>/) -
    не срабатывают в тестах
  */
  if (msg.match(/<\D+>/)) {
    return false;
  }

  return true;
}
console.log(validateMessage('How are ya doing? < > Good!'));

// TASK 2 https://www.codewars.com/kata/5a353a478f27f244a1000076
async function sayJoke(apiUrl, jokeId) {
  const data = await fetch(apiUrl).then((res) => res.json());
  if (!data.jokes) {
    throw new Error(`No jokes at url: ${apiUrl}`);
  }

  const jokeItem = data.jokes.find((joke) => joke.id === jokeId);
  if (!jokeItem) {
    throw new Error(`No jokes found id: ${jokeId}`);
  }

  return {
    saySetup() {
      return jokeItem.setup;
    },

    sayPunchLine() {
      return jokeItem.punchLine;
    },
  };
}

// TASK 6 Digit or not
function digitCheck(str) {
  return (/\d/).test(str[0]);
}
console.log(digitCheck('1fsdfsdf'));
console.log(digitCheck('fs1dfsdf'));

// TASK 7 OPTIONAL Check if this entry is a phone number
// Ukraine: +380 xx-xxx-xxxx
// starts with 380 and after that 9 digits
function checkPhoneNum(num) {
  return (/\+380-\d{2}-\d{3}-\d{2}-\d{2}/).test(num);
}
console.log(checkPhoneNum('+380-67-584-93-28'));
console.log(checkPhoneNum('380-67-584-93-2'));
console.log(checkPhoneNum('80-67-584-93-28'));
console.log(checkPhoneNum('380-67-5849328'));
console.log(checkPhoneNum('3806-584-93-28'));
