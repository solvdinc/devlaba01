class Serializable {
  serialize() {
    try {
      const serialized = JSON.stringify(this, (key, value) => {
        Object.keys(value).forEach((el) => {
          if (value[el] instanceof Date) {
            value[el] = value[el].getTime();
          } else if (value[el] === Infinity) {
            value[el] = "Infinity";
          } else if (value[el] === -Infinity) {
            value[el] = "-Infinity";
          } else if (value[el] === null) {
            value[el] = "null";
          } else if (value[el] !== value[el]) {
            value[el] = "NaN";
          }
        });
        return value;
      });
      return serialized;
    } catch (error) {
      throw new Error("Not a JSON-serializing object");
    }
  }

  wakeFrom(obj) {
    const copyOfThis = new this.constructor();
    const serializeKeys = Object.keys(JSON.parse(obj));
    const objKeys = Object.keys(copyOfThis);

    if (JSON.stringify(serializeKeys) === JSON.stringify(objKeys)) {
      for (let i = 0; i < serializeKeys.length; i++) {
        copyOfThis[serializeKeys[i]] = JSON.parse(obj)[serializeKeys[i]];
        if ([serializeKeys[i]] === "Infinity") {
          return Infinity;
        } else if ([serializeKeys[i]] === "-Infinity") {
          return -Infinity;
        } else if ([serializeKeys[i]] === "NaN") {
          return NaN;
        } else if (serializeKeys[i] === "birth") {
          copyOfThis[serializeKeys[i]] = new Date(
            JSON.parse(obj)[serializeKeys[i]]
          );
        } else {
          copyOfThis[serializeKeys[i]] = JSON.parse(obj)[serializeKeys[i]];
        }
      }
      return copyOfThis;
    }
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
