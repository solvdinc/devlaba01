class Serializable {
	serialize() {
		const json = JSON.stringify([this, this.constructor.name], (key, value) => {
			Object.keys(value).forEach((key) => {
				if (value[key] instanceof Date) {
					value[key] = value[key].getTime();
				}
			});
			return value;
		});
		return json;
	}

	wakeFrom(string) {
		const [object, constructorName] = JSON.parse(string, (key, value) => {
			const isDate = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/.exec(value);
			if (isDate) {
				value = new Date(isDate[0]);
			}
			return [key, value];
		});
		if (this.constructor.name !== constructorName) {
			console.log('Serialized class name does not match');
		}
		return new this.constructor(object);
	}
}
class UserDTO extends Serializable {
	constructor(user) {
		const { firstName, lastName, phone, birth } = { ...user };
		super();

		this.firstName = firstName;
		this.lastName = lastName;
		this.phone = phone;
		this.birth = birth;
	}

	printInfo() {
		return `${this.firstName[0]}. ${this.lastName} - ${this.phone}, ${this.birth.toISOString()}`;
	}
}

let tolik = new UserDTO({
	firstName: 'Anatoliy',
	lastName: 'Nashovich',
	phone: '2020327',
	birth: new Date('1999-01-02'),
});

tolik.printInfo(); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

let serialized = tolik.serialize();
tolik = null

const resurrectedTolik = (new UserDTO()).wakeFrom(serialized);

console.log(resurrectedTolik instanceof UserDTO); // true
console.log(resurrectedTolik.printInfo()); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

class Post extends Serializable {
	constructor({ content, date, author }) {
		super()

		this.content = content;
		this.date = date;
		this.author = author;
	}
}

let myPost = new Post({
	content: ' ',
	date: new Date('1999-01-02'),
	author: 'Anatoliy',
})

console.log((new Post()).wakeFrom(serialized));
