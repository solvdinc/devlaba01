// task 1 https://www.codewars.com/kata/55e7650c8d894146be000095/javascript
function validateMessage(msg) {
  if (msg === null) throw ReferenceError('Message is null!');
  if (typeof msg !== 'string') throw TypeError(`Message should be of type string but was of type ${typeof msg}!`);
  if (msg.length === 0 || msg.length > 255) throw RangeError(`Message contains ${msg.length} characters!`);
  if (/<.*>/.test(msg)) return false;
  return true;
}

//2 task https://www.codewars.com/kata/5a353a478f27f244a1000076

async function sayJoke(apiUrl, jokeId) {
  const response = await fetch(apiUrl);
  const jsonResponse = await response.json();

  if (!jsonResponse.jokes) throw new Error(`No jokes at url: ${apiUrl}`);

  const result = jsonResponse.jokes.find(joke => joke.id === jokeId);
  if (!result) throw new Error(`No jokes found id: ${jokeId}`);

  return {
    saySetup: function () {
      return result.setup;
    },
    sayPunchLine: function () {
      return result.punchLine;
    }
  };
}

// 3 task

let count = 0;
const timer = setInterval(() => {
  count += 1;
  if (count >= 5) {
    clearInterval(timer);
  }
  console.log(`Elapsed time: ${count} sec`);
}, 1000);

// task 6

function digitOrNot(str) {
  if (str[0].match(/^\d+/)) {
    return true;
  }
  return false;
}
console.log(digitOrNot('1test'));
console.log(digitOrNot('test1'));
