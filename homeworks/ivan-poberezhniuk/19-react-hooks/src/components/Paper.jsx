import React, { useState } from 'react';

import { debounce } from 'lodash';

import { Add } from './Add';
import Avatar from './Avatar';
import Button from './Button';
import DownBar from './DownBar';
import { getPerson, getRandomArbitrary } from '../api';

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
    const refreshedPeople = await Promise.all(people.map((person) => getPerson()));

    setPeople(refreshedPeople);
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
