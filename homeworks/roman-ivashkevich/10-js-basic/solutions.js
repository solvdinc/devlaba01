// task 1 https://www.codewars.com/kata/55e7650c8d894146be000095
function solution1() {
  function validateMessage(massage) {
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
  }

  validateMessage('<input>');
}

solution1();

// task 2 https://www.codewars.com/kata/5a353a478f27f244a1000076
function solution2() {
  async function sayJoke(apiUrl, jokeId) {
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
  }

  sayJoke('http://great.jokes/christmas', 101);
}

solution2();
