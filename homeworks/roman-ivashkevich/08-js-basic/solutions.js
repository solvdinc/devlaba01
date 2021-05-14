// task 1
function solution1() {
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

  const pluck = (obj, path) => {
    if (typeof obj !== 'object' || obj === null) return null;

    const paths = path.split('.');
    let result = obj;

    for (let i = 0; i < paths.length; i += 1) {
      result = result[paths[i]];
      if (!result) return null;
    }

    return result;
  };

  console.log(pluck(user, 'preferences.sound.value')); // 30
  console.log(pluck(user, 'unknown.key')); // null
  console.log(pluck(randomValue, 'unknown.key')); // null
  console.log(pluck(nullValue, 'unknown.key'));
}

// task 2
function solution2() {
  const clone = (obj) => {
    const clonedObj = {};
    let value;

    if (Array.isArray(obj)) return obj;

    if (typeof obj !== 'object' || obj === null) return obj;

    Object.keys(obj).forEach((key) => {
      value = obj[key];
      clonedObj[key] = clone(value);
    });

    return clonedObj;
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

  console.log(user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue); // false
}

// task 3
function solution3() {
  const dateDiff = (date) => {
    let diffInSeconds = Math.floor(Math.abs(new Date() - date) / 1000);

    const sec = diffInSeconds % 60;
    diffInSeconds = (diffInSeconds - sec) / 60;
    const min = diffInSeconds % 60;
    diffInSeconds = (diffInSeconds - min) / 60;
    const hour = diffInSeconds % 24;
    diffInSeconds = (diffInSeconds - hour) / 24;
    let day = diffInSeconds % 365;
    if (diffInSeconds >= 365) {
      day += diffInSeconds;
    }

    const diffArr = [];
    if (!day) {
      if (sec) {
        diffArr.push(`${sec} second${sec > 1 ? 's' : ''}`);
      }
      if (min) {
        diffArr.push(`${min} minute${min > 1 ? 's' : ''}`);
      }
      if (hour) {
        diffArr.push(`${hour} hour${hour > 1 ? 's' : ''}`);
      }
    } else {
      diffArr.push(`${day} day${day > 1 ? 's' : ''}`);
    }

    return `${diffArr.reverse().join(' ')} ago`;
  };

  console.log(dateDiff(new Date(2021, 3, 14, 13, 30, 30)));
  console.log(dateDiff(new Date(2021, 1, 23, 13, 0, 30)));
  console.log(dateDiff(new Date(2021, 1, 23, 11, 30, 30)));
  console.log(dateDiff(new Date(2021, 1, 22, 14, 0, 30)));
  console.log(dateDiff(new Date(2020, 1, 23, 10, 30, 30)));
}

// task 4
function solution4() {
  const randomDate = (date1, date2) => {
    const timestamp1 = date1.getTime();
    const timestamp2 = date2.getTime();
    return new Date(timestamp1 + Math.random() * (timestamp2 - timestamp1));
  };

  console.log(randomDate(new Date(2021, 1, 23), new Date(2021, 2, 23)));
}

// task 5 https://www.codewars.com/kata/merged-objects
function solution5() {
  const a = {
    1: '1',
    2: '2',
    3: '3',
  };
  const b = {
    3: '4',
    5: '6',
    6: '7',
    7: '8',
  };
  const c = {
    5: '9',
    8: '9',
    6: '12',
    23: '35',
  };
  const arrayOfObjects = [a, b, c];

  function objConcat(array) {
    const obj = {};
    array.forEach((el) =>
      Object.entries(el).reduce((acc, [key, value]) => {
        obj[key] = value;
        return acc;
      }, {}),
    );

    return obj;
  }

  console.log(objConcat(arrayOfObjects));
}

// task 6 https://www.codewars.com/kata/547f1a8d4a437abdf800055c
function solution6() {
  function NamedOne(first, last) {
    this.firstName = first;
    this.lastName = last;
    Object.defineProperty(this, 'fullName', {
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(value) {
        if (value.includes('_') || value === '' || value.split(' ').length < 2) return;
        const arr = value.split(' ');
        [this.firstName, this.lastName] = arr;
      },
    });
  }

  const n = new NamedOne('John', 'Doe');
  n.firstName = 'Bill';
  n.lastName = 'Board';
  n.fullName = 'Giovanni Fabbri';
}

// task 8 https://www.codewars.com/kata/54834b3559e638b39d0009a2
function solution8() {
  function OnceNamedOne(first, last) {
    Object.defineProperty(this, 'firstName', {
      value: first,
      writable: false,
    });
    Object.defineProperty(this, 'lastName', {
      value: last,
      writable: false,
    });
    Object.defineProperty(this, 'fullName', {
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(value) {
        if (value.split(' ').length < 2) return;
        const arr = value.split(' ');
        [this.firstName, this.lastName] = arr;
      },
    });
  }

  // !Another solution
  // function OnceNamedOne(first, last) {
  //   this.firstName = first;
  //   this.lastName = last;
  //   this.fullName = `${this.firstName} ${this.lastName}`;
  //   Object.freeze(this);
  // }

  const onceNamed = new OnceNamedOne('Naomi', 'Wang');
  onceNamed.firstName = 'Bill';
  onceNamed.lastName = 'Cipher';
  onceNamed.fullName = 'Bill Cipher';
}

// task 9 https://www.codewars.com/kata/partial-keys
function solution9() {
  const handler = {
    get(obj, partialKey) {
      const resKey = Object.keys(obj)
        .sort()
        .find((key) => key.startsWith(partialKey));
      if (resKey) {
        return obj[resKey];
      }
    },
  };

  const partialKeys = (obj) => new Proxy(obj, handler);

  const d = {
    aaa: 1,
    abc: 2,
    dfg: 3,
    def: 4,
    dfgh: 5,
    undefined: 6,
  };

  const pd = partialKeys(d);

  console.log(pd.ef);
}
