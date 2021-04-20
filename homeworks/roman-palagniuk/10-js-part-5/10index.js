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

const fn = () => {
  console.log(`Elapsed time: ${counter} sec`);
  counter += 1;
};

const timer = setInterval(fn, 1000);

setTimeout(() => {
  clearInterval(timer);
}, 5000);

// 4 Play around with this service and see how Event Loop works...

// 5
// https://randomuser.me/api/?results=7

const url = 'https://randomuser.me/api/?results=5';
const xhr = new XMLHttpRequest();

xhr.open('GET', url, true);
xhr.send();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === 4) {
    const users = JSON.parse(xhr.response);
    users.results.forEach((item) => {
      const list = document.querySelector('.list1');
      list.innerHTML += `<li ><img src='${item.picture.thumbnail}'><p>${item.name.first} ${item.name.last}</p>
      </li>`;
    });
  } else if (xhr.readyState <= 4) {
    const list = document.querySelector('.list');
    list.innerHTML += 'loading...';
  } else {
    const users = JSON.parse(xhr.responseText);
    console.error(users);
  }
});

// fetch
fetch('https://randomuser.me/api/?results=5')
  .then((response) => response.json())
  .then((json) => json.results.forEach((item) => {
    const list2 = document.querySelector('.list2');
    list2.innerHTML += `<li ><img src='${item.picture.thumbnail}'><p>${item.name.first} ${item.name.last}</p>
    </li>`;
  }));

// 6 number
const checkStr = (str) => {
  if (str.match(/^\d/)) {
    console.log('string starts with number');
  } else {
    console.log('string starts with letter');
  }
};

// 7 optional
// Check if this entry is a phone number, e.g. set the format of your country

const checkCountry = (str) => {
  if (str.match(/^\+?38?(0\d{9})$/)) {
    console.log('Provided string is Ukrainian phone number');
  } else {
    console.log('Country with such phone number did not found');
  }
};
