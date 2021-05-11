class Serializer {
  canSerialize(value) {
    throw new Error('test');
  }
  serialize(key, value) {
    throw new Error('test');
  }
  canWakeFrom(obj) {
    throw new Error('test');
  }
  wakeFrom(obj) {
    throw new Error('test');
  }
}

class StringFieldSerializer extends Serializer {
  canSerialize(value) {
    return typeof value === 'string';
  }

  serialize(key, value) {
    return {
      type: 'string',
      key: key,
      value: value,
    };
  }

  canWakeFrom(obj) {
    return obj.type === 'string';
  }

  wakeFrom(obj) {
    return { [obj.key]: obj.value };
  }
}

class NumberFieldSerializer extends Serializer {
  canSerialize(value) {
    return typeof value === 'number' && isFinite(value);
  }

  serialize(key, value) {
    return {
      type: 'number',
      key: key,
      value: JSON.stringify(value),
    };
  }

  canWakeFrom(obj) {
    return obj.type === 'number';
  }

  wakeFrom(obj) {
    return { [obj.key]: JSON.parse(obj.value) };
  }
}

class DateFieldSerializer extends Serializer {
  canSerialize(value) {
    return typeof value === 'object' && value.constructor.name === 'Date';
  }

  serialize(key, value) {
    return {
      type: 'date',
      key: key,
      value: value.toISOString(),
    };
  }

  canWakeFrom(obj) {
    return obj.type === 'date';
  }

  wakeFrom(obj) {
    return { [obj.key]: new Date(obj.value) };
  }
}

class InfinityFieldSerializer extends Serializer {
  canSerialize(value) {
    return typeof value === 'number' && !isFinite(value) && !isNaN(value);
  }

  serialize(key, value) {
    return {
      type: 'infinity',
      key: key,
      value: value > 0 ? '+' : '-',
    };
  }

  canWakeFrom(obj) {
    return obj.type === 'infinity';
  }

  wakeFrom(obj) {
    return { [obj.key]: obj.value === '+' ? Infinity : -Infinity };
  }
}

class ObjectFieldSerializer extends Serializer {
  canSerialize(value) {
    return typeof value === 'object' && value.constructor.name === 'Object' && value !== null;
  }

  serialize(key, value) {
    return {
      type: 'object',
      key: key,
      value: JSON.stringify(value),
    };
  }

  canWakeFrom(obj) {
    return obj.type === 'object';
  }

  wakeFrom(obj) {
    return { [obj.key]: JSON.parse(obj.value) };
  }
}

class ArrayFieldSerializer extends Serializer {
  canSerialize(value) {
    return Array.isArray(value);
  }

  serialize(key, value) {
    return {
      type: 'array',
      key: key,
      value: JSON.stringify(value),
    };
  }

  canWakeFrom(obj) {
    return obj.type === 'array';
  }

  wakeFrom(obj) {
    return { [obj.key]: JSON.parse(obj.value) };
  }
}

class NaNFieldSerializer extends Serializer {
  canSerialize(value) {
    return isNaN(value);
  }

  serialize(key, value) {
    return {
      type: 'NaN',
      key: key,
      value: JSON.stringify('str / 1'),
    };
  }

  canWakeFrom(obj) {
    return obj.type === 'NaN';
  }

  wakeFrom(obj) {
    return { [obj.key]: +JSON.parse(obj.value) };
  }
}

class NullFieldSerialize extends Serializer {
  canSerialize(value) {
    return value === null;
  }

  serialize(key, value) {
    return {
      type: 'null',
      key: key,
      value: JSON.stringify(value),
    };
  }

  canWakeFrom(obj) {
    return obj.type === 'null';
  }

  wakeFrom(obj) {
    return { [obj.key]: +JSON.parse(obj.value) };
  }
}

class UndefinedFieldSerialize extends Serializer {
  canSerialize(value) {
    if (value === undefined) {
      throw new Error('Unexpected value');
    }
  }
}

class SymbolFieldSerialize extends Serializer {
  canSerialize(value) {
    if (typeof value === 'symbol' && value.constructor.name === 'Symbol') {
      throw new Error('Unexpected value');
    }
  }
}

class Serializable {
  static _serializersArr = [];

  static register(...serializers) {
    this._serializersArr.push(...serializers);
  }

  serialize() {
    return JSON.stringify({
      className: this.constructor.name,
      fields: Object.entries(this).map(([key, value]) => {
        const serialize = Serializable._serializersArr.find(({ canSerialize }) =>
          canSerialize(value),
        );
        return serialize.serialize(key, value);
      }),
    });
  }

  wakeFrom(serialized) {
    const obj = JSON.parse(serialized);
    if (obj.className === this.constructor.name) {
      return new this.constructor(
        obj.fields.reduce((acc, field) => {
          const serialize = Serializable._serializersArr.find(({ canWakeFrom }) =>
            canWakeFrom(field),
          );
          return {
            ...acc,
            ...serialize.wakeFrom(field),
          };
        }, {}),
      );
    } else {
      throw new Error(
        'Impossible to wake up from this value of serialized. Class name does not match',
      );
    }
  }
}

Serializable.register(
  new StringFieldSerializer(),
  new NumberFieldSerializer(),
  new DateFieldSerializer(),
  new InfinityFieldSerializer(),
  new ArrayFieldSerializer(),
  new ObjectFieldSerializer(),
  new NaNFieldSerializer(),
  new NullFieldSerialize(),
  new UndefinedFieldSerialize(),
  new SymbolFieldSerialize(),
);

class UserDTO extends Serializable {
  constructor({ firstName, lastName, phone, birth, infNumb, test, test2 } = {}) {
    super();

    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.birth = birth;
    this.infNumb = -infNumb;
    this.test = test;
    this.test2 = test2;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
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
  infNumb: -Infinity,
  test: [1, 2, 3],
  test2: NaN,
});

tolik.printInfo(); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

let serialized = tolik.serialize();
console.log(serialized);
tolik = null;

const resurrectedTolik = new UserDTO().wakeFrom(serialized);
console.log(resurrectedTolik);
console.log(resurrectedTolik instanceof UserDTO); // true
console.log(resurrectedTolik.printInfo());
