class Serializable {
  _transform(value) {
    const valueType = typeof value;
    if (valueType === 'string') {
      return value;
    }
    if (valueType === 'number') {
      return this._transformNumber(value);
    }
    if (Array.isArray(value)) {
      return this._transformArray(value);
    }
    if (value instanceof Date) {
      return value.toString();
    }
    if (valueType === 'object') return this._transformObj(value);

    throw TypeError`Program doesn't work with ${valueType}`;
  }

  _transformNumber(value) {
    if (value === Infinity) {
      return 'Infinity';
    }
    if (value === -Infinity) {
      return '-Infinity';
    }
    if (Number.isNaN(value)) {
      return 'NaN';
    }
    return value;
  }

  _transformArray(array) {
    const result = [...array];
    for (let i = 0; i < array.length; i += 1) {
      result[i] = this._transform(result[i]);
    }
    return result;
  }

  _transformObj(obj) {
    const transformedObj = { ...obj };
    const entries = Object.entries(obj);
    entries.forEach(([key, value]) => {
      transformedObj[key] = this._transform(value);
    });
    return transformedObj;
  }

  serialize() {
    return JSON.stringify(this._transformObj(this));
  }

  wakeFrom(string) {
    if (typeof string !== 'string') {
      throw TypeError(`Incorrect type of value. Expected 'string' type, but get '${typeof string}'`);
    }
    const expectedKeys = Object.keys(this);
    let actualObj;
    try {
      actualObj = JSON.parse(string);
    } catch (e) {
      throw SyntaxError('Input string is incorrect. It isn\'t available to parse');
    }
    Object.keys(actualObj).forEach((key) => {
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
    e,
  } = {}) {
    super();
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.e = e;
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
}

const numbers = new Numbers({
  a: NaN,
  b: Infinity,
  c: -Infinity,
  d: 48,
  e: [1, 2, 3, 4, Infinity, -Infinity, 10],
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

const serialized = tolik.serialize();
console.log('serialied obj');
console.log(serialized);
tolik = null;

const wakedFromTolik = (new UserDTO()).wakeFrom(serialized);
console.log('waked from obj');
console.log(wakedFromTolik);

console.log(wakedFromTolik instanceof UserDTO); // true

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

const numbersTest = new Numbers({
  a: NaN,
  b: Infinity,
  c: -Infinity,
  d: 48,
  e: 10,
});

const serializedNumTest = numbersTest.serialize();
console.log(serializedNumTest);
console.log(new Numbers().wakeFrom(serializedNumTest));

const numbersTest1 = new Numbers({
  a: NaN, b: Infinity, c: -Infinity, d: 48, e: [4, NaN, Infinity],
  // class Number was extended with this field
});
console.log('>>>>>>> stat to test some cases');
console.log('original obj:', numbersTest1);
console.log('is \'e\' field an array?:', Array.isArray((numbersTest1.e)));
const serializedNumTest1 = numbersTest1.serialize();
console.log('serialized obj:', serializedNumTest1);
const restoredSerializedNumTest1 = new Numbers().wakeFrom(serializedNumTest1);
console.log('restored after serialization:', restoredSerializedNumTest1);
console.log('check if restored \'e\' field is an array:', Array.isArray(restoredSerializedNumTest1.e));
console.log('try to restore incorrect class:');
try {
  const restoredSerializedNumTest2 = new Numbers().wakeFrom(serialized);
} catch (e) {
  console.log(`Error: ${e}`);
}
try {
  new Numbers().wakeFrom(serialized);
} catch (e) {
  console.log(`Error: ${e}`);
}
