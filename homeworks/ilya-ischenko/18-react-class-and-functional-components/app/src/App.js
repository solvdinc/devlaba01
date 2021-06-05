import React, { Component } from 'react';
import Button from './Components/Button/Button';
import AddBtn from './Components/AddBtn/AddBtn';
import Card from './Components/Card/Card';
import Overlay from './Components/Overlay/Overlay';
import Loader from './Components/Loader/Loader';

class App extends Component {
  state = {
    fetchedCards: [],
    loader: false,
  };

  async fetchCards() {
    const data = await fetch('https://tinyfac.es/api/users');
    const res = await data.json();
    return res;
  }

  async getRandomCard() {
    const cards = await this.fetchCards();
    const radnomNumber = Math.floor(cards.length * Math.random());
    return cards[radnomNumber];
  }

  addCard() {
    this.getRandomCard().then((card) => {
      this.setState((prevState) => ({
        fetchedCards: [...prevState.fetchedCards, card],
      }));
    });
  }

  refreshCard(index) {
    this.fetchCards().then((cards) => {
      const oldCards = this.state.fetchedCards;
      oldCards.splice(index, 1, cards[0]);

      this.setState({
        fetchedCards: oldCards,
      });
    });
  }

  refreshAll() {
    this.setState({
      loader: true,
    });
    const oldCards = this.state.fetchedCards;
    Promise.all(oldCards.map((card) => this.getRandomCard())).then(
      (newCards) => {
        this.setState({
          loader: false,
          fetchedCards: newCards,
        });
      },
    );
  }

  render() {
    return (
      <div className={this.state.loader ? 'overflow' : null}>
        {this.state.loader && (
          <Overlay>
            <Loader />
          </Overlay>
        )}
        <div className="container">
          <div className="app__inner">
            <div className="cards">
              {this.state.fetchedCards.map((card, index) => (
                <Card
                  key={index}
                  img={card.avatars[1]}
                  onClick={this.refreshCard.bind(this, index)}
                />
              ))}
              <AddBtn onClick={() => this.addCard()} />
            </div>
            <div className="add-btn-wrap">
              {this.state.fetchedCards.length ? (
                <Button onClick={() => this.refreshAll()}>Refresh All</Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
