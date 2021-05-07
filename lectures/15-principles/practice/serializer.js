// Don't hate me ;) I didn't finish this code
// You can do it better! I know it!

class Serializer {
  canSerialize(value) {
    throw new Error('Not implemented');
  }

  canWakeFrom(obj) {
    throw new Error('Not implemented');
  }

  serialize(key, value) {
    throw new Error('Not implemented');
  }

  wakeFrom(obj) {
    throw new Error('Not implemented');
  }
}

class NullSerializer extends Serializer {
  canSerialize(value) {
    return value === null;
  }

  canWakeFrom(obj) {
    return obj?.type === 'null';
  }

  serialize(key) {
    return {
      type: 'null',
      key,
    };
  }

  wakeFrom(obj) {
    return { [obj.key]: null };
  }
}

class ArraySerializer extends Serializer {
  canSerialize(value) {
    return Array.isArray(value);
  }

  canWakeFrom(obj) {
    return obj?.type === 'array';
  }

  serialize(key, value) {
    return {
      type: 'array',
      key,
      value: JSON.stringify(value),
    };
  }

  wakeFrom(obj) {
    return { [obj.key]: JSON.parse(obj.value) };
  }
}

class StringSerializer extends Serializer {
  canSerialize(value) {
    return typeof value === 'string';
  }

  canWakeFrom(obj) {
    return obj?.type === 'string';
  }

  serialize(key, value) {
    return {
      type: 'string',
      key,
      value,
    };
  }

  wakeFrom(obj) {
    return { [obj.key]: obj.value };
  }
}

class DateSerializer extends Serializer {
  canSerialize(value) {
    return typeof value === 'object' && value.constructor.name === 'Date';
  }

  canWakeFrom(obj) {
    return obj?.type === 'date';
  }

  serialize(key, value) {
    return {
      type: 'date',
      key,
      value: value.getTime(),
    };
  }

  wakeFrom(obj) {
    return { [obj.key]: new Date(obj.value) };
  }
}

class NumberSerializer extends Serializer {
  canSerialize(value) {
    return typeof value === 'number' && Number.isFinite(value);
  }

  canWakeFrom(obj) {
    return obj?.type === 'number';
  }

  serialize(key, value) {
    return {
      type: 'number',
      key,
      value: JSON.stringify(value),
    };
  }

  wakeFrom(obj) {
    return { [obj.key]: JSON.parse(obj.value) };
  }
}

class NanSerializer extends Serializer {
  canSerialize(value) {
    return Number.isNaN(value);
  }

  canWakeFrom(obj) {
    return obj?.type === 'NaN';
  }

  serialize(key) {
    return {
      type: 'NaN',
      key,
    };
  }

  wakeFrom(obj) {
    return { [obj.key]: NaN };
  }
}

class InfiniteSerializer extends Serializer {
  canSerialize(value) {
    return typeof value === 'number' && !Number.isFinite(value) && !Number.isNaN(value);
  }

  canWakeFrom(obj) {
    return obj?.type === 'infinity';
  }

  serialize(key, value) {
    return {
      type: 'infinity',
      key,
      value: value > 0 ? '+' : '-',
    };
  }

  wakeFrom(obj) {
    return { [obj.key]: obj.value === '+' ? Infinity : -Infinity };
  }
}

class ObjectSerializer extends Serializer {
  canSerialize(value) {
    return typeof value === 'object' && value !== null && value.constructor.name === 'Object';
  }

  canWakeFrom(obj) {
    return obj?.type === 'object';
  }

  serialize(key, value) {
    return {
      type: 'object',
      key,
      value: JSON.stringify(value),
    };
  }

  wakeFrom(obj) {
    return { [obj.key]: JSON.parse(obj.value) };
  }
}

class Serializable {
  static _serializers = [];

  static register(...serializer) {
    Serializable._serializers.push(...serializer);
  }

  serialize() {
    return JSON.stringify({
      name: this.constructor.name,
      fields: Object.entries(this).map(([key, value]) => {
        const serializer = Serializable._serializers.find(({ canSerialize }) => canSerialize(value));

        return serializer?.serialize(key, value);
      }),
    });
  }

  wakeFrom(json) {
    const obj = JSON.parse(json);

    if (obj.name === this.constructor.name) {
      return new this.constructor(
        obj.fields.reduce((acc, field) => {
          const serializer = Serializable._serializers.find(({ canWakeFrom }) => canWakeFrom(field));

          return {
            ...acc,
            ...serializer.wakeFrom(field),
          };
        }, {}),
      );
    }
  }
}

Serializable.register(
  new NullSerializer(),
  new ObjectSerializer(),
  new ArraySerializer(),
  new NumberSerializer(),
  new NanSerializer(),
);

Serializable.register(
  new InfiniteSerializer(),
  new StringSerializer(),
  new DateSerializer(),
);

class PenSerializer extends Serializer {

}

class Pen {}

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
    console.log(`${this.firstName[0]}. ${this.lastName} - ${this.phone}, ${this.birth.toISOString()}`);
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

console.log(tolik.serialize());
console.log(new UserDTO().wakeFrom(tolik.serialize()));
