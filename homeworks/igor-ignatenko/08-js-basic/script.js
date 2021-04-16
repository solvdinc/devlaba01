// task1
function solution1() {

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
        const path = key.split('.');
        let result = { ...obj };

        for (let i = 0; i < path.length; i += 1) {
            result = result[path[i]];
            if (result === undefined) {
                return null;
            }
        }
        return result
    };

    console.log(pluck(user, 'preferences.sound.value')); // 30
    console.log(pluck(user, 'unknown.key')); // null
    console.log(pluck(randomValue, 'unknown.key')); // null
    console.log(pluck(nullValue, 'unknown.key')); // null
}

//task2

function solution2() {
    const user = {
        username: 'testuser1',
        preferences: {
            sound: {
                maxValue: 50,
                value: 30,
            },
        },
    };
    const clonedUser = clone(user);

    function clone(obj) {
        const clonedObj = {};
        const keyArr = Object.keys(obj);

        keyArr.forEach(el => {
            //         also we can use if({}.constructor.name) 
            if (Object.prototype.toString.call(obj[el]) === '[object Object]') {
                clonedObj[el] = clone(obj[el]);
            } else {
                clonedObj[el] = obj[el]
            }

        })
        return clonedObj
    }

    clonedUser.preferences.sound.maxValue = 70;
    console.log(user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue,);
}

//task3
function solution3() {

    function offset(date) {
        const currentDate = moment();
        const newDate = moment(date);
        // return newDate.fromNow()/or you can use this
        const years = currentDate.diff(newDate, 'year');
        newDate.add(years, 'years');

        const months = currentDate.diff(newDate, 'months');
        newDate.add(months, 'months');

        const days = currentDate.diff(newDate, 'days');
        newDate.add(days, 'days');

        const hours = currentDate.diff(newDate, 'hours');
        newDate.add(hours, 'hours');

        const minutes = currentDate.diff(newDate, 'minutes');
        newDate.add(minutes, 'minutes');

        const seconds = currentDate.diff(newDate, 'seconds');
        newDate.add(seconds, 'seconds');

        const result = [];

        if (years > 0) {
            result.push(years + ` year${years > 1 ? 's ' : ""}`);
        }
        if (months > 0) {
            result.push(months + ` month${months > 1 ? 's ' : ""}`);
        }
        if (days > 0) {
            result.push(days + ` day${days > 1 ? 's ' : ""}`);
        }
        if (hours > 0) {
            result.push(hours + ` hour${hours > 1 ? 's ' : ""} `);
        }
        if (minutes > 0) {
            result.push(minutes + ` minute${minutes > 1 ? 's ' : ""}`);
        }
        if (seconds > 0) {
            result.push(seconds + ` second${seconds > 1 ? 's ' : ""}`);
        }

        return result.join('');

    }

    console.log(offset(moment('14/04/2021 14:15:00', 'DD/MM/YYYY hh:mm:ss')))
}
// task 4

function solution4() {

    const date1 = moment('23/01/2021', 'DD/MM/YYYY');
    const date2 = moment('23/02/1200', 'DD/MM/YYYY');

    function randomDate(date1, date2) {
        const firstDate = moment(date1);
        const secondDate = moment(date2);
        return moment(firstDate + Math.random() * (secondDate - firstDate));
    }

    console.log(randomDate(date1, date2).format('DD/MM/YY'));
}



// task 5 https://www.codewars.com/kata/merged-objects
function solution5() {

    const a = { '1': '1', '2': '2', '3': '3' },
        b = { '3': '4', '5': '6', '6': '7', '7': '8' },
        c = { '5': '9', '8': '9', '6': '12', '23': '35' },
        o = [a, b, c];

    function objConcat(obj) {
        return Object.assign({}, ...obj);
    }

    console.log(objConcat(o));
}


//task 6  https://www.codewars.com/kata/547f1a8d4a437abdf800055c
function solution6() {

    function NamedOne(first, last) {
        this.firstName = first;
        this.lastName = last;

        Reflect.defineProperty(this, 'fullName', {
            get() {
                return `${this.firstName} ${this.lastName}`;
            },
            set(name) {
                const arrfullName = name.split(' ');
                const [firstName, lastName] = arrfullName;
                if (lastName) {
                    this.firstName = firstName;
                    this.lastName = lastName;
                }
            },
        });
    }

    NamedOne();
}

//task 7 https://www.codewars.com/kata/54834b3559e638b39d0009a2
function solution7() {
    function OnceNamedOne(first, last) {
        return Object.freeze({
            firstName: first,
            lastName: last,
            get fullName() {
                return `${first} ${last}`
            }
        })
    }
}

//task 9 https://www.codewars.com/kata/human-readable-time
function solution9() {
    function humanReadable(seconds) {
        return `${check(Math.floor(seconds / (60 * 60)))}:${check(Math.floor((seconds / 60) % 60))}:${check(seconds % 60)}`
        
    }
    function check(num) {
        return num > 10 ? num : "0" + num;
    };
}






















































