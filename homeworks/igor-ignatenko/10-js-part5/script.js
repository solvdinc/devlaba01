
// // task 1  https://www.codewars.com/kata/55e7650c8d894146be000095/javascript

function solution1() {

    function validateMessage(msg) {
        if (msg === null) {
            throw new ReferenceError('Message is null!');
        }
        else if (typeof msg !== 'string') {
            throw new TypeError(`Message should be of type string but was of type ${typeof msg}!`);
        }
        else if (msg.length >= 264 || msg.length === 0) {
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
    function getData(url) {

        fetch(url)
            .then((res) => res.json())
            .then(json => {
                json.results.forEach((el) => {
                    const list = document.querySelector('.list-fetch')
                    list.innerHTML += `<li><img src='${el.picture.large}'/><p>'${el.name.first}'</p></li>`
                });
            })
    }

    getData('https://randomuser.me//api/?results=6')

    function getDataXML(url) {

        const xhr = new XMLHttpRequest();

        xhr.open('GET', url);

        xhr.responseType = 'json'
        xhr.send();

        xhr.onload = () => {
            if (xhr.status != 200) {
                console.log(`${xhr.status}`)
            } else {
                const parsedData = xhr.response

                parsedData.results.forEach(el => {
                    const list2 = document.querySelector('.list-XMLHTTPRequest');
                    list2.innerHTML += `<li><img src='${el.picture.large}'/><p>'${el.name.first}'</p></li>`
                });
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
        return !!str.match(/^\d+/g)
    }

    console.log(DigitOrNot('21231232132132')); // true
    console.log(DigitOrNot('h5')); // false
    console.log(DigitOrNot('78g')); // false
}


//task 7
function solution7() {

    function validation(number) {

        if (number.match(/^\+?380(\d{2})[.-](\d{3})[.-](\d{2})[.-](\d{2})/g)) {
            return 'Hello from Ukraine'
        }

        return 'I don`t know your number'

    }
    validation('+38093-864-96-32')
}

