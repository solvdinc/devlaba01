import React, { Component } from 'react';
import './Paper.css';

import { debounce } from 'lodash';

import { Add } from '../components/Add';
import Avatar from '../components/Avatar';
import Button from '../components/Button';
import DownBar from '../components/DownBar';
import { getPerson, getRandomArbitrary } from '../api';

export default class Paper extends Component {
  state = {
    people: [],
    isLoading: false,
  };

  setLoading = (index, loadingValue) => {
    this.setState((state) => {
      const people = [...state.people];

      people[index].isLoading = loadingValue;
      return {
        ...state,
        people: people,
      };
    });
  };

  setLoadingAll = (value) => {
    this.setState((state) => ({
      ...state,
      isLoading: value,
    }));
  };

  addPerson = debounce(async () => {
    const person = await getPerson();
    this.setState((state) => ({ people: [...state.people, { ...person, isLoading: false }] }));
  }, 300);

  refreshPerson = debounce(async (index) => {
    try {
      this.setLoading(index, true);
      const newPerson = await getPerson();

      this.setState((state) => {
        const people = [...state.people];
        people.splice(index, 1, newPerson);
        return { ...state, people };
      });
    } finally {
      this.setLoading(index, false);
    }
  }, 300);

  refreshAllPersons = debounce(async () => {
    try {
      this.setLoadingAll(true);

      const people = await Promise.all(this.state.people.map((person) => getPerson()));
      this.setState((state) => {
        return { ...state, people };
      });
    } finally {
      this.setLoadingAll(false);
    }
  }, 300);

  render() {
    const { people, isLoading } = this.state;
    return (
      <div className="container">
        {people.map((person, index) => {
          const avatar = person.avatars[getRandomArbitrary(0, person.avatars.length)];
          return (
            <Avatar
              key={index}
              isLoading={person.isLoading || isLoading}
              click={() => this.refreshPerson(index)}
              src={avatar.url}
            />
          );
        })}
        <Add click={this.addPerson} />
        <DownBar>
          <Button onClick={this.refreshAllPersons} disabled={isLoading}>
            REFRESH ALL
          </Button>
        </DownBar>
      </div>
    );
  }
}
