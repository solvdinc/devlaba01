// eslint-disable-next-line no-undef
const { moment } = window;
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

function pluck(obj, propValue) {
  if (!(obj instanceof Object) || obj === null) return null;

  const keys = propValue.split('.');
  let temporaryKey = obj[keys[0]];

  if (temporaryKey === undefined) return null;

  for (let i = 1; i < keys.length; ++i) {
    temporaryKey = temporaryKey[keys[i]];
  }
  return temporaryKey;
}

console.log(pluck(user, 'preferences.sound.value')); // 30
console.log(pluck(user, 'unknown.key')); // null
console.log(pluck(randomValue, 'unknown.key')); // null
console.log(pluck(nullValue, 'unknown.key')); // null

// task 2 Deep Clone

function clone(obj) {
  return JSON.parse(JSON.stringify(obj)); // one-line solution, but object must be JSON-safe (no Date, undefined, Infinity) otherwise data will be lost
}

const clonedUser = clone(user);

clonedUser.preferences.sound.maxValue = 70;

console.log(
  user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue,
);

// task 3 "A long time ago"

function offset(date) {
  const pseudoCurrentDate = moment(
    '23/02/2021 14:00:00',
    'DD/MM/YYYY hh:mm:ss',
  );

  moment.updateLocale('en', {
    relativeTime: {
      past: '%s ago',
      s: 'a couple of seconds ago',
      ss: '%d seconds',
      m: 'a minute ago',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: '366 days',
      yy: '%d years',
    },
  });

  return date.from(pseudoCurrentDate);
}

console.log(offset(moment('23/02/2021 13:30:00', 'DD/MM/YYYY hh:mm:ss')));
console.log(offset(moment('23/02/2021 13:00:00', 'DD/MM/YYYY hh:mm:ss')));
console.log(offset(moment('23/02/2021 11:30:00', 'DD/MM/YYYY hh:mm:ss')));
console.log(offset(moment('22/02/2021 14:00:00', 'DD/MM/YYYY hh:mm:ss')));
console.log(offset(moment('23/02/2020 10:00:00', 'DD/MM/YYYY hh:mm:ss')));

// task 4 Random dates

const date1 = moment('23/01/2021', 'DD/MM/YYYY');
const date2 = moment('23/02/2021', 'DD/MM/YYYY');

function randomDate(dateOne, dateTwo) {
  const random = moment(
    dateOne.valueOf() + Math.random() * dateTwo.diff(dateOne),
  );
  return random.format('DD/MM/YY');
}

console.log(randomDate(date1, date2));

// task 6 "this" is an other problem https://www.codewars.com/kata/547f1a8d4a437abdf800055c

function NamedOne(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;

  Reflect.defineProperty(this, 'fullName', {
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(value) {
      const valueToArr = value.split(' ');
      const [firstName, lastName] = valueToArr;
      if (firstName && lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
      }
    },
  });
}

const namedOne = new NamedOne('Naomi', 'Wang');

namedOne.firstName = 'John';
namedOne.lastName = 'Doe';
console.log(namedOne.fullName); // -> "John Doe"

namedOne.fullName = 'Bill Smith';
console.log(namedOne.firstName); // -> "Bill"
console.log(namedOne.lastName); // -> "Smith"

namedOne.fullName = 'Sheesh';
console.log(namedOne.fullName); // "Bill Smith"
