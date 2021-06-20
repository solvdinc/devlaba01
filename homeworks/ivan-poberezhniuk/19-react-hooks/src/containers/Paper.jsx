import { useState } from 'react';

import { debounce } from 'lodash';

import Add from '../components/Add';
import Avatar from '../components/Avatar';
import Button from '../components/Button';
import DownBar from '../components/DownBar';

import { getPerson, getRandomArbitrary } from '../api';
import './Paper.css';

const Paper = () => {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const addPerson = debounce(async () => {
    let person = await getPerson();
    person = { ...person, isLoading: false };

    setPeople([...people, person]);
  }, 300);

  const setLoading = (index, loadingValue) => {
    setPeople((prevState) => {
      const currentState = [...prevState];
      currentState[index].isLoading = loadingValue;
      return currentState;
    });
  };

  const refreshPerson = debounce(async (index) => {
    try {
      setLoading(index, true);
      let newPerson = await getPerson();

      setPeople((prevState) => {
        const currentState = [...prevState];
        currentState[index] = { ...currentState[index], ...newPerson };
        return currentState;
      });
    } finally {
      setLoading(index, false);
    }
  }, 300);

  const refreshAllPersons = debounce(async () => {
    try {
      setIsLoading(true);
      const refreshedPeople = await Promise.all(people.map((person) => getPerson()));
      setPeople(refreshedPeople);
    } finally {
      setIsLoading(false);
    }
  }, 300);

  return (
    <div className="container">
      {people.map((person, index) => {
        const avatar = person.avatars[getRandomArbitrary(0, person.avatars.length)];

        return (
          <Avatar
            key={index}
            isLoading={person.isLoading || isLoading}
            click={() => refreshPerson(index)}
            src={avatar.url}
          />
        );
      })}
      <Add click={addPerson} />
      <DownBar>
        <Button onClick={refreshAllPersons} disabled={isLoading}>
          REFRESH ALL
        </Button>
      </DownBar>
    </div>
  );
};

export default Paper;
