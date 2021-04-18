
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
        obj = { ...obj, ...this };

        const serialized = JSON.stringify(obj, (key, value) => {
            Object.keys(value).forEach(el => {
                if (value[el] instanceof Date) {
                    value[el] = value[el].getTime()
                } else if (Object.prototype.toString.call(value[el]) === '[object Array]') {
                    value[el] = value[el].join(',')
                }
            });
            
            return value;
        });

        return serialized
    }
    wakeFrom(serialized) {
        const copyOfThis = new this.constructor;
        const serializedKey = Object.keys(JSON.parse(serialized));
        const thisKeys = Object.keys(copyOfThis);
        const [className, ...copyserializedKey] = serializedKey;

        if (JSON.parse(serialized).className === this.constructor.name) {
            for (let i = 0; i < copyserializedKey.length; i++) {
                if (copyserializedKey[i] === thisKeys[i]) {
                    if (copyserializedKey[i] === 'birth') {
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
    constructor({ first1Name, lastName, phone, birth } = {}) {
        super();

        this.first1Name = first1Name;
        this.lastName = lastName;
        this.phone = phone;
        this.birth = birth;
    }

    printInfo() {
        console.log(`${this.first1Name[0]}. ${this.lastName} - ${this.phone}, ${this.birth.toISOString()}`);
    }
}

let tolik = new UserDTO({
    first1Name: 'Anatoliy',
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
    constructor({ content, date, author } = {}) {
        super()

        this.content = content;
        this.date = date;
        this.author = author;
    }
}


