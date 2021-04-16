/* eslint-disable max-classes-per-file */
const KEY = {
  DATE: '$date$_',
};

const replacer = (key, value) => {
  const isDate = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/.exec(
    value
  );

  if (isDate) return KEY.DATE + value;

  return value;
};

const reviver = (key, value) => {
  if (typeof value === 'string') {
    if (value.startsWith(KEY.DATE)) return new Date(value.slice(KEY.DATE.length));
  }

  return value;
};

class Serializable {
  serialize() {
    return JSON.stringify([this, this.constructor.name], replacer);
  }

  wakeFrom(str) {
    const [object, constructorName] = JSON.parse(str, reviver);
    const OriginalClass = eval(constructorName);

    if (this.constructor.name !== constructorName) {
      console.error('Serialized class name does not match');
    }

    return new OriginalClass(object);
  }
}

class UserDTO extends Serializable {
  constructor(user) {
    const { firstName, lastName, phone, birth } = { ...user };
    super();

    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.birth = birth;
  }

  printInfo() {
    return `${this.firstName[0]}. ${this.lastName} - ${this.phone}, ${this.birth.toISOString()}`;
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

const resurrectedTolik = new UserDTO().wakeFrom(serialized);
console.log('resurrectedTolik instanceof UserDTO: ', resurrectedTolik instanceof UserDTO); // true
console.log('resurrectedTolik info: ', resurrectedTolik.printInfo()); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

class Post extends Serializable {
  constructor(post) {
    const { content, date, author } = { ...post };
    super();

    this.content = content;
    this.date = date;
    this.author = author;
  }
}

console.log('Post: ', new Post().wakeFrom(serialized));
// throw an error because the srialized line does contain data for User class

class Types extends Serializable {
  constructor() {
    super();
    this.NotANumber = NaN;
    this.infinity = Infinity;
    this.null = null;
    this.Array = [1, 2, 3, 4, 5];
  }

  printTypes() {
    return `My types: ${this.NotANumber}, ${this.infinity}, ${this.Array}!`;
  }
}

let myTypes = new Types();

const serializedTypes = myTypes.serialize();
myTypes = null;
console.log('serializedTypes ', serializedTypes);
const resurrectedTypes = new Types().wakeFrom(serializedTypes);
console.log('resurrectedTypes ', resurrectedTypes);

console.log('resurrectedTypes instanceof UserDTO: ', resurrectedTypes instanceof Types); // true
console.log('resurrectedTypes info: ', resurrectedTypes.printTypes());
// My types: NaN, Infinity, 1,2,3,4,5!
