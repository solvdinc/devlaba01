class Serializable {
  serialize() {
    try {
      const serialized = JSON.stringify(
        this,
        this.constructor.name,
        (key, value) => {
          Object.keys(value).forEach((el) => {
            if (value[el] === Infinity) {
              return Infinity;
            } else if (value[el] === -Infinity) {
              return -Infinity;
            } else if (value[el] === null) {
              return null;
            }
          });
          return value;
        }
      );
      return serialized;
    } catch (error) {
      throw new Error("Not a JSON-serializing object");
    }
  }

  wakeFrom(obj) {
    const serializeKeys = JSON.parse(obj, (key, value) => {
      const isDate = /^\d{4}(-\d\d(-\d\d(T\d\d:\d\d(:\d\d)?(\.\d+)?(([+-]\d\d:\d\d)|Z)?)?)?)?$/i.exec(
        value
      );
      if (value === Infinity) {
        return Infinity;
      } else if (value === -Infinity) {
        return -Infinity;
      } else if (value === null) {
        return null;
      } else if (isDate) {
        return new Date(isDate[0]);
      }
      return value;
    });
    return new this.constructor(serializeKeys);
  }
}
class UserDTO extends Serializable {
  constructor({ first1Name, lastName, phone, birth } = {}) {
    super();

    this.first1Name = first1Name;
    this.lastName = lastName;
    this.phone = phone;
    this.birth = birth;
  }

  printInfo() {
    console.log(
      `${this.first1Name[0]}. ${this.lastName} - ${
        this.phone
      }, ${this.birth.toISOString()}`
    );
  }
}

let tolik = new UserDTO({
  first1Name: "Anatoliy",
  lastName: "Nashovich",
  phone: "2020327",
  birth: new Date("1999-01-02"),
});

tolik.printInfo(); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

const serialized = tolik.serialize();
tolik = null;

const resurrectedTolik = new UserDTO().wakeFrom(serialized);

console.log(resurrectedTolik instanceof UserDTO); // true
console.log(resurrectedTolik.printInfo()); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z
