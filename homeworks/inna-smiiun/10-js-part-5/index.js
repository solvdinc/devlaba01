// task 1 https://www.codewars.com/kata/55e7650c8d894146be000095/javascript
function validateMessage(msg) {
  if (msg === null) {
    throw new ReferenceError('Message is null!');
  }
  if (typeof msg !== 'string') {
    throw new TypeError(
      `Message should be of type string but was of type ${typeof msg}!`
    );
  }
  if (msg.length > 255 || msg.length === 0) {
    throw new RangeError(`Message contains ${msg.length} characters!`);
  }
  if (msg.match(/<.+>/)) {
    return false;
  }

  return true;
}

console.log(validateMessage(null));
console.log(validateMessage(''));
console.log(validateMessage(3));
console.log(validateMessage('<div>'));
console.log(validateMessage('head'));

//task 2 https://www.codewars.com/kata/5a353a478f27f244a1000076
async function sayJoke(apiUrl, jokeId) {
  const url = await fetch(apiUrl);
  const data = await url.json();

  if (!data.jokes) {
    throw new Error(`No jokes at url: ${apiUrl}`);
  }

  const joke = data.jokes.find((item) => item.id === jokeId);
  if (!joke) {
    throw new Error('No jokes found id: {jokeId}');
  }

  return {
    saySetup() {
      return joke.setup;
    },
    sayPunchLine() {
      return joke.punchLine;
    },
  };
}

//task 3
function timer() {
  let elapsedTime = 0;

  const timerId = setInterval(() => {
    elapsedTime += 1;
    console.log(`Elapsed time: ${elapsedTime} sec`);
  }, 1000);

  setTimeout(() => {
    clearInterval(timerId);
  }, 5000);
}

timer();

//task 6
function isNumber(str) {
  return str.match(/^\d/)
    ? 'The first character of a string is a number'
    : 'The first character of a string is not a number';
}

isNumber('sssf');
isNumber('34f');

//task 7
function phoneFormat(str) {
  if (str.match(/\d{3}/)[0] === '380') {
    return 'This is a Ukrainian phone number';
  } else if (str.match(/\d{3}/)[0] === '375') {
    return 'This is a Belarusian phone number';
  } else {
    return 'This is phone number';
  }
}

phoneFormat('+380');
phoneFormat('+375');
phoneFormat('375');
phoneFormat('388383');

//task 5
const url1 = 'https://randomuser.me/api/?gender=female&results=4';
const url2 = 'https://randomuser.me/api/?gender=male&results=4';

function addUsers(users) {
  const container = document.getElementById('users');

  users.forEach((user) => {
    const userContainer = document.createElement('div');
    const photo = document.createElement('img');
    const fullName = document.createElement('h2');
    const location = document.createElement('p');

    fullName.innerText = `${user.name.last} ${user.name.first}`;
    photo.src = user.picture.large;
    location.innerText = `${user.location.city}`;
    userContainer.className = 'card';
    photo.className = 'photo';

    userContainer.appendChild(photo);
    userContainer.appendChild(fullName);
    userContainer.appendChild(location);
    container.appendChild(userContainer);
  });
}

// Fetch request
async function getUsersFetch(cards) {
  let response = await fetch(url1);
  if (response.ok) {
    let users = await response.json();
    cards(users.results);
  }
}

// XMLHttpRequest
function getUsersXML(cards) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url2);
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      cards(JSON.parse(xhr.response).results);
    }
  };
}

getUsersFetch(addUsers);
getUsersXML(addUsers);
