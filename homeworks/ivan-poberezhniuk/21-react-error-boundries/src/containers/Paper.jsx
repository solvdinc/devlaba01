import './Paper.css';

import { useState } from 'react';

import faker from 'faker';
import { debounce } from 'lodash';

import { getPerson } from '../api';
import Add from '../components/Add';
import Avatar from '../components/Avatar';
import AvatarFallback from '../components/AvatarFallback';
import Button from '../components/Button';
import DownBar from '../components/DownBar';
import ErrorBoundary from '../components/ErrorBoundary';
import Modal from '../components/Modal';

const Paper = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const addPerson = debounce(async () => {
    try {
      let person = await getPerson();
      person = { ...person, isLoading: false };
      setPeople([...people, person]);
    } catch (err) {
      setErrorMessage(`REQUEST for adding a new tile was failed: ${err.message}`);
      setIsOpen(true);
    }
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
    } catch (err) {
      setErrorMessage(`REQUEST for Updating the tile was failed: ${err}`);
      setIsOpen(true);
    } finally {
      setLoading(index, false);
    }
  }, 300);

  const refreshAllPersons = debounce(async () => {
    try {
      if (!people.length) {
        setIsOpen(true);
        setErrorMessage('Please add at least one tile FOR refreshING all tiles');
      }
      setIsLoading(true);
      const refreshedPeople = await Promise.all(people.map((person) => getPerson()));
      setPeople(refreshedPeople);
    } catch (err) {
      setIsLoading(false);
      setError(true);
      setErrorMessage('Please add at least one tile FOR refreshING all tiles');
    } finally {
      setIsLoading(false);
    }
  }, 300);

  return (
    <div className="container">
      {people.map((person, index) => {
        return (
          <ErrorBoundary
            fallbackComponent={AvatarFallback}
            onError={() => setError(true)}
            onReset={() => {
              refreshPerson(index);
              setError(false);
            }}
            isLoading={person.isLoading || isLoading}
            resetKeys={[error]}
            key={faker.datatype.number()}
          >
            <Avatar
              key={faker.datatype.number()}
              isLoading={person.isLoading || isLoading}
              click={() => refreshPerson(index)}
              src={person?.avatar}
            />
          </ErrorBoundary>
        );
      })}
      <Add click={addPerson} />
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <h3>{errorMessage}</h3>
      </Modal>
      <DownBar>
        <Button onClick={refreshAllPersons} disabled={isLoading}>
          REFRESH ALL{!!people.length && `(${people.length})`}
        </Button>
      </DownBar>
    </div>
  );
};

export default Paper;
