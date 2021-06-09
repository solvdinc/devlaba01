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
    const data = await response.json();

    return data
  }

  getRandomCard = async () => {
    const cards = await this.getCards();
    const radnomNumber = Math.floor(cards.length * Math.random());
    const randomCard = await cards[radnomNumber];

    return randomCard
  }

  addCard = async () => {
    const card = await this.getRandomCard();

    this.setState(prevState => ({ people: [...prevState.people, card], loading: false }));
  }

  refreshAll = async () => {
    this.setState({ loading: true });

    const newState = await Promise.all([...this.state.people].map(async (el) => {
      const cards = await this.getCards();
      if (el === cards[0]) {
        el = cards[1];
      } else {
        el = cards[0];
      }
      return el
    }));

    this.setState({ people: newState, loading: false });
  }

  avatarChanger = async (e) => {
    const card = await this.getRandomCard();
    const curentItem = +e.target.id;
    const prevState = this.state.people;
    prevState[curentItem] = card;

    this.setState({ people: prevState, loading: false });
  }

  render() {
    return (
      <div className='container'>
        <div className='cards'>
          {this.state.people.map((person, index) => {
            return (
              <div className='card'>
                <Card loading={this.state.loading} key={person.avatars_origin.id.toString()} id={index} avatar={person.avatars[1].url} onClick={this.avatarChanger} ></Card>
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