// eslint-disable-next-line max-classes-per-file
class Serializable {
  serialize() {
    let newObject = {
      className: `${this.constructor.name}`,
    };
    newObject = { ...newObject, ...this };
    return JSON.stringify(newObject, (keys, value) => {
      Object.keys(value).forEach((key) => {
        if (value[key] === undefined) {
          throw new Error('Unexpected value');
        }
        if (Number.isNaN(value[key])) {
          value[key] = '0/0';
        }
        if (value[key] === Infinity) {
          value[key] = '1/0';
        }
        if (value[key] === -Infinity) {
          value[key] = '-1/0';
        }
      });
      return value;
    });
  }

  wakeFrom(serialized) {
    const parsed = JSON.parse(serialized, (key, value) => {
      if (Date.parse(value)) return new Date(value);
      if (value === '1/0') return Infinity;
      if (value === '-1/0') return -Infinity;
      if (value === '0/0') return NaN;

      return value;
    });
    if (parsed.className === this.constructor.name) {
      return new this.constructor(parsed);
    } throw new Error('Class name does not match');
  }
}

class UserDTO extends Serializable {
  constructor({
    firstName, lastName, phone, birth,
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

tolik.printInfo(); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

const serialized = tolik.serialize();
tolik = null;

const resurrectedTolik = (new UserDTO()).wakeFrom(serialized);
console.log(resurrectedTolik);
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
