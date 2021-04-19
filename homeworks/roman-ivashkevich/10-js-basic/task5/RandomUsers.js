import getData from './Data.js';
import createDOMElement from './createDOMElement.js';

export default class RandomUser {
  constructor(gender, count) {
    this.data = [];
    this.gender = gender;
    this.count = count;
  }

  handleData() {
    // fetch
    getData(this.gender, this.count).then((data) => {
      this.data = data.results;
      this.createUserCard();
    });

    // XMLHttpRequest
    // const URL = 'https://randomuser.me/';
    // const xhr = new XMLHttpRequest();

    // xhr.open('GET', `${URL}api/?gender=${this.gender}&results=${this.count}`);

    // xhr.send();

    // xhr.onload = () => {
    //   this.data = JSON.parse(xhr.response).results;
    //   this.createUserCard();
    // };

    return this;
  }

  createUserCard() {
    const cardsContainer = document.querySelector('.cards');

    this.data.map((card) =>
      createDOMElement(
        'div',
        'card',
        [
          createDOMElement('img', 'card__img', null, null, [
            'src',
            `${card.picture.large}`,
          ]),
          createDOMElement(
            'p',
            'card__description',
            `${card.name.first} ${card.name.last}`,
            null,
          ),
        ],
        cardsContainer,
      ),
    );
  }

  createLayout() {
    this.wrapper = createDOMElement(
      'div',
      'wrapper',
      [
        createDOMElement('h1', 'title', 'Runners', null),
        createDOMElement('div', 'cards', null, null),
      ],
      document.body,
    );
  }
}
