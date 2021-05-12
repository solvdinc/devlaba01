const {
  moment,
} = window;

// task 1 Pluck
function pluck(obj, path) {
  const pathArr = path.split('.');
  let currValue = {
    ...obj,
  };

  for (let i = 0; i < pathArr.length; i += 1) {
    currValue = currValue[`${pathArr[i]}`];
    if (!currValue) return null;
  }

  return currValue;
}

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

console.log(pluck(user, 'preferences.sound.value')); // 30
console.log(pluck(user, 'unknown.key')); // null
console.log(pluck(randomValue, 'unknown.key')); // null
console.log(pluck(nullValue, 'unknown.key')); // null
console.log(pluck(false, 'flag.key')); // null
console.log(pluck(undefined, 'undefined.key')); // null

// task 2 Deep Clone
function clone(obj) {
  if (typeof obj !== 'object') {
    throw TypeError(`Expected 'object' type of input value, but instead got type '${typeof obj}'`);
  }
  if (obj === null) return null;

  const cloneObj = {
    ...obj,
  };

  Object.keys(cloneObj).forEach((key) => {
    cloneObj[key] = typeof obj[key] === 'object' ? clone(obj[key]) : obj[key];
  });

  if (Array.isArray(obj)) {
    if (obj.length) {
      cloneObj.length = obj.length;
      return Array.from(cloneObj);
    }
    return Array.from(obj);
  }
  return cloneObj;
}

const clonedUser = clone(user);
clonedUser.preferences.sound.maxValue = 70;
console.log(
  user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue,
); // false

try {
  const clonedNum = clone(123);
  console.log(clonedNum);
} catch (e) {
  console.error(e);
}
try {
  const clonedUndefined = clone(undefined);
  console.log(clonedUndefined);
} catch (e) {
  console.error(e);
}

// task 3 "A long time ago"
function offset(date) {
  const dateNow = moment(new Date());
  const diff = dateNow.diff(date);

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    if (days === 1) return '1 day ago';
    return `${days} days ago`;
  }

  let res = '';
  if (hours > 0) {
    if (hours === 1) res += '1 hour ';
    else res += `${hours} hours `;
  }
  if (Math.floor(minutes % 60)) {
    if (minutes % 60 === 1) res += '1 minute ';
    else res += `${minutes % 60} minutes `;
  }
  res += 'ago';
  return res;
}

console.log(offset(moment('15/04/2021 9:01:00', 'DD/MM/YYYY hh:mm:ss')));
console.log(offset(moment('15/04/2021 10:05:00', 'DD/MM/YYYY hh:mm:ss')));
console.log(offset(moment('15/04/2020 10:05:00', 'DD/MM/YYYY hh:mm:ss')));

// task 4 Random dates
function randomDate(date1, date2) {
  const randomMs = Math.floor(Math.random() * date2.diff(date1));
  return moment(date1).add(randomMs, 'ms');
}

const date1 = moment('23/01/2021', 'DD/MM/YYYY');
const date2 = moment('23/02/2021', 'DD/MM/YYYY');

console.log(randomDate(date1, date2).format('DD/MM/YY'));

// task 5 link https://www.codewars.com/kata/596cf5b0e1665a2d02000007/train/javascript
function objConcat(arr) {
  return arr.reduce((acc, value) => ({
    ...acc,
    ...value,
  }), {});
}

// task 6 link https://www.codewars.com/kata/547f1a8d4a437abdf800055c
function NamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;

  Object.defineProperty(this, 'fullName', {
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(value) {
      const arr = value.split(' ');
      if (arr.length !== 2) return;

      [this.firstName, this.lastName] = arr;
    },
  });
}