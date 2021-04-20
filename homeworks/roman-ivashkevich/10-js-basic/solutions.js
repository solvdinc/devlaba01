// task 1 https://www.codewars.com/kata/55e7650c8d894146be000095
function solution1() {
  const validateMessage = (massage) => {
    if (massage === null) {
      throw ReferenceError('Message is null!');
    }

    if (typeof massage !== 'string') {
      throw TypeError(
        `Message should be of type string but was of type ${typeof massage}!`,
      );
    }

    if (massage.length === 0 || massage.length > 255) {
      throw RangeError(`Message contains ${massage.length} characters!`);
    }

    if (massage.includes('<') && massage.includes('>')) {
      return false;
    }

    return true;
  };

  validateMessage('<input>');
}

solution1();

// task 2 https://www.codewars.com/kata/5a353a478f27f244a1000076
function solution2() {
  const sayJoke = async (apiUrl, jokeId) => {
    const response = await fetch(apiUrl);
    const objOfJokes = await response.json();

    if (!objOfJokes.jokes) {
      throw new Error(`No jokes at url: ${apiUrl}`);
    }

    const resObj = objOfJokes.jokes.find((el) => el.id === jokeId);

    if (!resObj) {
      throw new Error(`No jokes found id: ${jokeId}`);
    }

    return {
      saySetup() {
        return resObj.setup;
      },
      sayPunchLine() {
        return resObj.punchLine;
      },
    };
  };

  sayJoke('http://great.jokes/christmas', 101);
}

solution2();

// timer
// setTimeout
const timer = (endTimer) => {
  let time = 0;
  const go = () => {
    if (time < endTimer) {
      setTimeout(go, 1000);
    }

    if (time === endTimer) {
      console.clear();
      return;
    }

    time += 1;
    console.log(`Elapsed time: ${time} sec`);
  };

  setTimeout(go, 1000);
};

timer(5);

// setInterval
// const timer = (endTimer) => {
//   let time = 0;
//   const go = () => {
//     if (time === endTimer) {
//       console.clear();
//       clearInterval(timerId);
//       return;
//     }
//     time += 1;
//     console.log(`Elapsed time: ${time} sec`);
//   };
//   let timerId = setInterval(go, 1000);
// };

// timer(5);

// task 6
function solution6() {
  const digitOrNot = (string) => {
    if (/^\d/.test(string)) {
      return true;
    }
    return false;
  };

  digitOrNot('123str');
}
solution6();

// task 7
function solution7() {
  const whoseNumber = (string) => {
    const partOfNumber = string.match(/\d{3}/)[0];

    if (partOfNumber === '375') {
      return `This number ${string} from Belarus`;
    }

    if (partOfNumber === '380') {
      return `This number ${string} from Ukraine`;
    }

    return 'unknown number';
  };

  whoseNumber('+375336100626');
}
solution7();
