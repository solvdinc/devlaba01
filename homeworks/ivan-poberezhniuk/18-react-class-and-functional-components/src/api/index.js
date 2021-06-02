const getRandomArbitrary = (min, max) => {
  return Math.round(Math.random() * (max - min - 1) + min);
};

const getPerson = async () => {
  const response = await fetch('https://tinyfac.es/api/users');
  const people = await response.json();
  const person = people[getRandomArbitrary(0, people.length)];

  return person;
};

export { getPerson, getRandomArbitrary };
