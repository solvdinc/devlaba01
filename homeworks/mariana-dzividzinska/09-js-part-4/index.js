class Serializable {
  _transformObj(obj) {
    const availableTypes = ['string', 'object', 'number', 'undefined'];
    const transformedObj = { ...obj };
    const entries = Object.entries(obj);
    entries.forEach(([key, value]) => {
      if (availableTypes.indexOf(typeof value) === -1) {
        throw TypeError`Program doesn't work with ${typeof value}`;
      }
      if (value === Infinity) {
        transformedObj[key] = 'Infinity';
      }
      if (value === -Infinity) {
        transformedObj[key] = '-Infinity';
      }
      if (Number.isNaN(value) && (typeof value) === 'number') {
        transformedObj[key] = 'NaN';
      }
      if ((typeof value === 'object') && !(value instanceof Date)) {
        transformedObj[key] = this._transformObj(obj[key]);
      }
    });
    return transformedObj;
  }

  serialize() {
    return JSON.stringify(this._transformObj(this));
  }

  wakeFrom(string) {
    const expectedKeys = Object.keys(this);
    Object.keys(JSON.parse(string)).forEach((key) => {
      if (expectedKeys.indexOf(key) === -1) {
        throw ReferenceError(`Can not find property ${key}`);
      }
    });

    const origin = JSON.parse(string, (key, value) => {
      if (typeof value !== 'number' && Date.parse(value) > 0) return new Date(value);
      if (value === 'Infinity') return Infinity;
      if (value === '-Infinity') return -Infinity;
      if (value === 'NaN') return NaN;
      if (value === 'object') return this.wakeFrom(value);

      return value;
    });

    return new this.constructor(origin);
  }
}

class Numbers extends Serializable {
  constructor({
    a,
    b,
    c,
    d,
  } = {}) {
    super();
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
  }
}

class Job extends Serializable {
  constructor({
    companyName,
    profession,
    adoptionDate,
    numbers,
  } = {}) {
    super();

    this.companyName = companyName;
    this.profession = profession;
    this.adoptionDate = adoptionDate;
    this.numbers = numbers;
  }
}

class UserDTO extends Serializable {
  constructor({
    firstName,
    lastName,
    phone,
    birth,
    job,
  } = {}) {
    super();

    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.birth = birth;
    this.job = job;
  }

  printInfo() {
    console.log(`${this.firstName[0]}. ${this.lastName} - ${this.phone}, ${this.birth.toISOString()}`);
  }
}

const numbers = new Numbers({
  a: NaN,
  b: Infinity,
  c: -Infinity,
  d: 48,
});

const tolikJob = new Job({
  companyName: 'Company',
  profession: 'programmer',
  adoptionDate: new Date('2020-01-10'),
  numbers,
});

let tolik = new UserDTO({
  firstName: 'Anatoliy',
  lastName: 'Nashovich',
  phone: '2020327',
  birth: new Date('1999-01-02'),
  job: tolikJob,
});

tolik.printInfo(); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

const serialized = tolik.serialize();
console.log('serialied obj');
console.log(serialized);
tolik = null;

const wakedFromTolik = (new UserDTO()).wakeFrom(serialized);
console.log('waked from obj');
console.log(wakedFromTolik);

console.log(wakedFromTolik instanceof UserDTO); // true
console.log(wakedFromTolik.printInfo());

class Post extends Serializable {
  constructor({
    content,
    date,
    author,
  } = {}) {
    super();

    this.content = content;
    this.date = date;
    this.author = author;
  }
}

try {
  console.log((new Post()).wakeFrom(serialized));
} catch (error) {
  console.log(`Error: ${error}`);
}

const numbersTest1 = new Numbers({
  a: NaN,
  b: Infinity,
  c: -Infinity,
  d: 48,
});

const serializedNumTest1 = numbersTest1.serialize();
console.log(serializedNumTest1);
console.log(new Numbers().wakeFrom(serializedNumTest1));
