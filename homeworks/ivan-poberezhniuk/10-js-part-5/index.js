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

// Task 2
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
let sec = 0;

const timer = setInterval(() => {
  sec += 1;
  if (sec >= 5) {
    clearInterval(timer);
  }
  console.log(`Elapsed time: ${sec} sec`);
}, 1000);
