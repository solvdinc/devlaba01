/* eslint-disable max-classes-per-file */
class Serializable {
  serialize() {
    let obj = {
      className: `${this.constructor.name}`,
    };

    const improvedObject = Object.fromEntries(
      Object.entries(this).map(([key, keyValue]) => {
        let objValue = keyValue;

        objValue = new Serializer(objValue).handleParser();

        return [key, objValue];
      }),
    );
    console.log(improvedObject);
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

          objValue = new Serializer(objValue).handleParser();

          return [key, objValue.value];
        }),
      );

      return new this.constructor(resObj);
    } catch (err) {
      console.log(err);
    }
  }
}

class Serializer extends Serializable {
  constructor(objValue) {
    super();
    this.obj =
      typeof objValue === 'object' && !(objValue instanceof Date)
        ? objValue
        : { type: typeof objValue, value: objValue };
  }

  handleParser() {
    let res;
    if (this.obj.type === 'string') {
      res = new StringFieldSerializer(this.obj).handleString();
    }

    if (this.obj.type === 'number') {
      res = new NumberFieldSerializer(this.obj).handleNumber();
    }

    if (this.obj.type === 'object' || this.obj.type === 'date') {
      res = new ObjectFieldSerializer(this.obj).handleObject();
    }

    if (!res) {
      throw new Error('Unexpected value');
    }

    return res;
  }
}

class StringFieldSerializer extends Serializer {
  constructor(objValue) {
    super();
    this.objValue = objValue;
  }

  handleString() {
    return {
      type: 'string',
      value: this.objValue.value,
    };
  }
}

class NumberFieldSerializer extends Serializer {
  constructor(objValue) {
    super();
    this.objValue = objValue;
  }

  handleNumber() {
    this.objValue.value =
      typeof this.objValue.value === 'number' ? `${this.objValue.value}` : +this.objValue.value;

    return {
      type: 'number',
      value: this.objValue.value,
    };
  }
}

class ObjectFieldSerializer extends Serializer {
  constructor(objValue) {
    super();
    this.objValue = objValue;
  }

  handleObject() {
    let { type } = this.objValue;
    if (this.objValue.value instanceof Date) {
      type = 'date';
      this.objValue.value = this.objValue.value.toISOString();
    }

    if (typeof this.objValue.type === 'object') {
      type = 'object';
    }

    if (this.objValue.type === 'date') {
      this.objValue.value = new Date(this.objValue.value);
    }

    return {
      type: type,
      value: this.objValue.value,
    };
  }
}

class UserDTO extends Serializable {
  constructor({ firstName, lastName, phone, birth, infNumb } = {}) {
    super();

    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.birth = birth;
    this.infNumb = infNumb;
  }

  printInfo() {
    console.log(
      `${this.firstName[0]}. ${this.lastName} - ${this.phone}, ${this.birth.toISOString()}, ${
        this.infNumb
      }`,
    );
  }
}

let tolik = new UserDTO({
  firstName: 'Anatoliy',
  lastName: 'Nashovich',
  phone: 2020327,
  birth: new Date('1999-01-02'),
  infNumb: Infinity,
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
