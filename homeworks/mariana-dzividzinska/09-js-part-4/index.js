class Serializable {
    serialize() {
        const availableTypes = ["string", "object", "number", "undefined"];
        const serializableObj = JSON.stringify(this, function (key, value) {
            if (availableTypes.indexOf(typeof value) === -1) {
                throw `Program doesn't work with ${typeof value}`;
            }
            if (value === Infinity) return "Infinity";
            if (value === -Infinity) return "-Infinity";
            if (isNaN(value) && (typeof value) === "number") return "NaN";

            return value;
        });

        return serializableObj;
    }

    wakeFrom(string) {
        const expectedKeys = Object.keys(this);
        Object.keys(JSON.parse(string)).forEach(key => {
            if (expectedKeys.indexOf(key) === -1) {
                throw `Can not find property ${key}`;
            }
        })

        const origin = JSON.parse(string, function (key, value) {
            if (typeof value !== "number" && Date.parse(value) > 0) return new Date(value);
            if (value === "Infinity") return Infinity;
            if (value === "-Infinity") return -Infinity;
            if (value === "NaN") return NaN;

            return value;
        });

        return new this.constructor(origin);
    }
}

class UserDTO extends Serializable {
    constructor({
        firstName,
        lastName,
        phone,
        birth,
    } = {}) {
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
    lastName: 'Nashovich',
    phone: '2020327',
    birth: new Date('1999-01-02'),
});

tolik.printInfo(); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

const serialized = tolik.serialize();
tolik = null

const resurrectedTolik = (new UserDTO()).wakeFrom(serialized);

console.log(resurrectedTolik instanceof UserDTO); // true
console.log(resurrectedTolik.printInfo()); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

class Post extends Serializable {
    constructor({
        content,
        date,
        author,
    } = {}) {
        super()

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

const numbersTest1 = new Numbers({
    a: NaN,
    b: Infinity,
    c: -Infinity,
    d: 48
});

const serializedNumTest1 = numbersTest1.serialize();
console.log(serializedNumTest1);
console.log(new Numbers().wakeFrom(serializedNumTest1));