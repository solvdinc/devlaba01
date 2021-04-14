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
























































// // const newArr = arr.forEach(el => [...new Set(el.toLowerCase())].sort().join(''));
// // const checkArr = newArr.slice(0, 3).filter(el => el === newArr[0]).length > 1 ? arr[newArr.find(el => el !== newArr[0])] : arr[0]
// // function findUniq(arr) {
// //     const newArr = arr.map(el => [...new Set(el.toLowerCase())].sort().join(''));
// //     const checkArr = newArr.slice(0, 3).filter(el => el === newArr[0]);

// //     if (checkArr.length > 1) {
// //         return arr[newArr.indexOf(newArr.find(el => el !== newArr[0]))];
// //     } else {
// //         return newArr[0];
// //     }
// // }

// // console.log(findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']))
// // console.log(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']))
// //  return arr.slice(0, 3).filter(el => el === arr[0]).length > 1 ? arr.find(el => el !== arr[0]) : arr[0]

// // function findUniq(arr) {
// //     const newArr = arr.map(el => [...new Set(el.toLowerCase())].sort().join(''));
// //     const checkArr = newArr.slice(0, 3).filter(el => el === newArr[0]);

// //     if (checkArr.length > 1) {
// //         return arr[newArr.indexOf(newArr.find(el => el !== newArr[0]))];
// //     } else {
// //         return newArr[0];
// //     }
// // }

// // console.log(findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']))

// // function findUniq(arr) {
// //     const sample = arr.slice(0, 3).map(el => standardize(el));
// //     const checkArr = sample.filter(el => el === sample[0])
// //     console.log(sample)
// //     console.log(checkArr)
// //     if (checkArr.length > 1 ) {

// //     }

// //     // const sSize = new Set(sample).size
// //     // console.log(sSize)
// //     // for (var j of arr.slice(2, arr.length)) {
// //     //     const check = standardize(j)

// //     //     if (sSize == 2 && sample.includes(check)) {
// //     //         return sample.filter(e => standardize(e) != check)[0]
// //     //     }
// //     //     if (!sample.includes(check)) {
// //     //         return j
// //     //     }
// //     // }
// // }

// // function standardize(s) {
// //     return [...new Set(s.toLowerCase().split('').sort((a, b) => a > b))].join('')
// // }
// // console.log(findUniq(['Aa', 'BbBb', 'aaaaa', 'aaaaa', 'Aaaa', 'AaAaAa', 'a']))
// // console.log(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']))

// // function findUniq(arr) {
// //     const setedArr = arr.map(el => standardize(el));
// //     const partOfArr = setedArr.slice(0, 3)
// //     const filteredPart = partOfArr.filter(el => el === partOfArr[0])

// //     if (filteredPart.length > 1) {
// //         return arr[setedArr.indexOf(setedArr.find(el => el != filteredPart[0]))]
// //     } else {
// //         return arr[0]
// //     }
// // }

// // function standardize(el) {
// //     return [...new Set(el.toLowerCase().split('').sort((a, b) => a > b))].join('')
// // }

// function findUniq(arr) {
//     const repeateble = arr.slice(0, 3).map(el => {
//         return el.toLowerCase().replace(/\s/g, '').split('').sort();
//     }).sort()[1];

//     for (let i = 0; i < arr.length; i++) {
//         let str = arr[i].toLowerCase().replace(/\s/g, '');
//         if ((!repeateble.length && str.length) || (repeateble.length && !str.length)) return arr[i];
//         for (let j = 0; j < str.length; j++) {
//             if (repeateble.indexOf(str[j]) === -1) return arr[i];
//         }
//     }
// }
// console.log(findUniq(['Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter']))