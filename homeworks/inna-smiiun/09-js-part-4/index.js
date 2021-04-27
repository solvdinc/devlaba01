class Serializable {
    serialize() {
        let obj = {
            className: `${this.constructor.name}`,
            ...this
        };
        return JSON.stringify(obj, (keys, value) => {
            Object.keys(value).forEach((key) => {
                if (value[key] === undefined) {
                    throw new Error('Unexpected value, object can\'t be serialized');
                }
                if (value[key] === null) {
                    value[key] = 'null';
                }
                if (value[key] === Infinity) {
                    value[key] = 'Infinity';
                }
                if (value[key] === -Infinity) {
                    value[key] = '-Infinity';
                }
                if (Number.isNaN(value[key])) {
                    value[key] = 'NaN';
                }
            });
            return value;
        });
    }

    wakeFrom(serialized) {
        const parsedObj = JSON.parse(serialized, (key, value) => {
            if (Date.parse(value)) return new Date(value);
            if (value === 'Infinity') return Infinity;
            if (value === '-Infinity') return -Infinity;
            if (value === 'null') return null;
            if (value === 'NaN') return NaN;

            return value;
        });
        if (parsedObj.className === this.constructor.name) {
            return new this.constructor(parsedObj);
        }
        throw new Error('The class name does not match');
    }
}

class UserDTO extends Serializable {
    constructor({firstName, lastName, phone, birth,} = {}) {
        super();

        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.birth = birth;
    }

    printInfo() {
        console.log(`${this.firstName[0]}. ${this.lastName} - ${this.phone}, ${this.birth.toISOString()}`);
    }
}

let tolik = new UserDTO({
    firstName: 'Anatoliy',
    lastName: 'Antonovych',
    phone: '3809595959597',
    birth: new Date('1999-01-02'),
});

tolik.printInfo();

const serialized = tolik.serialize();
tolik = null;

const resurrectedTolik = (new UserDTO()).wakeFrom(serialized);

console.log(resurrectedTolik);
console.log(resurrectedTolik instanceof UserDTO); // true
console.log(resurrectedTolik.printInfo()); // A. Antonovych - 3809595959597, 1999-01-02T00:00:00.000Z

class Post extends Serializable {
    constructor({content, date, author}) {
        super()

        this.content = content;
        this.date = date;
        this.author = author;
    }
}

console.log((new Post()).wakeFrom(serialized));
