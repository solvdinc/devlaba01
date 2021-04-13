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

// task 1
function pluck(obj, prop) {
  if (!(obj instanceof Object) || obj === null) {
    return null;
  }

  const propArr = [...prop.split('.')];
  const key = propArr[0];
  propArr.shift();

  if (propArr.length) {
    if (!obj[key]) {
      return null;
    }
    return pluck(obj[key], propArr.join('.'));
  }

  return obj[key];
};
console.log(pluck(user, 'preferences.sound.value'));
console.log(pluck(user, 'unknown.key'));
console.log(pluck(randomValue, 'unknown.key'));
console.log(pluck(nullValue, 'unknown.key'));

// task 2
function clone(obj) {
  const cloneObj = {};

  // eslint-disable-next-line no-restricted-syntax
  for (let [key, value] of Object.entries(obj)) {
    if (value instanceof Object && value !== null) {
      cloneObj[key] = clone(obj[key]);
    } else {
      cloneObj[key] = value;
    }
  }

  return cloneObj;
};
const clonedUser = clone(user);
clonedUser.preferences.sound.maxValue = 70;
console.log(
  user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue,
);
