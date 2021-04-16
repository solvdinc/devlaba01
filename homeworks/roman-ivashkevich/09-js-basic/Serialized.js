/* eslint-disable max-classes-per-file */
class Serializable {
  serialize() {
    let obj = {
      className: `${this.constructor.name}`,
    };

    obj = { ...obj, ...this };

    return JSON.stringify(obj);
  }

  wakeFrom(serialized) {
    try {
      const parsedObj = JSON.parse(serialized);
      const resultObj = Object.fromEntries(
        Object.entries(parsedObj).map(([key, value]) => {
          let objValue = value;

          if (key === 'className') {
            if (value !== this.constructor.name) {
              throw new Error(
                'Impossible to wake up from this value of serialized. Class name does not match',
              );
            }
          }

          const reISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;
          const temp = reISO.exec(value);

          if (temp) {
            objValue = new Date(temp[0]);
          }

          return [key, objValue];
        }),
      );

      return new this.constructor(resultObj);
    } catch (err) {
      console.log(err);
    }
  }
}

class UserDTO extends Serializable {
  constructor({ firstName, lastName, phone, birth } = {}) {
    super();

    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.birth = birth;
  }

  printInfo() {
    console.log(
      `${this.firstName[0]}. ${this.lastName} - ${this.phone}, ${this.birth.toISOString()}`,
    );
  }
}

let tolik = new UserDTO({
  firstName: 'Anatoliy',
  lastName: 'Nashovich',
  phone: '2020327',
  birth: new Date('1999-01-02'),
});

tolik.printInfo(); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

let serialized = tolik.serialize();
tolik = null;

const resurrectedTolik = new UserDTO().wakeFrom(serialized);

console.log(resurrectedTolik instanceof UserDTO); // true
console.log(resurrectedTolik.printInfo()); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

class Post extends Serializable {
  constructor({ content, date, author } = {}) {
    super();

    this.content = content;
    this.date = date;
    this.author = author;
  }
}

console.log(new Post().wakeFrom(serialized)); // Error: Impossible to wake up from this value of serialized. Class name does not match.

// for check
// const test = new Post({
//   content: 'test',
//   date: new Date(),
//   author: 'Roman Ivashkevich',
// });

// serialized = test.serialize(); // className Post
// test = null;
// const resurrectedTest = new Post().wakeFrom(serialized);
// console.log(resurrectedTolik instanceof UserDTO); // true
