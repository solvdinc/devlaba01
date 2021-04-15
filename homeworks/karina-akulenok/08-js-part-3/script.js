// task 1 Pluck
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

function pluck(obj, path) {
  if (typeof obj !== 'object' || obj === null) return null;

  let newObj = { ...obj };
  const pathArray = path.split('.');

  for (let i = 0; i < pathArray.length; i += 1) {
    newObj = newObj[pathArray[i]];
    if (!newObj) return null;
  }

  return newObj;
}

console.log(pluck(user, 'preferences.sound.value')); // 30
console.log(pluck(user, 'unknown.key')); // null
console.log(pluck(randomValue, 'unknown.key')); // null
console.log(pluck(nullValue, 'unknown.key')); // null

// task 2 Deep Clone
function clone(obj) {
  const clonedObj = {};

  Object.keys(obj).forEach((key) => {
    if (obj[key] !== null && (typeof (obj[key]) === 'object')) {
      clonedObj[key] = clone(obj[key]);
    }
  });
  return clonedObj;
}

const clonedUser = clone(user);

clonedUser.preferences.sound.maxValue = 70;

console.log(
  user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue,
); // false

// task 3 "A long time ago"
function offset(date) {
  const seconds = Math.floor(new Date((Date.now() - date)));
  let interval = Math.floor(seconds / (1000 * 60 * 60 * 24 * 30 * 12));

  if (interval > 1) return (`${interval} years ago`);

  interval = Math.floor((seconds / (1000 * 60 * 60 * 24 * 30)) % 12);

  if (interval > 1) return `${interval} months ago`;

  interval = Math.floor((seconds / (1000 * 60 * 60 * 24)) % 30);

  if (interval > 1) return `${interval} days ago`;

  interval = Math.floor((seconds / (1000 * 60 * 60)) % 24);

  if (interval > 1) return `${interval} hours ago`;

  interval = Math.floor((seconds / (1000 * 60)) % 60);

  if (interval > 1) return `${interval} minutes ago`;

  interval = Math.floor((seconds / 1000) % 60);

  return `${interval} seconds ago`;
}

console.log(offset(new Date('02/23/2021')));

console.log(offset(new Date('01/23/2021')));

console.log(offset(new Date('04/15/2021 11:30:00')));

console.log(offset(new Date('04/15/2021 23:49:00')));

console.log(offset(new Date('04/15/2021 23:51:00')));

// task 4 Random dates
function randomDate(date1, date2) {
  const firstDate = date1.getTime();
  const secondDate = date2.getTime();
  const random = new Date(Math.random() * (firstDate - secondDate) + secondDate);
  return random.toLocaleDateString('en-US');
}

const date1 = new Date('01/23/2021');
const date2 = new Date('02/23/2021');

console.log(randomDate(date1, date2));// 20/02/2021

// task 5 https://www.codewars.com/kata/merged-objects
function objConcat(arr) {
  return Object.assign({}, ...arr);
}
console.log(objConcat());

// task 6 https://www.codewars.com/kata/547f1a8d4a437abdf800055c
class NamedOne {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const correctName = name.split(' ');
    if (correctName.length === 2) {
      [this.firstName, this.lastName] = correctName;
    }
  }
}
console.log(NamedOne());
