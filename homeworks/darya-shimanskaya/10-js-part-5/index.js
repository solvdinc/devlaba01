// task 1 link https://www.codewars.com/kata/55e7650c8d894146be000095/javascript
function validateMessage(message) {
  if (message === null) throw ReferenceError('Message is null!');
  if (typeof msg !== 'string') throw TypeError(`Message should be of type string but was of type ${typeof message}!`);
  if (message.length === 0) throw RangeError('Message contains 0 characters!');
  if (message.length > 255) throw RangeError(`Message contains ${message.length} characters!`);
  if (message.match(/<.+>/)) return false;

  return true;
}
validateMessage(null);

// task 2 link https://www.codewars.com/kata/5a353a478f27f244a1000076
async function sayJoke(apiUrl, jokeId) {
  const response = await fetch(apiUrl).then((resp) => resp.json());
  const specifiedJoke = response.jokes.find((joke) => joke.id === jokeId);

  if (!response.jokes) throw new Error(`No jokes at url: ${apiUrl}`);
  if (!specifiedJoke) throw new Error(`No jokes found id: ${jokeId}`);

  const jokeMethods = {
    saySetup() {
      return specifiedJoke.setup;
    },
    sayPunchLine() {
      return specifiedJoke.punchLine;
    },
  };
  return jokeMethods;
}
sayJoke();

// task 3
function timer() {
  let sec = 0;

  const timerId = setInterval(() => {
    sec += 1;
    console.log(`Elapsed time: ${sec} sec`);
  }, 1000);
  setTimeout(() => {
    clearInterval(timerId);
  }, 6000);
}
timer();

// task 6
function isDigit(string) {
  if (string.match(/^\d+/)) {
    console.log(`String (${string}) begin with a digit`);
  } else console.log(`String (${string}) do not begin with a digit`);
}
isDigit('34d233sdf');

// task 7
function phoneNumber(number) {
  const reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/;
  if (number.match(reg)) {
    console.log(number);
  } else console.log('Wrong number');
}

phoneNumber('+37510026');
phoneNumber('+380 33-567-3455');
