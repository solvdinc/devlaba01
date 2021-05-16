// optional
// task 8 https://www.codewars.com/kata/54834b3559e638b39d0009a2
function OnceNamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.fullName = `${this.firstName} ${this.lastName}`;
  Object.freeze(this);
}
console.log(OnceNamedOne());

// task 9 https://www.codewars.com/kata/partial-keys
function partialKeys(obj) {
  const result = {};

  Object.keys(obj).sort().reverse().forEach((key) => {
    const value = obj[key];
    for (let i = 0; i < key.length; i += 1) {
      if (value !== result[key]) {
        const resultKey = key.substring(0, i + 1);
        result[resultKey] = value;
      }
    }
  });

  return result;
}
console.log(partialKeys());

// task 10 https://www.codewars.com/kata/human-readable-time
function humanReadable(seconds) {
  let sec = 0;
  let minutes = 0;
  let hours = 0;

  for (let i = 0; i < seconds; i += 1) {
    if (sec === 59) {
      sec = 0;
      if (minutes === 59) {
        minutes = 0;
        hours += 1;
      } else {
        minutes += 1;
      }
    } else {
      sec += 1;
    }
  }

  if (sec.toString().length === 1) sec = `0${sec}`;
  if (minutes.toString().length === 1) minutes = `0${minutes}`;
  if (hours.toString().length === 1) hours = `0${hours}`;

  return `${hours}:${minutes}:${sec}`;
}
console.log(humanReadable());
