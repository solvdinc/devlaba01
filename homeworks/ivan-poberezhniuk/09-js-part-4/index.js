/**
 * REMOVEME To mock the class you to provide us with
 * @typedef {{
 *   serialize(): string,
 *   wakeFrom(serialized: string): Serializable
 * }} Serializable
 */
class Serializable {
  serialize() {
    return JSON.stringify(this);
  }

  wakeFrom(str) {
    console.log(str);
    return JSON.parse(str);
  }
}

class UserDTO extends Serializable {
  constructor({ firstName, lastName, phone, birth }) {
    super();

    console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = NaN;
    this.birth = birth;
  }

  printInfo() {
    console.log(
      `${this.firstName[0]}. ${this.lastName} - ${this.phone}, ${this.birth.toISOString()}`
    );
  }
}

let tolik = new UserDTO({
  firstName: 'Anatoliy',
  lastName: 'Nashovich',
  phone: '2020327',
  birth: new Date('1999-01-02'),
});

tolik.printInfo(); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

const serialized = tolik.serialize();
tolik = null;

const resurrectedTolik = new UserDTO().wakeFrom(serialized);

console.log(resurrectedTolik instanceof UserDTO); // true
console.log(resurrectedTolik.printInfo()); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

class Post extends Serializable {
  constructor({ content, date, author }) {
    super();

    this.content = content;
    this.date = date;
    this.author = author;
  }
}

console.log(new Post().wakeFrom(serialized));
// throw an error because the srialized line does contain data for User class
