const getRandomArbitrary = (min, max) => {
  return Math.round(Math.random() * (max - min - 1) + min);
};

const URL = {
  BASE: 'https://tinyfac.es',
};

const getPerson = async () => {
  const response = await fetch(`${URL.BASE}/api/users`);
  const people = await response.json();
  const person = people[getRandomArbitrary(0, people.length)];

  return person;
};

export { getPerson, getRandomArbitrary };
