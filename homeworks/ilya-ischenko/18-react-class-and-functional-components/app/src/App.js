import React, { Component } from 'react';
import Button from './Components/Button/Button';
import AddBtn from './Components/AddBtn/AddBtn';
import Card from './Components/Card/Card';
import Overlay from './Components/Overlay/Overlay';
import Loader from './Components/Loader/Loader';

class App extends Component {
  state = {
    cards: [],
    isLoading: false,
  };

  fetchCards = async () => {
    const res = await fetch('https://tinyfac.es/api/users');
    return await res.json();
  };

  getRandomCard = async () => {
    const cards = await this.fetchCards();
    const randomNumber = Math.floor(cards.length * Math.random());
    return cards[randomNumber];
  };

  addCard = async () => {
    const card = await this.getRandomCard();
    this.setState((prevState) => ({
      cards: [...prevState.cards, card],
    }));
  };

  refreshCard = async (index) => {
    const card = await this.getRandomCard();
    const oldCards = [...this.state.cards];
    oldCards.splice(index, 1, card);

    this.setState({
      cards: oldCards,
    });
  };

  refreshAll = async () => {
    this.setState({
      isLoading: true,
    });
    const oldCards = [...this.state.cards];
    const newCards = await Promise.all(
      oldCards.map(() => this.getRandomCard()),
    );
    this.setState({
      isLoading: false,
      cards: newCards,
    });
  };

  render() {
    return (
      <div className={this.state.isLoading ? 'overflow' : null}>
        {this.state.isLoading && (
          <Overlay>
            <Loader />
          </Overlay>
        )}
        <div className="container">
          <div className="app__inner">
            <div className="cards">
              {this.state.cards.map((card, index) => (
                <Card
                  key={index}
                  img={card.avatars[1]}
                  onClick={() => this.refreshCard(index)}
                />
              ))}
              <AddBtn onClick={this.addCard} />
            </div>
            <div className="add-btn-wrap">
              {this.state.cards.length ? (
                <Button onClick={this.refreshAll}>Refresh All</Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
