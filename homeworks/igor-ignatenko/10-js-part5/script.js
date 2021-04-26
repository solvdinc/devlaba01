
// // task 1  https://www.codewars.com/kata/55e7650c8d894146be000095/javascript

function solution1() {

    function validateMessage(msg) {
        if (msg === null) {
            throw new ReferenceError('Message is null!');
        }
        else if (typeof msg !== 'string') {
            throw new TypeError(`Message should be of type string but was of type ${typeof msg}!`);
        }
        else if (msg.length >= 255 || msg.length === 0) {
            throw new RangeError(`Message contains ${msg.length} characters!`);
        }
        else if (msg.includes('<') && msg.includes('>')) {
            return false;
        }
        return true;
    };

}

// task 2  https://www.codewars.com/kata/5a353a478f27f244a1000076/train/javascript

function solution2() {

    async function sayJoke(apiUrl, jokeId) {

        const response = await fetch(apiUrl)
            .then((res) => res.json());

        if (!response.jokes) throw new Error(`No jokes in url: ${apiUrl}`);

        const jokeOnId = response.jokes.filter(el => el.id === jokeId)[0];

        if (!jokeOnId) throw new Error(`No jokes found id: ${jokeId}`);

        return {
            ...jokeOnId,
            saySetup() {
                return this.setup
            },
            sayPunchLine() {
                return this.punchLine
            },

        }
    }

}

// task 3 Timeer

function solution3() {

    function timer(end) {
        let seconds = 0

        const check = setInterval(() => {
            seconds += 1;

            if (seconds >= end) {
                clearInterval(check)
            }

            console.log(`Elapsed time: ${seconds} sec`)

        }, 1000)
    }
    timer(5)

}

// task 5   
function solution5() {

    function rendering(users) {
        const UserList = users.results;

        const wrapper = document.querySelector('.wrapper');
        const container = document.createElement('div');
        container.classList.add('container');

        UserList.forEach((el) => {
            container.innerHTML += `<img src='${el.picture.large}'/><p>'${el.name.first}'</p>`;
        });

        wrapper.append(container);

    }
    async function getDataFetch(url) {

        const data = await fetch(url);

        if(data.status === 200) {
            const JSONdata =  await data.json();
            rendering(JSONdata);
        } else [
            console.log(`Problems, check ${data.status}`)
        ]
    }

    getDataFetch('https://randomuser.me//api/?results=6')

    function getDataXML(url) {

        const xhr = new XMLHttpRequest();

        xhr.open('GET', url);

        xhr.responseType = 'json'
        xhr.send();

        xhr.onload = () => {
            if (xhr.status != 200) {
                console.log(`${xhr.status}`)
            } else {
                const parsedData = xhr.response;
                rendering(parsedData);
            }
        }
        xhr.onprogress = function (event) {
            if (event.lengthComputable) {
                console.log(`Получено ${event.loaded} из ${event.total} байт`);
            } else {
                console.log(`Получено ${event.loaded} байт`);
            }
        }
    }
    getDataXML('https://randomuser.me//api/?results=6')
}
solution5()
//   task 6

function solution6() {

    function DigitOrNot(str) {
        return (/^\d/).test(str);
    }

    console.log(DigitOrNot('21231232132132')); // true
    console.log(DigitOrNot('h5')); // false
    console.log(DigitOrNot('78g')); // true
}
solution6()

//task 7
function solution7() {

    function validation(number) {
        return (/\+380 \d{2}-\d{3}-\d{2}-\d{2}/).test(number);
        // return /\+380[ -]\d{2}[ -]\d{3}[ -]\d{2}[ -]\d{2}/.test(number); //for '+380 93 864 96 32' or '+380-93-864-96-32'
    }
    console.log(validation('+380 93-864-96-32'));
}
solution7()
