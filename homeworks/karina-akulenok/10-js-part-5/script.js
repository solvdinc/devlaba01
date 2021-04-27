// task 1 https://www.codewars.com/kata/55e7650c8d894146be000095/train/javascript
function validateMessage(msg) {
  if (msg === null) {
    throw new ReferenceError('Message is null!');
  }
  if (typeof (msg) !== 'string') {
    throw new TypeError(`Message should be of type string but was of type ${typeof msg}!`);
  }
  if ((msg.length > 255) || (msg.length === 0)) {
    throw new RangeError(`Message contains ${msg.length} characters!`);
  }
  if ((msg.search('<') !== -1) && (msg.search('>') !== -1)) {
    return false;
  }
  return true;
}
console.log(validateMessage());

// task 2 https://www.codewars.com/kata/5a353a478f27f244a1000076
function sayJoke(apiUrl, jokeId) {
  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const { jokes } = data;

      if (!jokes) {
        return Promise.reject(new Error(`No jokes at url: ${apiUrl}`));
      }

      const joke = data.jokes.find((item) => item.id === jokeId);

      if (joke) {
        return {
          saySetup: () => joke.setup,
          sayPunchLine: () => joke.punchLine,
        };
      }
      return Promise.reject(new Error(`No jokes found id: ${jokeId}`));
    });
}
console.log(sayJoke());

// task 3
function timer() {
  let seconds = 0;

  const id = setInterval(() => {
    seconds += 1;

    if (seconds === 6) {
      clearInterval(id);
    } else {
      console.log(`Elapsed time: ${seconds} sec`);
    }
  }, 1000);
}
timer();

// task 6 Digit or not
function isRegx(str) {
  if ((/^\d+/).test(str)) {
    return true;
  }
  return false;
}

console.log('will false:', isRegx('karina'));
console.log('will true:', isRegx('3bears'));
console.log('will true:', isRegx('5hands'));
console.log('will false:', isRegx('hello'));
console.log('will true:', isRegx('123hi'));

// task 7 Optional (advanced)
function isPhoneNumber(str) {
  if ((/^\+?(\d{3})[ ](\d{2})[.-](\d{3})[.-](\d{2})[.-](\d{2})/g).test(str) || (/^\+?(\d{3})[ ](\d{2})[.-](\d{3})[.-](\d{4})/g).test(str)) {
    if ((str.match(/\d{3}/)[0] === '375') || (str.match(/\d{3}/)[0] === '380')) {
      return 'It\'s a right number';
    }
  }
  return 'This number doesn\'t match';
}

console.log('will true:', isPhoneNumber('+375 23-555-44-44'));
console.log('will true:', isPhoneNumber('+380 55-666-7777'));
console.log('will false:', isPhoneNumber('213521252121'));
console.log('will false:', isPhoneNumber('375546985465468498746548/987'));
console.log('will false:', isPhoneNumber('375 а это секрет'));
