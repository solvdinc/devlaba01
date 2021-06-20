const getRandomArbitrary = (min, max) => {
  return Math.round(Math.random() * (max - min - 1) + min);
};

const URL = {
  BASE: 'https://laba-backend.herokuapp.com/tile',
};

function ServerError() {
  this.message = 'Bad Requesr 500 ERORR';
  this.type = '500 XMLHTTTP';
}

const getPerson = async () => {
  try {
    const response = await fetch(`${URL.BASE}`);
    const result = await response.json();

    return result;
  } catch (err) {
    throw new ServerError();
  }
};

export { getPerson, getRandomArbitrary };
