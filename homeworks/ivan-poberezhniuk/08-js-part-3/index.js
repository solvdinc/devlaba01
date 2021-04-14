import moment from 'moment';

// Task 1 https://github.com/qaprosoft/devlaba01/blob/master/lectures/08-js-part-3/task.md#1-pluck
const user = {
  username: 'testuser1',
  preferences: {
    sound: {
      maxValue: 50,
      value: 30,
    },
  },
};
const randomValue = Math.random();
const nullValue = null;

const pluck = (deepObject, propsPath = null) => {
  const path = propsPath.split('.');
  let obj = { ...deepObject };

  try {
    for (let i = 0; i < path.length; i += 1) {
      obj = obj[path[i]];
      if (obj === undefined) {
        return null;
      }
    }
  } catch (e) {
    return null;
  }

  return obj;
};

console.log(pluck(user, 'preferences.sound.value')); // 30
console.log(pluck(user, 'unknown.key')); // null
console.log(pluck(randomValue, 'unknown.key')); // null
console.log(pluck(nullValue, 'unknown.key')); // null

// Task 2 https://github.com/qaprosoft/devlaba01/blob/master/lectures/08-js-part-3/task.md#2-deep-clone
const user2 = {
  username: 'testuser1',
  preferences: {
    sound: {
      maxValue: 50,
      value: 30,
    },
  },
};

// Slow, not correct, but oneline method
const clone1 = (obj) => JSON.parse(JSON.stringify(obj));

// Good way using recursion
const clone2 = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  const copy = {};
  const objKeys = Object.keys(obj);

  objKeys.forEach((key) => {
    const value = obj[key];
    copy[key] = clone2(value);
  });

  return copy;
};

const clonedUser1 = clone1(user2);
const clonedUser2 = clone2(user2);

clonedUser1.preferences.sound.maxValue = 70;
clonedUser2.preferences.sound.maxValue = 70;

console.log(user2.preferences.sound.maxValue === clonedUser1.preferences.sound.maxValue); // false
console.log(user2.preferences.sound.maxValue === clonedUser2.preferences.sound.maxValue); // false

// Task 3 https://github.com/qaprosoft/devlaba01/blob/master/lectures/08-js-part-3/task.md#3-a-long-time-ago
moment.updateLocale('en', {
  relativeTime: {
    h: '1 hour',
    d: '1 day',
  },
});

const offset = (inputTime) => {
  const currentTime = moment('23/02/2021 14:00:00', 'DD/MM/YYYY hh:mm:ss');
  const duration = moment.duration(inputTime.diff(currentTime));

  return duration.humanize(true, { m: 60, h: 24, d: 111111 });
};

// //E.g. Today is 23.02.2021, 14:00:00
console.log(offset(moment('23/02/2021 13:30:00', 'DD/MM/YYYY hh:mm:ss')));
// 30 minutes ago

console.log(offset(moment('23/02/2021 13:00:00', 'DD/MM/YYYY hh:mm:ss')));
// 1 hour ago

console.log(offset(moment('23/02/2021 11:30:00', 'DD/MM/YYYY hh:mm:ss')));
// 2 hours 30 minutes ago

console.log(offset(moment('22/02/2021 14:00:00', 'DD/MM/YYYY hh:mm:ss')));
// 1 day ago

console.log(offset(moment('23/02/2020 10:00:00', 'DD/MM/YYYY hh:mm:ss')));
// 366 days ago

// Task 4 https://github.com/qaprosoft/devlaba01/blob/master/lectures/08-js-part-3/task.md#4-random-dates
const date1 = moment('23/01/2021', 'DD/MM/YYYY');
const date2 = moment('23/02/2021', 'DD/MM/YYYY');

const randomDate = (from, to) => {
  return moment(from + Math.random() * (to - from));
};

console.log(randomDate(date1, date2).format('DD/MM/YY'));

// 20/02/2021

// Task 5 https://www.codewars.com/kata/merged-objects
const objConcat = (arr) => {
  let result = {};
  arr.forEach((obj) => {
    result = { ...result, ...obj };
  });

  return result;
};

// Task 6 https://www.codewars.com/kata/547f1a8d4a437abdf800055c
class NamedOne {
  // -- SHOULD be changed --
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    const [firstName, lastName] = value.split(' ');

    if (!firstName || !lastName) return;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// Task 7 https://www.codewars.com/kata/54834b3559e638b39d0009a2
function OnceNamedOne(first, last) {
  // -- SHOULD be changed --
  this.firstName = first;
  this.lastName = last;
  this.fullName = `${this.firstName} + ' ' + ${this.lastName}`;

  Object.freeze(this);
}

// Task 8 https://www.codewars.com/kata/partial-keys

// Ефыл 9 https://www.codewars.com/kata/human-readable-time
const humanReadable = (time) => {
  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  let humanized = '';

  seconds = (time % 60) / 1;
  minutes = Math.floor((time % 3600) / 60);
  hours = Math.floor(time / 3600);

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  humanized = `${hours}:${minutes}:${seconds}`;
  return humanized;
};
