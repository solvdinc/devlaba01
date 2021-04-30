/* eslint-disable no-unused-vars */
// 1 https://www.codewars.com/kata/55e7650c8d894146be000095/javascript
const validateMessage = (msg) => {
  if (msg === null) throw new ReferenceError('Message is null!');
  if (typeof msg !== 'string') {
    throw new TypeError(
      `Message should be of type string but was of type ${typeof msg}!`,
    );
  }
  if (msg.length === 0) throw new RangeError('Message contains 0 characters!');
  if (msg.length >= 264) {
    throw new RangeError(`Message contains ${msg.length} characters!`);
  }
  if (msg.includes('<') && msg.includes('>')) return false;
  return true;
};

// 2 https://www.codewars.com/kata/5a353a478f27f244a1000076
const sayJoke = async (apiUrl, jokeId) => {
  if (apiUrl !== 'http://great.jokes/christmas') {
    throw new Error(`No jokes at url: ${apiUrl}`);
  }
  let result = await fetch(apiUrl);
  result = result.json();
  return result
    .then((res) => {
      const joke = res && res.jokes && res.jokes.filter(({ id }) => id === jokeId)[0];
      if (joke) {
        return {
          saySetup: () => joke.setup,
          sayPunchLine: () => joke.punchLine,
        };
      }
      throw new Error(`No jokes found id: ${jokeId}`);
    })
    .catch(() => {
      throw new Error(`No jokes found id: ${jokeId}`);
    });
};

// 3 setTimeout/setInterval
let counter = 1;
const timer = setInterval((() => {
  console.log(`Elapsed time: ${counter} sec`);
  counter += 1;
}), 1000);

setTimeout(() => {
  clearInterval(timer);
}, 5000);

// 4 Play around with this service and see how Event Loop works...

// 6 number
const checkStr = (str) => {
  if (str.match(/^\d/)) {
    return true;
  }
  return false;
};

// 7 optional
// Check if this entry is a phone number, e.g. set the format of your country

const checkCountry = (str) => {
  if (str.match(/^\+?38?(0\d{9})$/)) {
    return true;
  }
  return false;
};
