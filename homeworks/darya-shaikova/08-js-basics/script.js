// task 1 Create a function to access the properties of an object.

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

const pluck = (object, path) => {

  if (typeof object !== 'object' || object === null) return null;
  let result = object;

  const pathArray = path.split('.');
  for (let i = 0; i < pathArray.length; i += 1) {
    result = result[pathArray[i]];
    if (!result) return null;
  }

  return result;
};

console.log(pluck(user, 'preferences.sound.value')); // 30
console.log(pluck(user, 'unknown.key')); // null
console.log(pluck(randomValue, 'unknown.key')); // null
console.log(pluck(nullValue, 'unknown.key')); // null

// task 2 Create custom deep clone function

const clone = (object) => {
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  const clonedObject = {};
  const objectKeys = Object.keys(object);

  objectKeys.forEach((key) => {
    const value = object[key];
    clonedObject[key] = clone(value);
  });

  return clonedObject;
};

const user = {
  username: 'testuser1',
  preferences: {
    sound: {
      maxValue: 50,
      value: 30,
    },
  },
};
const clonedUser = clone(user);

clonedUser.preferences.sound.maxValue = 70;

console.log(
  user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue,
); // false

// task 3 Create a function that returns how long ago a certain day was.

function timeSince(date) {

  let seconds = Math.floor(new Date((Date.now() - date)) / 1000);

  let period = seconds / 31536000;

  if (period > 1) {
    return Math.floor(period) + " years ago";
  }
  period = seconds / 2592000;
  if (period > 1) {
    return Math.floor(period) + " months ago";
  }
  period = seconds / 86400;
  if (period > 1) {
    return Math.floor(period) + " days ago";
  }
  period = seconds / 3600;
  if (period > 1) {
    return Math.floor(period) + " hours ago";
  }
  period = seconds / 60;
  if (period > 1) {
    return Math.floor(period) + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}

console.log(timeSince(new Date(23 / 02 / 2020)))

// task 4 Create a function that generate a random date between to dates

const date1 = moment('23/01/2021', 'DD/MM/YYYY');
const date2 = moment('23/02/2021', 'DD/MM/YYYY');

const randomDate = (date1, date2) => {
  return new Date(Math.random() * (date2.getTime() - date1.getTime()) + date1.getTime());
};

console.log(randomDate(date1, date2).format('DD/MM/YY'));
// 20/02/2021

// task 5 https://www.codewars.com/kata/merged-objects

function objConcat(array) {
  let newObject = {}
  array.forEach(object => {
    for (key in object) {
      newObject[key] = object[key]
    }
  })
  return newObject
}

// task 6 https://www.codewars.com/kata/547f1a8d4a437abdf800055c

function NamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;

  Object.defineProperty(this, "fullName", {
    get: function () {
      return this.firstName + ' ' + this.lastName;
    },
    set: function (value) {
      let fullNameArray = value.split(' ');
      if (fullNameArray.length === 2) {
        this.firstName = fullNameArray[0];
        this.lastName = fullNameArray[1];
      }
    }
  });
}
