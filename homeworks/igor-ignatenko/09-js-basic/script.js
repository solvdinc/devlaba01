
/**
 * REMOVEME To mock the class you to provide us with
 * @typedef {{
 *   serialize(): string,
 *   wakeFrom(serialized: string): Serializable
 * }} Serializable
 */

class Serializable {
    serialize() {
        let obj = {
            className: `${this.constructor.name}`
        }
        console.log(obj)
        obj = { ...obj, ...this };
        try {
            const serialized = JSON.stringify(obj, (key, value) => {
                Object.keys(value).forEach(el => {
                    if (value[el] instanceof Date) {
                        value[el] = value[el].getTime()
                    } else if (Object.prototype.toString.call(value[el]) === '[object Array]') {
                        value[el] = value[el].join(',')
                    } else if (value[el] === Infinity) {
                        value[el] = 'Infinity'
                    } else if (value[el] === -Infinity) {
                        value[el] = '-Infinity'
                    } else if (value[el] === null) {
                        value[el] = 'null'
                    } else if (value[el] !== value[el]) {
                        value[el] = 'NaN'
                    }
                });
                return value;
            });
            console.log(serialized)
            return serialized
        } catch (error) {
            throw new Error('Not valid object for JSON-serializing')
        }
    }
    wakeFrom(serialized) {
        const copyOfThis = new this.constructor;
        const serializedKey = Object.keys(JSON.parse(serialized));
        const thisKeys = Object.keys(copyOfThis);
        const [className, ...copyserializedKey] = serializedKey;

        if (JSON.parse(serialized).className === this.constructor.name) {
            for (let i = 0; i < copyserializedKey.length; i++) {
                if (copyserializedKey[i] === thisKeys[i]) {
                    if (JSON.parse(serialized)[copyserializedKey[i]] === 'Infinity'
                        || JSON.parse(serialized)[copyserializedKey[i]] === '-Infinity'
                        || JSON.parse(serialized)[copyserializedKey[i]] === 'NaN') {
                        copyOfThis[copyserializedKey[i]] = +JSON.parse(serialized)[copyserializedKey[i]];
                    } else if (copyserializedKey[i] === 'birth') {
                        copyOfThis[copyserializedKey[i]] = new Date(JSON.parse(serialized)[copyserializedKey[i]]);
                    } else {
                        copyOfThis[copyserializedKey[i]] = JSON.parse(serialized)[copyserializedKey[i]];
                    }
                } else {
                    throw new Error('Dif keys of object');
                }
            }
        } else {
            throw new Error('Wrong class');
        }

        return copyOfThis
    }
}

class UserDTO extends Serializable {
    constructor({ firstName, lastName, phone, birth } = {}) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.birth = birth;

    }

    printInfo() {
        console.log(`${this.firstName}.${this.lastName} - ${this.phone}, ${this.birth.toISOString()}`);
    }
}

let tolik = new UserDTO({
    firstName: 'Anatoliy',
    lastName: 'Nashovich',
    phone: '200243',
    birth: new Date('1999-01-02'),
});

tolik.printInfo(); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

const serialized = tolik.serialize();

tolik = null

const resurrectedTolik = (new UserDTO()).wakeFrom(serialized);
console.log(resurrectedTolik)
console.log(resurrectedTolik instanceof UserDTO); // true
resurrectedTolik.printInfo(); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

class Post extends Serializable {
    constructor({ content, date, author } = {}) {
        super()

        this.content = content;
        this.date = date;
        this.author = author;
    }
}
// console.log((new Post()).wakeFrom(serialized));
class Types extends Serializable {
    constructor({ firstName, lastName, phone, birth } = {}) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.birth = birth;
    }

    printInfo() {
        console.log(`${typeof this.firstName}, ${this.lastName}, ${this.phone}, ${this.birth}`);
    }
}

let test = new Types({
    firstName: Infinity,
    lastName: -Infinity,
    phone: NaN,
    birth: new Date('1999-01-02'),
});

test.printInfo()
const serializedType = test.serialize();
test = null;

const resurrectedTest = (new Types()).wakeFrom(serializedType);
console.log(resurrectedTest)
console.log(resurrectedTest instanceof UserDTO);
resurrectedTest.printInfo();

