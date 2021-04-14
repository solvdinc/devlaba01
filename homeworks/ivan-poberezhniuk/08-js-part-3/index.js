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

// Task 4 https://github.com/qaprosoft/devlaba01/blob/master/lectures/08-js-part-3/task.md#4-random-dates

// Task 5 https://www.codewars.com/kata/merged-objects

// Task 6 https://www.codewars.com/kata/547f1a8d4a437abdf800055c
