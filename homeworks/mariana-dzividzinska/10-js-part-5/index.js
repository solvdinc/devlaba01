// task 1 link https://www.codewars.com/kata/55e7650c8d894146be000095/javascript
function validateMessage(msg) {
    if (msg === null) {
        throw new ReferenceError('Message is null!');
    }
    if (typeof msg !== 'string') {
        throw new TypeError(`Message should be of type string but was of type ${typeof msg}!`);
    }
    if (msg.length > 255 || msg.length === 0) {
        throw new RangeError(`Message contains ${msg.length} characters!`);
    }
    if (msg.match(/<[^<>]+>/g)) {
        return false;
    }
    return true;
}

//task 2 link https://www.codewars.com/kata/5a353a478f27f244a1000076
async function sayJoke(apiUrl, jokeId) {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!data.jokes) {
        throw new Error(`No jokes at url: ${apiUrl}`);
    }

    const foundJoke = data.jokes.find(joke => joke.id === jokeId);
    if (!foundJoke) {
        throw new Error(`No jokes found id: ${jokeId}`);
    }

    return {
        saySetup() {
            return foundJoke.setup;
        },
        sayPunchLine() {
            return foundJoke.punchLine;
        },
    };
}

//task 3 setTimeout/setInterval
function solution3() {
    let elapsedTimeCount = 0;

    const timer = setInterval(() => {
        elapsedTimeCount += 1;
        console.log(`Elapsed time: ${elapsedTimeCount}`);
    }, 1000);

    setTimeout(() => {
        clearInterval(timer);
    }, 5000);
}

//task 6 Digit or not
function isStrStartWithNumber(str) {
    if (str.match(/^\d+/g)) {
        return true;
    }
    return false;
}