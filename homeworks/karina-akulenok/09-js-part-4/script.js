/* eslint-disable max-classes-per-file */
/**
 * REMOVEME To mock the class you to provide us with
 * @typedef {{
 *   serialize(): string,
 *   wakeFrom(serialized: string): Serializable
 * }} Serializable
 */
class Serializable {
  serialize() {
    let obj = {
      className: `${this.constructor.name}`,
    };
    obj = { ...obj, ...this };
    const json = JSON.stringify(obj, (key, value) => {
      Object.keys(value).forEach((el) => {
        if (value[el] === undefined) {
          throw new Error('This object can\'t be serialized');
        }
        // if (value[el] instanceof Date) {
        //   value[el] = value[el].getTime();
        // }
        if (value[el] === Infinity) {
          value[el] = 'Infinity';
        }
        if (value[el] === -Infinity) {
          value[el] = '-Infinity';
        }
        if (value[el] === null) {
          value[el] = 'null';
        }
      });
      return value;
    });
    return json;
  }

  wakeFrom(serialized) {
    const parsedObj = JSON.parse(serialized, (key, value) => {
      const isDate = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/.exec(value);
      if (value === 'Infinity') return Infinity;
      if (value === '-Infinity') return -Infinity;
      if (value === 'null') return null;
      if (isDate) { value = new Date(isDate[0]); }
      return value;
    });
    if (this.constructor.name !== parsedObj.className) {
      throw new Error('Class name doesn\'t match');
    }
    return new this.constructor(parsedObj);
  }
}

class UserDTO extends Serializable {
  constructor({
    firstName,
    lastName,
    phone,
    birth,
  } = {}) {
    super();

    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.birth = birth;
  }

  printInfo() {
    console.log(`${this.firstName[0]}. ${this.lastName} - ${this.phone}, ${this.birth.toISOString()}`);
  }
}

let tolik = new UserDTO({
  firstName: 'Anatoliy',
  lastName: 'Nashovich',
  phone: '2020327',
  birth: new Date('1999-01-02'),
});

tolik.printInfo(); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

const serialized = tolik.serialize();
tolik = null;

const resurrectedTolik = (new UserDTO()).wakeFrom(serialized);

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

console.log((new Post()).wakeFrom(serialized));
// throw an error because the srialized line does contain data for User class
