//task 1 https://github.com/qaprosoft/devlaba01/blob/master/lectures/08-js-part-3/task.md Pluck
const user = {
    username: 'testuser1',
    preferences: {
        sound: {
            maxValue: 50,
            value: 30,
        },
    },
};
const randomValue = Math.random();
const nullValue = null;

function pluck(obj, key) {
    if (!(obj instanceof Object)) {
        return null;
    }
    let keys = key.split('.');
    for (let i in keys) {
        obj = obj[keys[i]];
        if (obj === undefined) {
            return null;
        }
    }
    return obj;
}

console.log(pluck(user, 'preferences.sound.value')); // 30
console.log(pluck(user, 'unknown.key')); // null
console.log(pluck(randomValue, 'unknown.key')); // null
console.log(pluck(nullValue, 'unknown.key')); // null

//task 2 https://github.com/qaprosoft/devlaba01/blob/master/lectures/08-js-part-3/task.md Deep Clone
const user = {
    username: 'testuser1',
    preferences: {
        sound: {
            maxValue: 50,
            value: 30,
        },
    },
};

function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

const clonedUser = clone(user);

clonedUser.preferences.sound.maxValue = 70;

console.log(
    user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue
); // false

//task 3 https://github.com/qaprosoft/devlaba01/blob/master/lectures/08-js-part-3/task.md 'A long time ago'
function offset(dateAgo) {
    let date = moment(dateAgo);
    return date.fromNow();
}

console.log(offset(moment('23/02/2020 10:00:00', 'DD/MM/YYYY hh:mm:ss')));


//task 4
const date1 = new Date(2021, 1, 23);
const date2 = new Date(2021, 2, 23);

function randomDate(dateFirst, dateSecond) {
    return new Date(dateFirst.getTime() + Math.random() * (dateSecond.getTime() - dateFirst.getTime()));
}

console.log(randomDate(date1, date2)); //Wed Feb 24 2021 13:03:30 GMT+0200

//task 5 https://www.codewars.com/kata/merged-objects
function objConcat(obj) {
    return Object.assign({}, ...obj);
}

//task 6 https://www.codewars.com/kata/547f1a8d4a437abdf800055c
function NamedOne(first, last) {
    this.firstName = first;
    this.lastName = last;

    Object.defineProperty(this, 'fullName', {
        get: function () {
            return `${this.firstName} ${this.lastName}`;
        },
        set: function (value) {
            const arr = value.split(' ');
            if (arr.length === 2) {
                [this.firstName, this.lastName] = arr;
            }
        },
    });
}
