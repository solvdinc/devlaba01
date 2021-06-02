import React, { Component } from 'react';

import { Add } from './Add';
import Avatar from './Avatar';
import Button from './Button';
import DownBar from './DownBar';
import { debounce } from 'lodash';

export default class Paper extends Component {
  state = {
    people: [],
  };

  getRandomArbitrary = (min, max) => {
    return Math.round(Math.random() * (max - min - 1) + min);
  };

  getPerson = async () => {
    const response = await fetch('https://tinyfac.es/api/users');
    const people = await response.json();
    const person = people[this.getRandomArbitrary(0, people.length)];

    return person;
  };

  addPerson = debounce(async () => {
    const person = await this.getPerson();
    this.setState((state) => ({ people: [...state.people, person] }));
  }, 300);

  refreshPerson = debounce(async (index) => {
    const newPerson = await this.getPerson();

    this.setState((state) => {
      const people = [...state.people];
      console.log(people);
      people.splice(index, 1, newPerson);
      console.log(people);

      return { ...state, people };
    });
  }, 300);

  render() {
    const { people } = this.state;
    return (
      <div className="container">
        {people.map((person, index) => {
          const avatar = person.avatars[this.getRandomArbitrary(0, person.avatars.length)];
          return <Avatar key={index} click={() => this.refreshPerson(index)} src={avatar.url} />;
        })}
        <Add click={this.addPerson} />
        <DownBar>
          <Button>REFRESH ALL</Button>
        </DownBar>
      </div>
    );
  }
}
