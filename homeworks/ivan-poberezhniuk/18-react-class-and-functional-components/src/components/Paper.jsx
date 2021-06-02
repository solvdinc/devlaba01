import React, { Component } from 'react';

import { debounce } from 'lodash';

import { Add } from './Add';
import Avatar from './Avatar';
import Button from './Button';
import DownBar from './DownBar';
import { getPerson, getRandomArbitrary } from '../api';

export default class Paper extends Component {
  state = {
    people: [],
  };

  addPerson = debounce(async () => {
    const person = await getPerson();
    this.setState((state) => ({ people: [...state.people, person] }));
  }, 300);

  refreshPerson = debounce(async (index) => {
    const newPerson = await getPerson();

    this.setState((state) => {
      const people = [...state.people];

      people.splice(index, 1, newPerson);

      return { ...state, people };
    });
  }, 300);

  refreshAllPersons = debounce(async () => {
    const people = await Promise.all(this.state.people.map((person) => getPerson()));

    this.setState((state) => {
      return { ...state, people };
    });
  }, 300);

  render() {
    const { people } = this.state;
    return (
      <div className="container">
        {people.map((person, index) => {
          const avatar = person.avatars[getRandomArbitrary(0, person.avatars.length)];
          return <Avatar key={index} click={() => this.refreshPerson(index)} src={avatar.url} />;
        })}
        <Add click={this.addPerson} />
        <DownBar>
          <Button onClick={this.refreshAllPersons}>REFRESH ALL</Button>
        </DownBar>
      </div>
    );
  }
}
