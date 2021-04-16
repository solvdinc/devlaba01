class Serializable {
  serialize() {
    const serialized = JSON.stringify(this, (keys, value) => {
      Object.keys(value).forEach((key) => {
        if (value[key] instanceof Date) {
          value[key] = { isDate: true, dateValue: value[key].getTime() };
        }
      });
      return value;
    });

    return serialized;
  }

  wakeFrom(obj) {
    const serializeKeys = Object.keys(JSON.parse(obj)).join(' ');
    const objKeys = Object.keys(new this.constructor()).join(' ');

    if (serializeKeys === objKeys) {
      const serializedObj = new this.constructor(JSON.parse(obj));
      Object.keys(serializedObj).forEach((key) => {
        if (serializedObj[key].isDate) {
          serializedObj[key] = new Date(serializedObj[key].dateValue);
        }
      });

      return serializedObj;
    }

    throw new Error('serialized line does not contain data for class');
  }
}

class User extends Serializable {
  constructor({ firstName, lastName, phone, history, birth } = {}) {
    super();

    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.history = history;
    this.birth = birth;
  }

  printInfo() {
    console.log(`${this.firstName[0]}. ${this.lastName} - ${this.phone}`);
  }
}

const user = new User({
  firstName: 'Anatoliy',
  lastName: 'Nashovich',
  phone: '2020327',
  history: {
    city: 'Kyiv',
  },
  birth: new Date('1999-01-02'),
});
console.log(user);
user.printInfo();

const serialized = user.serialize();
const resurrectedUser = (new User()).wakeFrom(serialized);
console.log(resurrectedUser);
console.log(resurrectedUser instanceof User);

class Post extends Serializable {
  constructor({ content, date, author } = {}) {
    super();

    this.content = content;
    this.date = date;
    this.author = author;
  }
}
console.log((new Post()).wakeFrom(serialized));