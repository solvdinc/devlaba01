import React from 'react';
import './TinyFaces.css';
import getPhotos from '../../services/getData';
import Card from '../Card/Card';

export default class TinyFaces extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      paths: [],
      isDisable: true,
      loadingCardIndex: null,
    };
  }

  componentDidMount() {
    getPhotos().then((asyncData) => {
      this.setState({
        cards: asyncData,
        isDisable: false,
      });
    });
  }

  componentDidUpdate() {
    if (this.state.paths.length === 13 && this.state.isDisable === false) {
      this.setState({
        isDisable: true,
      });
    }
  }

  refreshAll = () => {
    getPhotos().then((asyncData) => {
      this.setState({
        cards: asyncData,
      });

      const newPaths = this.state.paths.map(
        (el, i) => this.state.cards[i].avatars[1].url,
      );

      this.setState({
        paths: newPaths,
      });
    });
  };

  addCard = () => {
    const card = this.state.cards.find(
      (el) => !this.state.paths.includes(el.avatars[1].url),
    );

    if (card) {
      this.setState({
        paths: [...this.state.paths, card.avatars[1].url],
      });
    }
  };

  updateCard = (currentIndex) => {
    this.setState({
      loadingCardIndex: currentIndex,
    });

    getPhotos().then((asyncData) => {
      if (this.state.paths.length !== 13) {
        const card = asyncData.find(
          (el) => !this.state.paths.includes(el.avatars[1].url),
        );

        const newPaths = this.state.paths.map((el, index) =>
          index === currentIndex ? card.avatars[1].url : el,
        );

        this.setState({
          paths: newPaths,
          loadingCardIndex: null,
        });
      } else {
        setTimeout(() => {
          this.setState({
            loadingCardIndex: null,
          });
        }, 5000);
      }
    });
  };

  render() {
    return (
      <>
        <div className="cards-container">
          <div className="cards-wrapper">
            {this.state.paths.map((el, i) => (
              <Card
                key={i}
                src={el}
                onClick={() => this.updateCard(i)}
                index={i}
                loadingCardIndex={this.state.loadingCardIndex}
              />
            ))}
            <div className="add-btn-container">
              <button
                disabled={this.state.isDisable}
                className="add-btn"
                onClick={this.addCard}
              />
            </div>
          </div>
        </div>
        <div className="refresh-btn-container">
          <button
            disabled={!this.state.paths.length}
            className="refresh-btn"
            onClick={this.refreshAll}
          >
            Refresh All
          </button>
        </div>
      </>
    );
  }
}
