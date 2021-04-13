/* eslint-disable no-unused-vars */

// 2. Deep Clone
// Create custom deep clone function.
const user2 = {
  username: 'testuser1',
  preferences: {
    sound: {
      maxValue: 50,
      value: 30,
    },
  },
};

const clone = (obj) => JSON.parse(JSON.stringify(obj));
const clonedUser = clone(user2);
clonedUser.preferences.sound.maxValue = 70;

console.log(
  user2.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue
); // false

// 5 https://www.codewars.com/kata/merged-objects
function objConcat(arr) {
  const result = {};
  Object.assign(result, ...arr);
  return result;
}

// 6 https://www.codewars.com/kata/547f1a8d4a437abdf800055c
function NamedOne(first, last) {
  return {
    firstName: first,
    lastName: last,
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    set fullName(newName) {
      const [firstName, lastName] = newName.split` `;
      if (lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
      }
    },
  };
}

// optional:
// 9 https://www.codewars.com/kata/partial-keys
const partialKeys = (obj) => {
  const keys = Object.keys(obj);
  return new Proxy(obj, {
    get: (objct, partialKey) => {
      const key = keys.filter((k) => k.indexOf(partialKey) === 0).sort();
      return key[0] ? objct[key[0]] : undefined;
    },
  });
};
