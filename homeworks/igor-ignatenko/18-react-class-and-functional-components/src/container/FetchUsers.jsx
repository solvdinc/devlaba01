import React from 'react';
import AddButton from '../components/AddButton.jsx';
import Card from '../components/Card.jsx';
import './FetchUsers.css';
import RefreshButton from '../components/RefreshButton.jsx';

class FetchUser extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      people: [],
    };
  }

  getCards = async () => {
    const url = 'https://tinyfac.es/api/users';
    const response = await fetch(url);
    return await response.json();
  }

  getRandomCard = async () => {
    const cards = await this.getCards();
    const randomNumber = Math.floor(cards.length * Math.random());
    return await cards[randomNumber];
  }

  addCard = async () => {
    const card = await this.getRandomCard();
    this.setState((prevState) => ({ people: [...prevState.people, card] }));
  }

  refreshAll = async () => {
    this.setState({ loading: true });
    const newState = await Promise.all(this.state.people.map(() => this.getRandomCard()));
    this.setState({ people: newState, loading: false });
  }

  avatarChanger = async (index) => {
    const card = await this.getRandomCard();
    this.setState((prevState) => {
      const oldCards = [...prevState.people];
      oldCards[index] = card;
      return { people: oldCards }
    })
  }

  render() {
    return (
      <div className='container'>
        <div className='cards'>
          {this.state.people.map((person, index) => {
            return (
              <div className='card' key={index}>
                <Card loading={this.state.loading} avatar={person.avatars[1].url} onClick={() => this.avatarChanger(index)} ></Card>
              </div>
            )
          })
          }
          <AddButton onClick={this.addCard}></AddButton>
        </div>
        <div className='button-refresh-wrapper'>
            {this.state.people.length ? <RefreshButton onClick={this.refreshAll} /> : null}
        </div>
      </div>

    )
  }
}

export default FetchUser