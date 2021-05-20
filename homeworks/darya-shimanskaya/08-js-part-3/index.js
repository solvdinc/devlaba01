const moment = require('moment');

// 1 task Create a function to access the properties of an object.
const user1 = {
  username: 'tester1',
  preferences: {
    sound: {
      maxValue: 50,
      value: 30,
    },
  },
};
const randomValue = Math.random();
const nullValue = null;

const pluck = (object, path) => {
  const pathArray = path.split('.');
  return pathArray.reduce((obj, key) => (obj && obj[key] !== 'undefined' ? obj[key] : null), object);
};

console.log(pluck(user1, 'preferences.sound.value')); // 30
console.log(pluck(user1, 'unknown.key')); // null
console.log(pluck(randomValue, 'unknown.key')); // null
console.log(pluck(nullValue, 'unknown.key')); // null

// task 2 Create custom deep clone function.
const clone = (obj) => {
  let value;
  const cloned = {};
  Object.keys(obj).forEach((key) => {
    value = obj[key];
    cloned[key] = (typeof value === 'object' && value !== null) ? clone(value) : value;
  });
  return cloned;
};

const user2 = {
  username: 'testuser1',
  preferences: {
    sound: {
      maxValue: 50,
      value: 30,
    },
  },
};
const clonedUser = clone(user2);

clonedUser.preferences.sound.maxValue = 70;

console.log(user2.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue); // false

// // task 3 Create a function that returns how long ago a certain day was.
function offset(date) {
  let result = '';
  const diffSec = moment(new Date()).diff(date) / 1000;
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffDay > 0) {
    result += diffDay > 1 ? ` ${diffDay % 365} days` : ' 1 day';
  }
  if (diffHour > 0) {
    result += diffHour > 1 ? ` ${diffHour % 24} hours` : '1 hour';
  }
  if (diffMin > 0) {
    result += (diffMin % 60) > 1 ? ` ${diffMin % 60} minutes` : ' 1 minute';
  }
  result += ' ago';
  return result;
}

console.log(offset(moment('23/02/2021 13:00:00', 'DD/MM/YYYY hh:mm:ss')));

console.log(offset(moment('23/02/2021 11:30:00', 'DD/MM/YYYY hh:mm:ss')));

console.log(offset(moment('22/02/2021 14:00:00', 'DD/MM/YYYY hh:mm:ss')));

console.log(offset(moment('17/05/2021 10:00:00', 'DD/MM/YYYY hh:mm:ss')));

// task 4 Create a function that generate a random date between to dates
function randomDate(date1, date2) {
  return (new Date(date1.getTime() + Math.random() * (date2.getTime() - date1.getTime())))
    .toUTCString();
}

const date1 = new Date(2021, 1, 23);
const date2 = new Date(2021, 2, 23);

console.log(randomDate(date1, date2));

// task 5 https://www.codewars.com/kata/596cf5b0e1665a2d02000007/train/javascript
function objConcat(array) {
  const result = Object.assign({}, ...array);
  return result;
}
objConcat();

// task 6 https://www.codewars.com/kata/547f1a8d4a437abdf800055c/train/javascript

function NamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;

  Reflect.defineProperty(this, 'fullName', {
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(name) {
      const fullNameArr = name.split(' ');
      [this.firstName, this.lastName] = fullNameArr;
    },
  });
}

NamedOne();
