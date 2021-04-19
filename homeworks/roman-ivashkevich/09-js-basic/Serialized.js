/* eslint-disable max-classes-per-file */
class Serializable {
  serialize() {
    let obj = {
      className: `${this.constructor.name}`,
    };

    const improvedObject = Object.fromEntries(
      Object.entries(this).map(([key, keyValue]) => {
        let objValue = keyValue;

        if (objValue === undefined || typeof objValue === 'symbol') {
          throw new Error('Unexpected value');
        }

        if (typeof objValue === 'number') {
          objValue = {
            type: 'number',
            value: `${objValue}`,
          };
        } else if (typeof objValue === 'string') {
          objValue = {
            type: 'string',
            value: `${objValue}`,
          };
        }
        return [key, objValue];
      }),
    );

    obj = { ...obj, ...improvedObject };

    return JSON.stringify(obj);
  }

  wakeFrom(serialized) {
    try {
      const parsedObj = JSON.parse(serialized);
      const resObj = Object.fromEntries(
        Object.entries(parsedObj).map(([key, value]) => {
          let objValue = value;
          if (key === 'className' && value !== this.constructor.name) {
            throw new Error(
              'Impossible to wake up from this value of serialized. Class name does not match',
            );
          }

          if (objValue.type === 'number') {
            objValue = Number(objValue.value);
          } else if (objValue.type === 'string') {
            objValue = objValue.value;
          }

          const reISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;
          const temp = reISO.exec(objValue);
          if (temp) {
            objValue = new Date(temp[0]);
          }
          return [key, objValue];
        }),
      );

      return new this.constructor(resObj);
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

console.log(new Post().wakeFrom(serialized));

// for check
// let test = new Post({
//   content: 'test',
//   date: new Date(),
//   author: 'Roman Ivashkevich',
// });

// serialized = test.serialize(); // className Post
// test = null;
// let resurrectedTest = new Post().wakeFrom(serialized);
// console.log(resurrectedTest instanceof Post); // true

// class Test extends Serializable {
//   constructor({ content, date, author } = {}) {
//     super();

//     this.content = content;
//     this.date = date;
//     this.author = author;
//   }
// }

// let test = new Test({
//   content: Infinity,
//   date: NaN,
//   author: -Infinity,
// });

// serialized = test.serialize();
// test = null;
// const resurrectedTest = new Test().wakeFrom(serialized);
// console.log(resurrectedTest instanceof Test);
