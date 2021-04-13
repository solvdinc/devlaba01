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