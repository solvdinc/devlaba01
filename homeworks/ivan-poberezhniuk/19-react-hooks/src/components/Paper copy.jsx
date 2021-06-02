import React, { useState } from 'react';

const Paper = () => {
  const [people, setPeople] = useState([]);

  const addPerson = debounce(async () => {
    const person = await getPerson();
    setPeople([...people, person]);
  }, 300);

  const refreshPerson = debounce(async (index) => {
    const newPerson = await getPerson();
    const data = [...people];
    data.splice(index, 1, newPerson);
    setPeople(data);
  }, 300);

  const refreshAllPersons = debounce(async () => {
    const people = await Promise.all(this.state.people.map((person) => getPerson()));

    this.setState((state) => {
      return { ...state, people };
    });
  }, 300);

  return (
    <div className="container">
      {people.map((person, index) => {
        const avatar = person.avatars[getRandomArbitrary(0, person.avatars.length)];
        return <Avatar key={index} click={() => refreshPerson(index)} src={avatar.url} />;
      })}
      <Add click={addPerson} />
      <DownBar>
        <Button onClick={refreshAllPersons}>REFRESH ALL</Button>
      </DownBar>
    </div>
  );
};

export default Paper;
